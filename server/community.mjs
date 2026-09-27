import fs from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const dataFile = path.join(root, '..', 'data', 'community.json');
const uploadDir = path.join(root, 'public', 'uploads');

const seedProjects = [
  {
    id: 'p1', title: '夜光记忆杯', creator: '小北',
    goal: '给爷爷留下的马克杯涂上夜光荧光粉，夜里放在床头就像他还在陪着我',
    combos: ['陶瓷马克杯', '夜光荧光粉'], status: '组装中',
    contributions: [
      { who: '阿深', type: '加模组', text: '建议加一个记忆相册模组' },
      { who: '灯工坊', type: '改 3D 图纸', text: '建议给杯托预留底部灯槽' },
    ],
  },
  {
    id: 'p2', title: '时光电话', creator: '阿遥',
    goal: '把奶奶的声音克隆进老电话机，拿起听筒就能和她说说话',
    combos: ['老式旋转电话机', '声音克隆', 'AI 对话'], status: '效果图已生成',
    contributions: [],
  },
  {
    id: 'p3', title: '心愿病房', creator: '安',
    goal: '让病床上的妈妈听到爸爸亲口说一句「我爱你」',
    combos: ['AI 视频分身', '声音模组', '信息提取'], status: '征集中',
    contributions: [],
  },
];

async function readProjects() {
  try {
    const projects = JSON.parse(await fs.readFile(dataFile, 'utf8'));
    return projects.length ? projects : seedProjects;
  } catch (error) {
    if (error.code === 'ENOENT') return seedProjects;
    throw error;
  }
}

async function writeProjects(projects) {
  const tempFile = `${dataFile}.${randomUUID()}.tmp`;
  await fs.writeFile(tempFile, JSON.stringify(projects, null, 2), 'utf8');
  await fs.rename(tempFile, dataFile);
}

export function registerCommunity(app, express) {
  app.get('/api/community', async (_req, res) => {
    try {
      res.json(await readProjects());
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post('/api/community', async (req, res) => {
    const title = String(req.body?.title || '').trim();
    const goal = String(req.body?.goal || '').trim();
    if (!title || !goal || title.length > 80 || goal.length > 1000) {
      return res.status(400).json({ error: '请填写标题和目标，标题最多 80 字，目标最多 1000 字' });
    }
    try {
      const projects = await readProjects();
      const project = {
        id: randomUUID(), title, goal, creator: '我', combos: [],
        status: '征集中', contributions: [],
      };
      projects.unshift(project);
      await writeProjects(projects);
      res.status(201).json(projects);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post('/api/community/:id/help', async (req, res) => {
    const type = String(req.body?.type || '');
    const text = String(req.body?.text || '').trim();
    const attachment = req.body?.attachment;
    if (!['加模组', '改 3D 图纸', '提方案', '供物料'].includes(type) ||
        (!text && !attachment) || text.length > 1000) {
      return res.status(400).json({ error: '请填写助力内容或上传图纸' });
    }
    try {
      const projects = await readProjects();
      const project = projects.find((item) => item.id === req.params.id);
      if (!project) return res.status(404).json({ error: '构想不存在' });
      project.contributions.push({ who: '我', type, text, attachment: attachment || null });
      await writeProjects(projects);
      res.status(201).json(projects);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post('/api/community/uploads', express.raw({ type: 'application/octet-stream', limit: '20mb' }), async (req, res) => {
    const originalName = path.basename(decodeURIComponent(String(req.get('X-File-Name') || '')));
    const extension = path.extname(originalName).toLowerCase();
    if (!['.stl', '.step', '.stp', '.3mf', '.obj'].includes(extension) || !req.body?.length) {
      return res.status(400).json({ error: '仅支持 STL、STEP、STP、3MF、OBJ 图纸' });
    }
    try {
      await fs.mkdir(uploadDir, { recursive: true });
      const filename = `${randomUUID()}${extension}`;
      await fs.writeFile(path.join(uploadDir, filename), req.body);
      res.status(201).json({ name: originalName, url: `/uploads/${filename}` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.use('/uploads', express.static(uploadDir));
}
