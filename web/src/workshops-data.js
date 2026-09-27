// 本文件由 .temp/gen-workshops-src.js 自动生成，请勿手工编辑
// 数据来源：.temp/workshops-data.json + new-workshops-data.json + 原生杯工作间（保真提取）
// 49 个图片型搭配工作间（电话/病床为 3D 演示型，直接复用 DemoPages，不在此列）

export const WORKSHOPS = [
  {
    "id": "di-01",
    "slug": "cup",
    "el": {
      "name": "陶瓷马克杯",
      "desc": "白色陶瓷杯，杯身光滑",
      "tags": [
        "容器",
        "日常",
        "可涂装"
      ]
    },
    "parts": [
      {
        "key": "glow",
        "id": "hp-02",
        "name": "夜光荧光粉",
        "desc": "白天吸光、夜晚自发光",
        "tags": [
          "发光",
          "涂装",
          "被动光"
        ],
        "install": "调漆涂装 · 静置固化 1 小时",
        "effect": "杯身手绘星星与月亮，白天安静可爱，夜晚发出青绿色微光"
      },
      {
        "key": "led",
        "id": "hp-01",
        "name": "LED 灯带",
        "desc": "可调色温的柔性灯带",
        "tags": [
          "发光",
          "柔性",
          "氛围"
        ],
        "install": "杯底嵌线 · 磁吸供电底座",
        "effect": "杯底环绕一圈暖白光，深夜起身替你照亮床头一小圈"
      }
    ],
    "mods": [
      {
        "key": "voice",
        "id": "ai-01",
        "name": "声音克隆",
        "desc": "复刻真人声线",
        "tags": [
          "声音",
          "分身",
          "情感"
        ],
        "effect": "录一段 TA 的声音，AI 学习音色——之后随时都能再听见",
        "panel": "声音克隆体验"
      },
      {
        "key": "album",
        "id": "ai-09",
        "name": "记忆相册",
        "desc": "照片自动整理与讲述",
        "tags": [
          "影像",
          "记忆",
          "叙事"
        ],
        "effect": "上传视频、照片与温馨文字，AI 收藏学习，留住 TA 的样子",
        "panel": "记忆相册"
      }
    ],
    "shots": {
      "plain": {
        "img": "cup/cup-plain.jpg",
        "label": "原设计 · 午后书房",
        "caption": "还是那只普通的白瓷杯——安静地冒着热气，陪你度过每一个午后。"
      },
      "glow": {
        "img": "cup/cup-glow.jpg",
        "label": "夜光 · 熄灯之后",
        "caption": "熄了灯，杯身的星星与月亮悄悄亮起——白天吸饱了阳光，夜里替你温柔发光。"
      },
      "led": {
        "img": "cup/cup-led.jpg",
        "label": "灯带 · 床头暖光",
        "caption": "杯底的一圈暖白灯带，是深夜里最不打扰人的小夜灯。"
      },
      "both": {
        "img": "cup/cup-both.jpg",
        "label": "全组合 · 深夜氛围",
        "caption": "荧光星月与暖光灯带交相辉映——深夜的床头，有了一小片被温柔照亮的宇宙。"
      }
    }
  },
  {
    "id": "di-03",
    "slug": "comb",
    "el": {
      "name": "檀木梳",
      "desc": "木制齿梳，握感温润，适合嵌装小部件",
      "tags": [
        "日用品",
        "木质",
        "随身"
      ]
    },
    "parts": [
      {
        "key": "mic",
        "id": "hp-10",
        "name": "电容麦克风",
        "desc": "高灵敏度拾音头",
        "tags": [
          "收音",
          "音频",
          "输入"
        ],
        "install": "梳柄开槽 · 内嵌拾音头",
        "effect": "梳头时悄悄录下一小段日常，藏在梳柄里"
      },
      {
        "key": "fiber",
        "id": "hp-24",
        "name": "光导纤维",
        "desc": "会漏光的细光纤",
        "tags": [
          "光学",
          "柔性",
          "氛围"
        ],
        "install": "梳背嵌槽 · 埋入一圈微光光纤",
        "effect": "梳背浮起一圈柔柔的光，像把夜色梳顺了"
      }
    ],
    "mods": [
      {
        "key": "record",
        "id": "ai-02",
        "name": "声音录制",
        "desc": "持续采集与归档声音",
        "tags": [
          "采集",
          "记录",
          "回忆"
        ],
        "effect": "把梳头时的哼唱、碎碎念，慢慢存成一条时间轴",
        "panel": "声音留档"
      },
      {
        "key": "playback",
        "id": "ai-10",
        "name": "语音播报",
        "desc": "文字转自然语音",
        "tags": [
          "语音",
          "输出",
          "交互"
        ],
        "effect": "某天回放，听见那年梳头时的轻声",
        "panel": "回忆回放"
      }
    ],
    "shots": {
      "plain": {
        "img": "comb/comb-plain.jpg",
        "label": "原设计 · 午后木桌",
        "caption": "还是那把温润的檀木梳，静静躺在妆台上。"
      },
      "mic": {
        "img": "comb/comb-mic.jpg",
        "label": "收音 · 悄悄留档",
        "caption": "梳柄里多了一枚小小的拾音头，把日常轻轻收进时光。"
      },
      "fiber": {
        "img": "comb/comb-fiber.jpg",
        "label": "光纤 · 夜色微光",
        "caption": "梳背一圈柔光，像把夜色也梳得服服帖帖。"
      },
      "both": {
        "img": "comb/comb-both.jpg",
        "label": "全组合 · 会说话的梳子",
        "caption": "边梳边存、夜里发光——一把会记住日常的梳子。"
      }
    }
  },
  {
    "id": "di-04",
    "slug": "lamp",
    "el": {
      "name": "黄铜台灯",
      "desc": "暖光台灯，金属灯罩",
      "tags": [
        "照明",
        "金属",
        "桌面"
      ]
    },
    "parts": [
      {
        "key": "light",
        "id": "hp-18",
        "name": "光敏传感器",
        "desc": "感知光线明暗",
        "tags": [
          "感知",
          "光线",
          "自动"
        ],
        "install": "灯座嵌装 · 面向窗口",
        "effect": "天光一暗，灯就自己亮起来"
      },
      {
        "key": "rgb",
        "id": "hp-36",
        "name": "RGB 全彩灯珠",
        "desc": "千变万色的灯珠",
        "tags": [
          "发光",
          "色彩",
          "氛围"
        ],
        "install": "灯罩内环 · 替换光源",
        "effect": "暖黄之外，还能调出晚霞般的一抹柔彩"
      }
    ],
    "mods": [
      {
        "key": "alarm",
        "id": "ai-44",
        "name": "智能闹钟",
        "desc": "被叫醒也温柔",
        "tags": [
          "时间",
          "起居",
          "关怀"
        ],
        "effect": "天一亮，用最柔的光把你叫醒",
        "panel": "温柔叫醒"
      },
      {
        "key": "lull",
        "id": "ai-33",
        "name": "睡前故事",
        "desc": "轻声讲的哄睡故事",
        "tags": [
          "陪伴",
          "故事",
          "儿童"
        ],
        "effect": "熄灯后，替你讲一小段睡前故事",
        "panel": "睡前故事"
      }
    ],
    "shots": {
      "plain": {
        "img": "lamp/lamp-plain.jpg",
        "label": "原设计 · 深夜书桌",
        "caption": "一盏安静的黄铜台灯，陪你读完整本旧书。"
      },
      "light": {
        "img": "lamp/lamp-light.jpg",
        "label": "光敏 · 日落自亮",
        "caption": "天一暗，它就懂你地亮起来，等你回家。"
      },
      "rgb": {
        "img": "lamp/lamp-rgb.jpg",
        "label": "灯珠 · 晚霞暖彩",
        "caption": "灯罩里透出一抹柔和的晚霞色。"
      },
      "both": {
        "img": "lamp/lamp-both.jpg",
        "label": "全组合 · 守夜小灯",
        "caption": "日落自动亮、睡前讲故事——一盏会守夜的小灯。"
      }
    }
  },
  {
    "id": "di-05",
    "slug": "box",
    "el": {
      "name": "八音盒",
      "desc": "上发条播放旋律",
      "tags": [
        "音乐",
        "机械",
        "礼物"
      ]
    },
    "parts": [
      {
        "key": "buzzer",
        "id": "hp-39",
        "name": "蜂鸣器",
        "desc": "嘀嘀作响的蜂鸣器",
        "tags": [
          "发声",
          "提示",
          "输出"
        ],
        "install": "盒内嵌装 · 音孔朝上",
        "effect": "发条之外，多了一条会哼歌的声线"
      },
      {
        "key": "led",
        "id": "hp-01",
        "name": "LED 灯带",
        "desc": "可调色温的柔性灯带",
        "tags": [
          "发光",
          "柔性",
          "氛围"
        ],
        "install": "盒盖内沿 · 贴一圈柔光",
        "effect": "打开盒盖，盒里亮起一小片星光"
      }
    ],
    "mods": [
      {
        "key": "melody",
        "id": "ai-19",
        "name": "旋律续写",
        "desc": "把哼的调补成曲",
        "tags": [
          "音乐",
          "创作",
          "交互"
        ],
        "effect": "你哼一小段，它接着续成完整的歌",
        "panel": "续写旋律"
      },
      {
        "key": "lull",
        "id": "ai-33",
        "name": "睡前故事",
        "desc": "轻声讲的哄睡故事",
        "tags": [
          "陪伴",
          "故事",
          "儿童"
        ],
        "effect": "摇一摇，讲一段轻轻的晚安故事",
        "panel": "晚安故事"
      }
    ],
    "shots": {
      "plain": {
        "img": "box/box-plain.jpg",
        "label": "原设计 · 床头八音盒",
        "caption": "上紧发条，熟悉的小调缓缓响起。"
      },
      "buzzer": {
        "img": "box/box-buzzer.jpg",
        "label": "蜂鸣 · 会哼歌",
        "caption": "它多了一条会哼歌的声线。"
      },
      "led": {
        "img": "box/box-led.jpg",
        "label": "灯带 · 盒内星光",
        "caption": "盒盖一开，盒里亮起一小片温柔星光。"
      },
      "both": {
        "img": "box/box-both.jpg",
        "label": "全组合 · 睡前童谣",
        "caption": "星光里续着你的调，讲着晚安的故事。"
      }
    }
  },
  {
    "id": "di-06",
    "slug": "radio",
    "el": {
      "name": "老式收音机",
      "desc": "旋钮调频的桌面收音机",
      "tags": [
        "音频",
        "复古",
        "桌面"
      ]
    },
    "parts": [
      {
        "key": "speaker",
        "id": "hp-06",
        "name": "扬声器",
        "desc": "小体积全频喇叭",
        "tags": [
          "发声",
          "音频",
          "输出"
        ],
        "install": "替换原喇叭 · 内嵌箱体",
        "effect": "声音更暖，像从老唱片里淌出来"
      },
      {
        "key": "led",
        "id": "hp-01",
        "name": "LED 灯带",
        "desc": "可调色温的柔性灯带",
        "tags": [
          "发光",
          "柔性",
          "氛围"
        ],
        "install": "刻度盘后 · 透出暖光",
        "effect": "调频刻度盘泛起一圈暖光"
      }
    ],
    "mods": [
      {
        "key": "dialect",
        "id": "ai-29",
        "name": "方言合成",
        "desc": "用乡音开口说话",
        "tags": [
          "语音",
          "方言",
          "输出"
        ],
        "effect": "用最熟悉的乡音，讲那些老故事",
        "panel": "乡音故事"
      },
      {
        "key": "story",
        "id": "ai-17",
        "name": "故事生成",
        "desc": "把回忆写成小故事",
        "tags": [
          "文字",
          "创作",
          "回忆"
        ],
        "effect": "把旧事慢慢说成一段段故事",
        "panel": "旧事重提"
      }
    ],
    "shots": {
      "plain": {
        "img": "radio/radio-plain.jpg",
        "label": "原设计 · 客厅一角",
        "caption": "一台安静的木头收音机，旋钮等着被转动。"
      },
      "speaker": {
        "img": "radio/radio-speaker.jpg",
        "label": "扬声 · 更暖的声",
        "caption": "声音更暖了，像从老唱片里淌出来。"
      },
      "led": {
        "img": "radio/radio-led.jpg",
        "label": "灯带 · 刻度暖光",
        "caption": "刻度盘泛起一圈暖黄的光。"
      },
      "both": {
        "img": "radio/radio-both.jpg",
        "label": "全组合 · 会讲乡音",
        "caption": "暖光里，乡音把老故事一句句讲给你听。"
      }
    }
  },
  {
    "id": "di-07",
    "slug": "camera",
    "el": {
      "name": "胶片相机",
      "desc": "机械快门，可换镜头",
      "tags": [
        "影像",
        "机械",
        "收藏"
      ]
    },
    "parts": [
      {
        "key": "screen",
        "id": "hp-11",
        "name": "小型显示屏",
        "desc": "高清小屏模组",
        "tags": [
          "显示",
          "输出",
          "交互"
        ],
        "install": "背盖开窗 · 嵌入小屏",
        "effect": "机身背面多了一扇会回放的窗"
      },
      {
        "key": "mic",
        "id": "hp-10",
        "name": "电容麦克风",
        "desc": "高灵敏度拾音头",
        "tags": [
          "收音",
          "音频",
          "输入"
        ],
        "install": "机身侧边 · 嵌一枚拾音头",
        "effect": "按下快门时，也把现场的声音收进来"
      }
    ],
    "mods": [
      {
        "key": "vision",
        "id": "ai-12",
        "name": "图像识别",
        "desc": "识别物体与场景",
        "tags": [
          "视觉",
          "感知",
          "分析"
        ],
        "effect": "认出照片里的人与物，替你讲那段回忆",
        "panel": "看图说话"
      },
      {
        "key": "voice",
        "id": "ai-01",
        "name": "声音克隆",
        "desc": "复刻真人声线",
        "tags": [
          "声音",
          "分身",
          "情感"
        ],
        "effect": "用熟悉的声音，讲照片里的故事",
        "panel": "熟悉的声音"
      }
    ],
    "shots": {
      "plain": {
        "img": "camera/camera-plain.jpg",
        "label": "原设计 · 收藏柜上",
        "caption": "一台停摆的胶片相机，快门里藏着旧时光。"
      },
      "screen": {
        "img": "camera/camera-screen.jpg",
        "label": "屏幕 · 回放的窗",
        "caption": "机背亮起一扇小窗，回放着当年的照片。"
      },
      "mic": {
        "img": "camera/camera-mic.jpg",
        "label": "收音 · 收进现场",
        "caption": "按下快门，连现场的声音也一起收进来。"
      },
      "both": {
        "img": "camera/camera-both.jpg",
        "label": "全组合 · 会说的相机",
        "caption": "认出照片，用熟悉的声音把回忆讲出来。"
      }
    }
  },
  {
    "id": "di-08",
    "slug": "clock",
    "el": {
      "name": "木质挂钟",
      "desc": "整点报时的老挂钟",
      "tags": [
        "时间",
        "木质",
        "墙面"
      ]
    },
    "parts": [
      {
        "key": "crystal",
        "id": "hp-35",
        "name": "时钟晶振",
        "desc": "滴答精准的心跳",
        "tags": [
          "时间",
          "计时",
          "元件"
        ],
        "install": "机芯替换 · 精准走时",
        "effect": "走得又准又稳，像把时间攥紧了"
      },
      {
        "key": "speaker",
        "id": "hp-06",
        "name": "扬声器",
        "desc": "小体积全频喇叭",
        "tags": [
          "发声",
          "音频",
          "输出"
        ],
        "install": "钟底内嵌 · 音孔朝下",
        "effect": "整点不再单调，多了一句轻轻的叮咛"
      }
    ],
    "mods": [
      {
        "key": "alarm",
        "id": "ai-44",
        "name": "智能闹钟",
        "desc": "被叫醒也温柔",
        "tags": [
          "时间",
          "起居",
          "关怀"
        ],
        "effect": "整点用最轻的声音，提醒你该歇歇了",
        "panel": "整点叮咛"
      },
      {
        "key": "remind",
        "id": "ai-26",
        "name": "健康提醒",
        "desc": "贴心的作息关怀",
        "tags": [
          "健康",
          "提醒",
          "关怀"
        ],
        "effect": "久坐、熬夜，它都轻轻提醒一句",
        "panel": "温柔提醒"
      }
    ],
    "shots": {
      "plain": {
        "img": "clock/clock-plain.jpg",
        "label": "原设计 · 客厅墙面",
        "caption": "一只走时的老挂钟，把日子一格一格走完。"
      },
      "crystal": {
        "img": "clock/clock-crystal.jpg",
        "label": "晶振 · 精准走时",
        "caption": "滴答声更稳了，像把时间轻轻攥紧。"
      },
      "speaker": {
        "img": "clock/clock-speaker.jpg",
        "label": "扬声 · 整点叮咛",
        "caption": "整点响起一句轻轻的叮咛。"
      },
      "both": {
        "img": "clock/clock-both.jpg",
        "label": "全组合 · 会关怀的钟",
        "caption": "走得准，还时不时温柔提醒你歇一歇。"
      }
    }
  },
  {
    "id": "di-09",
    "slug": "thermos",
    "el": {
      "name": "搪瓷暖水壶",
      "desc": "保温水壶，印花外壳，握感温润",
      "tags": [
        "保温",
        "日用",
        "复古"
      ]
    },
    "parts": [
      {
        "key": "temp",
        "id": "hp-19",
        "name": "温度传感器",
        "desc": "实时感知水温",
        "tags": [
          "感知",
          "温度",
          "输入"
        ],
        "install": "壶底嵌装 · 贴底测温",
        "effect": "拿起时壶身亮一下色，告诉你水还热不热"
      },
      {
        "key": "glow",
        "id": "hp-01",
        "name": "LED 灯带",
        "desc": "可调色温的柔性灯带",
        "tags": [
          "发光",
          "柔性",
          "氛围"
        ],
        "install": "壶腰嵌槽 · 绕一圈暖光",
        "effect": "夜里倒水时壶身浮起一圈暖晕，像旧时灶台的余温"
      }
    ],
    "mods": [
      {
        "key": "remind",
        "id": "ai-02",
        "name": "声音录制",
        "desc": "持续采集与归档声音",
        "tags": [
          "采集",
          "记录",
          "回忆"
        ],
        "effect": "每次倒水时录下几句碎碎念，存成一条时间轴",
        "panel": "喝水记忆"
      },
      {
        "key": "analyze",
        "id": "ai-08",
        "name": "情感分析",
        "desc": "识别语气与情绪",
        "tags": [
          "情感",
          "分析",
          "陪伴"
        ],
        "effect": "从碎碎念里读懂今天的心情，灯带颜色随之温柔变化",
        "panel": "情绪灯语"
      }
    ],
    "shots": {
      "plain": {
        "img": "thermos/thermos-plain.jpg",
        "label": "原设计 · 厨房一角",
        "caption": "还是那只印花搪瓷壶——安安静静蹲在灶台边，等着谁渴了来倒一杯。"
      },
      "temp": {
        "img": "thermos/thermos-temp.jpg",
        "label": "温感 · 摸一摸就知道",
        "caption": "指尖碰到壶身，一圈暖橙光亮起——水还热着呢。"
      },
      "glow": {
        "img": "thermos/thermos-glow.jpg",
        "label": "暖光 · 夜里倒杯水",
        "caption": "深夜倒水时壶腰亮起暖晕，像灶台没熄的余温。"
      },
      "both": {
        "img": "thermos/thermos-both.jpg",
        "label": "组合 · 懂你冷热的老壶",
        "caption": "壶知道水有多热，也听懂了你的碎碎念——每一杯都是一段被记住的日常。"
      }
    }
  },
  {
    "id": "di-10",
    "slug": "frame",
    "el": {
      "name": "木质相框",
      "desc": "装老照片的木相框",
      "tags": [
        "展示",
        "木质",
        "记忆"
      ]
    },
    "parts": [
      {
        "key": "screen",
        "id": "hp-11",
        "name": "小型显示屏",
        "desc": "高清小屏模组",
        "tags": [
          "显示",
          "输出",
          "交互"
        ],
        "install": "相框内嵌 · 替换照片位",
        "effect": "老照片变成一扇会动的小窗"
      },
      {
        "key": "speaker",
        "id": "hp-06",
        "name": "扬声器",
        "desc": "小体积全频喇叭",
        "tags": [
          "发声",
          "音频",
          "输出"
        ],
        "install": "框背内嵌 · 音孔朝外",
        "effect": "相框学会了说话"
      }
    ],
    "mods": [
      {
        "key": "video",
        "id": "ai-04",
        "name": "AI 视频分身",
        "desc": "生成真人形象视频",
        "tags": [
          "影像",
          "分身",
          "情感"
        ],
        "effect": "相框里的人，动起来对你点点头",
        "panel": "影像重逢"
      },
      {
        "key": "voice",
        "id": "ai-01",
        "name": "声音克隆",
        "desc": "复刻真人声线",
        "tags": [
          "声音",
          "分身",
          "情感"
        ],
        "effect": "用熟悉的声音，说那句好久不见",
        "panel": "声音重逢"
      }
    ],
    "shots": {
      "plain": {
        "img": "frame/frame-plain.jpg",
        "label": "原设计 · 五斗柜上",
        "caption": "一只木相框，框着一张泛黄的老照片。"
      },
      "screen": {
        "img": "frame/frame-screen.jpg",
        "label": "屏幕 · 会动的窗",
        "caption": "照片里的人，在小小屏幕里对你笑了笑。"
      },
      "speaker": {
        "img": "frame/frame-speaker.jpg",
        "label": "扬声 · 学会说话",
        "caption": "相框多了一条会说话的声音。"
      },
      "both": {
        "img": "frame/frame-both.jpg",
        "label": "全组合 · 重逢",
        "caption": "相框里的人动起来，用熟悉的声音说好久不见。"
      }
    }
  },
  {
    "id": "di-11",
    "slug": "typewriter",
    "el": {
      "name": "老式打字机",
      "desc": "机械按键打字机",
      "tags": [
        "文字",
        "机械",
        "收藏"
      ]
    },
    "parts": [
      {
        "key": "eink",
        "id": "hp-25",
        "name": "电子墨水屏",
        "desc": "纸感的低功耗屏",
        "tags": [
          "显示",
          "纸感",
          "低功耗"
        ],
        "install": "机身侧面 · 架一块纸感屏",
        "effect": "打出来的字，浮现在纸感的小屏上"
      },
      {
        "key": "speaker",
        "id": "hp-06",
        "name": "扬声器",
        "desc": "小体积全频喇叭",
        "tags": [
          "发声",
          "音频",
          "输出"
        ],
        "install": "机身底部 · 内嵌喇叭",
        "effect": "敲下的字，还能被轻轻念出来"
      }
    ],
    "mods": [
      {
        "key": "story",
        "id": "ai-17",
        "name": "故事生成",
        "desc": "把回忆写成小故事",
        "tags": [
          "文字",
          "创作",
          "回忆"
        ],
        "effect": "把旧事整理成一段段家书",
        "panel": "家书生成"
      },
      {
        "key": "voice",
        "id": "ai-10",
        "name": "语音播报",
        "desc": "文字转自然语音",
        "tags": [
          "语音",
          "输出",
          "交互"
        ],
        "effect": "把写好的信，一字一句念给你听",
        "panel": "家书朗读"
      }
    ],
    "shots": {
      "plain": {
        "img": "typewriter/typewriter-plain.jpg",
        "label": "原设计 · 书桌角落",
        "caption": "一台斑驳的打字机，等着谁再敲下一行字。"
      },
      "eink": {
        "img": "typewriter/typewriter-eink.jpg",
        "label": "墨水屏 · 纸感浮现",
        "caption": "打出的字，在纸感小屏上浮现出来。"
      },
      "speaker": {
        "img": "typewriter/typewriter-speaker.jpg",
        "label": "扬声 · 念出声",
        "caption": "敲下的句子，被轻轻念了出来。"
      },
      "both": {
        "img": "typewriter/typewriter-both.jpg",
        "label": "全组合 · 家书打印机",
        "caption": "把旧事敲成字、念成信——一封会说话的家书。"
      }
    }
  },
  {
    "id": "di-12",
    "slug": "kerosene",
    "el": {
      "name": "煤油灯",
      "desc": "玻璃罩煤油灯",
      "tags": [
        "照明",
        "复古",
        "氛围"
      ]
    },
    "parts": [
      {
        "key": "light",
        "id": "hp-18",
        "name": "光敏传感器",
        "desc": "感知光线明暗",
        "tags": [
          "感知",
          "光线",
          "自动"
        ],
        "install": "灯座嵌装 · 感应明暗",
        "effect": "天黑下来，火光就自己亮起"
      },
      {
        "key": "speaker",
        "id": "hp-06",
        "name": "扬声器",
        "desc": "小体积全频喇叭",
        "tags": [
          "发声",
          "音频",
          "输出"
        ],
        "install": "灯座底部 · 内嵌喇叭",
        "effect": "火光摇曳时，故事也跟着开场"
      }
    ],
    "mods": [
      {
        "key": "lull",
        "id": "ai-33",
        "name": "睡前故事",
        "desc": "轻声讲的哄睡故事",
        "tags": [
          "陪伴",
          "故事",
          "儿童"
        ],
        "effect": "灯光一暗，睡前故事就开讲",
        "panel": "晚安故事"
      },
      {
        "key": "mood",
        "id": "ai-15",
        "name": "情绪安抚",
        "desc": "温和陪伴式语言",
        "tags": [
          "陪伴",
          "情绪",
          "关怀"
        ],
        "effect": "夜里难眠时，说几句温软的话",
        "panel": "夜话陪伴"
      }
    ],
    "shots": {
      "plain": {
        "img": "kerosene/kerosene-plain.jpg",
        "label": "原设计 · 老屋夜里",
        "caption": "一盏煤油灯，把老屋的夜照得又暖又静。"
      },
      "light": {
        "img": "kerosene/kerosene-light.jpg",
        "label": "光敏 · 日落自亮",
        "caption": "天一暗，火光就自己亮起来。"
      },
      "speaker": {
        "img": "kerosene/kerosene-speaker.jpg",
        "label": "扬声 · 故事开场",
        "caption": "火光摇曳，故事悄悄开了场。"
      },
      "both": {
        "img": "kerosene/kerosene-both.jpg",
        "label": "全组合 · 晚安煤油灯",
        "caption": "日落自亮，睡前讲一段温柔的故事。"
      }
    }
  },
  {
    "id": "di-13",
    "slug": "suitcase",
    "el": {
      "name": "旧旅行箱",
      "desc": "皮质手提箱",
      "tags": [
        "收纳",
        "皮质",
        "旅行"
      ]
    },
    "parts": [
      {
        "key": "wifi",
        "id": "hp-26",
        "name": "WiFi 模组",
        "desc": "无线上网模块",
        "tags": [
          "连接",
          "无线",
          "网络"
        ],
        "install": "箱盖内衬 · 隐藏嵌装",
        "effect": "箱子连上网，能把远方的挂念收进来"
      },
      {
        "key": "speaker",
        "id": "hp-06",
        "name": "扬声器",
        "desc": "小体积全频喇叭",
        "tags": [
          "发声",
          "音频",
          "输出"
        ],
        "install": "箱内夹层 · 内嵌喇叭",
        "effect": "打开箱子，听见那头的叮嘱"
      }
    ],
    "mods": [
      {
        "key": "wechat",
        "id": "ai-06",
        "name": "微信记忆分身",
        "desc": "用聊天记录构建人物分身",
        "tags": [
          "社交",
          "分身",
          "回忆"
        ],
        "effect": "把聊天里的 TA，装进这只箱子",
        "panel": "记忆分身"
      },
      {
        "key": "message",
        "id": "ai-37",
        "name": "语音留言",
        "desc": "替你留言给家人",
        "tags": [
          "语音",
          "家庭",
          "传情"
        ],
        "effect": "替你收下、也替你捎去那些话",
        "panel": "语音留言"
      }
    ],
    "shots": {
      "plain": {
        "img": "suitcase/suitcase-plain.jpg",
        "label": "原设计 · 床脚角落",
        "caption": "一只旧皮箱，装着出远门的念想。"
      },
      "wifi": {
        "img": "suitcase/suitcase-wifi.jpg",
        "label": "联网 · 收进挂念",
        "caption": "箱子连上了网，把远方的挂念收进来。"
      },
      "speaker": {
        "img": "suitcase/suitcase-speaker.jpg",
        "label": "扬声 · 听见叮嘱",
        "caption": "打开箱子，听见那头的碎碎念。"
      },
      "both": {
        "img": "suitcase/suitcase-both.jpg",
        "label": "全组合 · 会叮嘱的箱子",
        "caption": "打开箱子，听见熟悉的人轻声叮嘱。"
      }
    }
  },
  {
    "id": "di-14",
    "slug": "tv",
    "el": {
      "name": "老式显像管电视",
      "desc": "方盒子黑白电视",
      "tags": [
        "显示",
        "复古",
        "大件"
      ]
    },
    "parts": [
      {
        "key": "projector",
        "id": "hp-38",
        "name": "微型投影",
        "desc": "掌心大小的投影镜头",
        "tags": [
          "影像",
          "投影",
          "输出"
        ],
        "install": "机身顶部 · 加装投影镜头",
        "effect": "影像投到墙上，比屏幕更大一截"
      },
      {
        "key": "speaker",
        "id": "hp-06",
        "name": "扬声器",
        "desc": "小体积全频喇叭",
        "tags": [
          "发声",
          "音频",
          "输出"
        ],
        "install": "机身侧边 · 内嵌喇叭",
        "effect": "电视里的声音，暖了起来"
      }
    ],
    "mods": [
      {
        "key": "video",
        "id": "ai-04",
        "name": "AI 视频分身",
        "desc": "生成真人形象视频",
        "tags": [
          "影像",
          "分身",
          "情感"
        ],
        "effect": "老电视里，再放一次 TA 的模样",
        "panel": "影像重映"
      },
      {
        "key": "repair",
        "id": "ai-16",
        "name": "老照片修复",
        "desc": "修补划痕并智能上色",
        "tags": [
          "影像",
          "修复",
          "记忆"
        ],
        "effect": "把模糊的老影像，修得清晰又鲜亮",
        "panel": "影像修复"
      }
    ],
    "shots": {
      "plain": {
        "img": "tv/tv-plain.jpg",
        "label": "原设计 · 客厅电视柜",
        "caption": "一台方方正正的老电视，屏幕安静地黑着。"
      },
      "projector": {
        "img": "tv/tv-projector.jpg",
        "label": "投影 · 更大影像",
        "caption": "影像投到墙上，比屏幕又大了一截。"
      },
      "speaker": {
        "img": "tv/tv-speaker.jpg",
        "label": "扬声 · 声音变暖",
        "caption": "电视里的声音，变得暖暖的。"
      },
      "both": {
        "img": "tv/tv-both.jpg",
        "label": "全组合 · 重映旧时光",
        "caption": "老电视里，再放一次熟悉的那张脸。"
      }
    }
  },
  {
    "id": "di-15",
    "slug": "flashlight",
    "el": {
      "name": "黄铜手电筒",
      "desc": "金属筒身手电",
      "tags": [
        "照明",
        "便携",
        "金属"
      ]
    },
    "parts": [
      {
        "key": "light",
        "id": "hp-18",
        "name": "光敏传感器",
        "desc": "感知光线明暗",
        "tags": [
          "感知",
          "光线",
          "自动"
        ],
        "install": "筒身嵌装 · 感应明暗",
        "effect": "天快黑时，它先替你亮起来"
      },
      {
        "key": "solar",
        "id": "hp-08",
        "name": "太阳能板",
        "desc": "柔性光伏板",
        "tags": [
          "能源",
          "户外",
          "可持续"
        ],
        "install": "筒身贴装 · 柔性光伏片",
        "effect": "晒晒太阳，就攒下一晚的光"
      }
    ],
    "mods": [
      {
        "key": "weather",
        "id": "ai-49",
        "name": "天气管家",
        "desc": "出门前的温柔叮嘱",
        "tags": [
          "生活",
          "天气",
          "关怀"
        ],
        "effect": "出门前，轻声提醒一句带伞加衣",
        "panel": "天气叮咛"
      },
      {
        "key": "remind",
        "id": "ai-26",
        "name": "健康提醒",
        "desc": "贴心的作息关怀",
        "tags": [
          "健康",
          "提醒",
          "关怀"
        ],
        "effect": "夜归路上，提醒你早点休息",
        "panel": "夜路关怀"
      }
    ],
    "shots": {
      "plain": {
        "img": "flashlight/flashlight-plain.jpg",
        "label": "原设计 · 玄关抽屉",
        "caption": "一支黄铜手电，等着照亮回家的路。"
      },
      "light": {
        "img": "flashlight/flashlight-light.jpg",
        "label": "光敏 · 天黑自亮",
        "caption": "天快黑时，它先替你亮起来。"
      },
      "solar": {
        "img": "flashlight/flashlight-solar.jpg",
        "label": "光伏 · 晒出续航",
        "caption": "晒晒太阳，就攒下一整晚的光。"
      },
      "both": {
        "img": "flashlight/flashlight-both.jpg",
        "label": "全组合 · 陪你夜路",
        "caption": "天黑自亮、晒出续航，一路有人陪着回家。"
      }
    }
  },
  {
    "id": "di-16",
    "slug": "sewing",
    "el": {
      "name": "手摇缝纫机",
      "desc": "脚踏板驱动的老式缝纫机",
      "tags": [
        "工具",
        "机械",
        "家传"
      ]
    },
    "parts": [
      {
        "key": "vibrate",
        "id": "hp-21",
        "name": "振动马达",
        "desc": "手机里的振动马达",
        "tags": [
          "振动",
          "驱动",
          "反馈"
        ],
        "install": "踏板下 · 内嵌振动马达",
        "effect": "踩下踏板，机身轻轻回你一记颤动"
      },
      {
        "key": "led",
        "id": "hp-01",
        "name": "LED 灯带",
        "desc": "可调色温的柔性灯带",
        "tags": [
          "发光",
          "柔性",
          "氛围"
        ],
        "install": "机臂下 · 加装工作灯",
        "effect": "缝纫时，机臂下亮起一小片暖光"
      }
    ],
    "mods": [
      {
        "key": "comfort",
        "id": "ai-15",
        "name": "情绪安抚",
        "desc": "温和陪伴式语言",
        "tags": [
          "陪伴",
          "情绪",
          "关怀"
        ],
        "effect": "踩线时，有句温软的话陪着你",
        "panel": "絮语陪伴"
      },
      {
        "key": "story",
        "id": "ai-17",
        "name": "故事生成",
        "desc": "把回忆写成小故事",
        "tags": [
          "文字",
          "创作",
          "回忆"
        ],
        "effect": "把缝进去的旧事，说成一段故事",
        "panel": "旧事如线"
      }
    ],
    "shots": {
      "plain": {
        "img": "sewing/sewing-plain.jpg",
        "label": "原设计 · 窗边缝纫",
        "caption": "一台吱呀作响的老缝纫机，等着谁再踩一脚。"
      },
      "vibrate": {
        "img": "sewing/sewing-vibrate.jpg",
        "label": "振动 · 温柔回响",
        "caption": "踩下踏板，机身轻轻回你一记颤动。"
      },
      "led": {
        "img": "sewing/sewing-led.jpg",
        "label": "灯带 · 工作暖光",
        "caption": "机臂下亮起一小片暖光，照亮针脚。"
      },
      "both": {
        "img": "sewing/sewing-both.jpg",
        "label": "全组合 · 絮语缝纫机",
        "caption": "暖光里踩着踏板，有句温软的话陪着缝。"
      }
    }
  },
  {
    "id": "di-17",
    "slug": "frog",
    "el": {
      "name": "铁皮发条青蛙",
      "desc": "上紧发条会蹦跳的铁皮玩具",
      "tags": [
        "玩具",
        "发条",
        "童年"
      ]
    },
    "parts": [
      {
        "key": "motor",
        "id": "hp-05",
        "name": "微型马达",
        "desc": "低速静音马达",
        "tags": [
          "运动",
          "驱动",
          "机械"
        ],
        "install": "机芯替换 · 内嵌静音马达",
        "effect": "不用上发条，也能一下一下往前跳"
      },
      {
        "key": "rgb",
        "id": "hp-36",
        "name": "RGB 全彩灯珠",
        "desc": "千变万色的灯珠",
        "tags": [
          "发光",
          "色彩",
          "氛围"
        ],
        "install": "双眼内 · 嵌两颗小灯珠",
        "effect": "两颗眼睛亮起来，还会眨呀眨"
      }
    ],
    "mods": [
      {
        "key": "pet",
        "id": "ai-40",
        "name": "虚拟宠物",
        "desc": "会撒娇的电子宠物",
        "tags": [
          "陪伴",
          "宠物",
          "交互"
        ],
        "effect": "它会蹦跳、会撒娇，像真的小宠物",
        "panel": "撒娇互动"
      },
      {
        "key": "voice",
        "id": "ai-01",
        "name": "声音克隆",
        "desc": "复刻真人声线",
        "tags": [
          "声音",
          "分身",
          "情感"
        ],
        "effect": "用熟悉的声音，学两声逗你的话",
        "panel": "熟悉嗓音"
      }
    ],
    "shots": {
      "plain": {
        "img": "frog/frog-plain.jpg",
        "label": "原设计 · 旧木桌上",
        "caption": "一只铁皮青蛙，安安静静蹲在旧桌上。"
      },
      "motor": {
        "img": "frog/frog-motor.jpg",
        "label": "马达 · 自己会跳",
        "caption": "不上发条，它也能一下一下跳起来。"
      },
      "rgb": {
        "img": "frog/frog-rgb.jpg",
        "label": "灯珠 · 眼睛会眨",
        "caption": "两颗眼睛亮起来，还冲你眨呀眨。"
      },
      "both": {
        "img": "frog/frog-both.jpg",
        "label": "全组合 · 会撒娇的青蛙",
        "caption": "它会跳、会眨眼，还会用熟悉的声音逗你。"
      }
    }
  },
  {
    "id": "di-18",
    "slug": "fan",
    "el": {
      "name": "蒲扇",
      "desc": "竹柄芭蕉扇，扇出夏夜的风",
      "tags": [
        "竹编",
        "夏夜",
        "长辈"
      ]
    },
    "parts": [
      {
        "key": "fan",
        "id": "hp-31",
        "name": "微型风扇",
        "desc": "巴掌大的小风扇",
        "tags": [
          "送风",
          "驱动",
          "降温"
        ],
        "install": "扇柄端 · 内嵌小风扇",
        "effect": "不用手摇，也有丝丝凉风"
      },
      {
        "key": "fiber",
        "id": "hp-24",
        "name": "光导纤维",
        "desc": "会漏光的细光纤",
        "tags": [
          "光学",
          "柔性",
          "氛围"
        ],
        "install": "扇缘编入 · 一圈微光",
        "effect": "扇沿浮起一圈柔柔的光"
      }
    ],
    "mods": [
      {
        "key": "message",
        "id": "ai-37",
        "name": "语音留言",
        "desc": "替你留言给家人",
        "tags": [
          "语音",
          "家庭",
          "传情"
        ],
        "effect": "摇扇时，替你捎去一句晚安",
        "panel": "摇扇传话"
      },
      {
        "key": "lull",
        "id": "ai-33",
        "name": "睡前故事",
        "desc": "轻声讲的哄睡故事",
        "tags": [
          "陪伴",
          "故事",
          "儿童"
        ],
        "effect": "夏夜里，边扇风边讲老故事",
        "panel": "夏夜故事"
      }
    ],
    "shots": {
      "plain": {
        "img": "fan/fan-plain.jpg",
        "label": "原设计 · 竹凉席上",
        "caption": "一把蒲扇，摇着整个夏天最凉的风。"
      },
      "fan": {
        "img": "fan/fan-fan.jpg",
        "label": "风扇 · 自生凉风",
        "caption": "不用手摇，也有丝丝凉风送来。"
      },
      "fiber": {
        "img": "fan/fan-fiber.jpg",
        "label": "光纤 · 扇缘微光",
        "caption": "扇沿浮起一圈柔柔的光。"
      },
      "both": {
        "img": "fan/fan-both.jpg",
        "label": "全组合 · 夏夜蒲扇",
        "caption": "凉风伴着微光，念着那句迟到的晚安。"
      }
    }
  },
  {
    "id": "di-19",
    "slug": "gramophone",
    "el": {
      "name": "留声机",
      "desc": "手摇上弦的黑胶留声机",
      "tags": [
        "音频",
        "机械",
        "复古"
      ]
    },
    "parts": [
      {
        "key": "speaker",
        "id": "hp-06",
        "name": "扬声器",
        "desc": "小体积全频喇叭",
        "tags": [
          "发声",
          "音频",
          "输出"
        ],
        "install": "底座内 · 内嵌喇叭",
        "effect": "声音更清晰，像把老唱片唤醒了"
      },
      {
        "key": "led",
        "id": "hp-01",
        "name": "LED 灯带",
        "desc": "可调色温的柔性灯带",
        "tags": [
          "发光",
          "柔性",
          "氛围"
        ],
        "install": "底座一圈 · 暖光氛围",
        "effect": "唱盘转起来，底座泛一圈暖光"
      }
    ],
    "mods": [
      {
        "key": "music",
        "id": "ai-18",
        "name": "音乐生成",
        "desc": "谱一段专属旋律",
        "tags": [
          "音乐",
          "创作",
          "定制"
        ],
        "effect": "把那些年，谱成一支专属旋律",
        "panel": "谱曲"
      },
      {
        "key": "repair",
        "id": "ai-31",
        "name": "老录音修复",
        "desc": "降噪修复老磁带",
        "tags": [
          "音频",
          "修复",
          "记忆"
        ],
        "effect": "把沙沙的旧唱片，修得清晰如昨",
        "panel": "修复旧声"
      }
    ],
    "shots": {
      "plain": {
        "img": "gramophone/gramophone-plain.jpg",
        "label": "原设计 · 木柜之上",
        "caption": "一台留声机，静静转着旧日的旋律。"
      },
      "speaker": {
        "img": "gramophone/gramophone-speaker.jpg",
        "label": "扬声 · 唤醒唱片",
        "caption": "声音更清晰，像把老唱片唤醒了。"
      },
      "led": {
        "img": "gramophone/gramophone-led.jpg",
        "label": "灯带 · 暖光氛围",
        "caption": "唱盘转动，底座泛起一圈暖光。"
      },
      "both": {
        "img": "gramophone/gramophone-both.jpg",
        "label": "全组合 · 旧曲留声机",
        "caption": "暖光里，旧旋律被谱成一支新的歌。"
      }
    }
  },
  {
    "id": "di-20",
    "slug": "watch",
    "el": {
      "name": "老怀表",
      "desc": "黄铜链坠的旧怀表",
      "tags": [
        "时间",
        "金属",
        "随身"
      ]
    },
    "parts": [
      {
        "key": "heart",
        "id": "hp-22",
        "name": "心率传感器",
        "desc": "贴肤测心跳的传感器",
        "tags": [
          "感知",
          "健康",
          "贴肤"
        ],
        "install": "表背贴装 · 感应心跳",
        "effect": "贴着胸口，就听见自己的心跳"
      },
      {
        "key": "vibrate",
        "id": "hp-21",
        "name": "振动马达",
        "desc": "手机里的振动马达",
        "tags": [
          "振动",
          "驱动",
          "反馈"
        ],
        "install": "表壳内 · 内嵌振动马达",
        "effect": "该歇歇时，它在掌心轻轻一颤"
      }
    ],
    "mods": [
      {
        "key": "health",
        "id": "ai-26",
        "name": "健康提醒",
        "desc": "贴心的作息关怀",
        "tags": [
          "健康",
          "提醒",
          "关怀"
        ],
        "effect": "心跳、作息，它都替你轻轻惦记",
        "panel": "健康惦记"
      },
      {
        "key": "medicine",
        "id": "ai-27",
        "name": "用药提醒",
        "desc": "按时提醒吃药",
        "tags": [
          "健康",
          "提醒",
          "长辈"
        ],
        "effect": "到点了，轻轻提醒一句该吃药了",
        "panel": "按时提醒"
      }
    ],
    "shots": {
      "plain": {
        "img": "watch/watch-plain.jpg",
        "label": "原设计 · 掌心旧表",
        "caption": "一块老怀表，表盖里封着旧时光。"
      },
      "heart": {
        "img": "watch/watch-heart.jpg",
        "label": "心率 · 听见心跳",
        "caption": "贴着胸口，就听见自己的心跳。"
      },
      "vibrate": {
        "img": "watch/watch-vibrate.jpg",
        "label": "振动 · 掌心轻颤",
        "caption": "该歇歇时，它在掌心轻轻一颤。"
      },
      "both": {
        "img": "watch/watch-both.jpg",
        "label": "全组合 · 会关心的怀表",
        "caption": "听着心跳，轻轻提醒你按时吃药歇息。"
      }
    }
  },
  {
    "id": "di-21",
    "slug": "enamel-mug",
    "el": {
      "name": "搪瓷缸",
      "desc": "印着红字的搪瓷缸，磕掉过瓷露出铁",
      "tags": [
        "容器",
        "复古",
        "日用"
      ]
    },
    "parts": [
      {
        "key": "glow",
        "id": "hp-02",
        "name": "夜光荧光粉",
        "desc": "白天吸光、夜晚自发光",
        "tags": [
          "发光",
          "涂装",
          "被动光"
        ],
        "install": "磕瓷处填补 · 荧光补瓷",
        "effect": "磕掉瓷的地方夜里泛着柔光，像旧伤变成了星星"
      },
      {
        "key": "button",
        "id": "hp-03",
        "name": "圆形按钮",
        "desc": "段落感机械按钮",
        "tags": [
          "触发",
          "交互",
          "机械"
        ],
        "install": "缸把手末端 · 拇指位",
        "effect": "按下时缸壁轻轻一震，像在回应你握住它的手"
      }
    ],
    "mods": [
      {
        "key": "voice",
        "id": "ai-01",
        "name": "声音克隆",
        "desc": "复刻真人声线",
        "tags": [
          "声音",
          "分身",
          "情感"
        ],
        "effect": "按下按钮，缸里传出爷爷当年的声音，说一句老话",
        "panel": "声纹回放"
      },
      {
        "key": "memory",
        "id": "ai-05",
        "name": "信息提取",
        "desc": "从聊天记录提取记忆素材",
        "tags": [
          "数据",
          "记忆",
          "整理"
        ],
        "effect": "从老照片里提取搪瓷缸出现的每个场景，拼出一段家族记忆",
        "panel": "记忆拼图"
      }
    ],
    "shots": {
      "plain": {
        "img": "enamel-mug/enamel-mug-plain.jpg",
        "label": "原设计 · 搪瓷缸",
        "caption": "磕掉瓷的搪瓷缸，露出铁底色——用过很多年，红字还看得清。"
      },
      "glow": {
        "img": "enamel-mug/enamel-mug-glow.jpg",
        "label": "夜光 · 磕瓷处亮起来",
        "caption": "磕掉瓷的地方夜里泛光，旧伤变成了星星。"
      },
      "button": {
        "img": "enamel-mug/enamel-mug-button.jpg",
        "label": "按钮 · 按一下就回应",
        "caption": "把手末端多了一颗小按钮，按下时缸壁轻轻一震。"
      },
      "both": {
        "img": "enamel-mug/enamel-mug-both.jpg",
        "label": "组合 · 会说话的老搪瓷缸",
        "caption": "按下按钮，爷爷的声音从缸里传出来，磕瓷处的星光亮着——像他还坐在你对面。"
      }
    }
  },
  {
    "id": "di-22",
    "slug": "cradle",
    "el": {
      "name": "竹编摇篮",
      "desc": "婴儿睡过的竹摇篮",
      "tags": [
        "家具",
        "竹编",
        "童年"
      ]
    },
    "parts": [
      {
        "key": "speaker",
        "id": "hp-06",
        "name": "扬声器",
        "desc": "小体积全频喇叭",
        "tags": [
          "发声",
          "音频",
          "输出"
        ],
        "install": "摇篮侧 · 内嵌喇叭",
        "effect": "轻轻一摇，摇篮里响起温柔声"
      },
      {
        "key": "fiber",
        "id": "hp-24",
        "name": "光导纤维",
        "desc": "会漏光的细光纤",
        "tags": [
          "光学",
          "柔性",
          "氛围"
        ],
        "install": "摇篮边 · 编入一圈星光",
        "effect": "摇篮边亮起一小圈星光，像夜空"
      }
    ],
    "mods": [
      {
        "key": "lull",
        "id": "ai-33",
        "name": "睡前故事",
        "desc": "轻声讲的哄睡故事",
        "tags": [
          "陪伴",
          "故事",
          "儿童"
        ],
        "effect": "摇一摇，自动讲起睡前故事",
        "panel": "摇篮故事"
      },
      {
        "key": "sleep",
        "id": "ai-34",
        "name": "智能哄睡",
        "desc": "营造入睡氛围",
        "tags": [
          "陪伴",
          "睡眠",
          "氛围"
        ],
        "effect": "轻柔的声音和微光，哄着慢慢入睡",
        "panel": "哄睡氛围"
      }
    ],
    "shots": {
      "plain": {
        "img": "cradle/cradle-plain.jpg",
        "label": "原设计 · 老屋角落",
        "caption": "一只竹摇篮，轻轻摇着旧日的梦。"
      },
      "speaker": {
        "img": "cradle/cradle-speaker.jpg",
        "label": "扬声 · 摇篮低语",
        "caption": "轻轻一摇，摇篮里响起温柔的声音。"
      },
      "fiber": {
        "img": "cradle/cradle-fiber.jpg",
        "label": "光纤 · 一圈星光",
        "caption": "摇篮边亮起一小圈星光，像夜空。"
      },
      "both": {
        "img": "cradle/cradle-both.jpg",
        "label": "全组合 · 摇篮夜话",
        "caption": "星光下摇一摇，睡前故事轻轻开场。"
      }
    }
  },
  {
    "id": "di-23",
    "slug": "chair",
    "el": {
      "name": "藤编摇椅",
      "desc": "吱呀作响的藤摇椅",
      "tags": [
        "家具",
        "藤编",
        "休闲"
      ]
    },
    "parts": [
      {
        "key": "tilt",
        "id": "hp-41",
        "name": "倾角传感器",
        "desc": "察觉歪斜的传感器",
        "tags": [
          "感知",
          "姿态",
          "保护"
        ],
        "install": "椅脚内 · 嵌装感应",
        "effect": "一坐下、一摇晃，它都察觉"
      },
      {
        "key": "speaker",
        "id": "hp-06",
        "name": "扬声器",
        "desc": "小体积全频喇叭",
        "tags": [
          "发声",
          "音频",
          "输出"
        ],
        "install": "扶手内 · 内嵌喇叭",
        "effect": "摇椅会陪你说说话"
      }
    ],
    "mods": [
      {
        "key": "speech",
        "id": "ai-07",
        "name": "语音识别",
        "desc": "语音转文字",
        "tags": [
          "语音",
          "转写",
          "交互"
        ],
        "effect": "听懂你说的话，接上你的话头",
        "panel": "听你说话"
      },
      {
        "key": "chat",
        "id": "ai-11",
        "name": "AI 对话",
        "desc": "自然语言对话能力",
        "tags": [
          "对话",
          "陪伴",
          "交互"
        ],
        "effect": "坐下来摇一摇，TA 陪你聊聊天",
        "panel": "陪聊"
      }
    ],
    "shots": {
      "plain": {
        "img": "chair/chair-plain.jpg",
        "label": "原设计 · 窗边摇椅",
        "caption": "一把吱呀作响的藤摇椅，晒着午后阳光。"
      },
      "tilt": {
        "img": "chair/chair-tilt.jpg",
        "label": "倾角 · 察觉摇晃",
        "caption": "一坐下、一摇晃，它都轻轻察觉。"
      },
      "speaker": {
        "img": "chair/chair-speaker.jpg",
        "label": "扬声 · 陪你说话",
        "caption": "扶手里传出一句温柔的话。"
      },
      "both": {
        "img": "chair/chair-both.jpg",
        "label": "全组合 · 摇椅聊天",
        "caption": "坐下来摇一摇，有人陪你聊聊天。"
      }
    }
  },
  {
    "id": "di-24",
    "slug": "top",
    "el": {
      "name": "木陀螺",
      "desc": "鞭子抽着转的木陀螺，转起来嗡嗡响",
      "tags": [
        "玩具",
        "木质",
        "童年"
      ]
    },
    "parts": [
      {
        "key": "led",
        "id": "hp-01",
        "name": "LED 灯带",
        "desc": "可调色温的柔性灯带",
        "tags": [
          "发光",
          "柔性",
          "氛围"
        ],
        "install": "陀螺腰部 · 嵌一圈薄灯",
        "effect": "转起来时腰部光带拉成一个光环，像童年的彩色光圈"
      },
      {
        "key": "counter",
        "id": "hp-05",
        "name": "微型马达",
        "desc": "低速静音马达",
        "tags": [
          "运动",
          "驱动",
          "机械"
        ],
        "install": "陀螺底部 · 藏在铁尖里",
        "effect": "不用鞭子也能自己转起来，安静地在桌上转着等你回来看"
      }
    ],
    "mods": [
      {
        "key": "record",
        "id": "ai-02",
        "name": "声音录制",
        "desc": "持续采集与归档声音",
        "tags": [
          "采集",
          "记录",
          "回忆"
        ],
        "effect": "陀螺转起来时录下孩子的笑声，存在陀螺里",
        "panel": "笑声留档"
      },
      {
        "key": "playback",
        "id": "ai-10",
        "name": "语音播报",
        "desc": "文字转自然语音",
        "tags": [
          "语音",
          "转写",
          "交互"
        ],
        "effect": "陀螺停下时说一句童年的话，像在提醒你该回去玩了",
        "panel": "童年回声"
      }
    ],
    "shots": {
      "plain": {
        "img": "top/top-plain.jpg",
        "label": "原设计 · 院里的陀螺",
        "caption": "鞭子一抽，木陀螺嗡嗡转起来——是院子里整个下午的消遣。"
      },
      "led": {
        "img": "top/top-led.jpg",
        "label": "光带 · 转成光环",
        "caption": "转起来时腰部光带拉成一个光环，像把童年的颜色留住。"
      },
      "counter": {
        "img": "top/top-counter.jpg",
        "label": "自转 · 不用鞭子也能转",
        "caption": "底部藏了个小马达，不用鞭子也能在桌上安静地转着。"
      },
      "both": {
        "img": "top/top-both.jpg",
        "label": "组合 · 会留笑声的陀螺",
        "caption": "光带转成光环，笑声存进陀螺，停下时说一句童年老话——像把院子里的下午找回来了。"
      }
    }
  },
  {
    "id": "di-25",
    "slug": "kite",
    "el": {
      "name": "纸风筝",
      "desc": "竹骨纸面的老风筝，线一放飞到天上",
      "tags": [
        "玩具",
        "竹纸",
        "童年"
      ]
    },
    "parts": [
      {
        "key": "light",
        "id": "hp-18",
        "name": "光敏传感器",
        "desc": "感知光线明暗",
        "tags": [
          "感知",
          "光",
          "输入"
        ],
        "install": "风筝面 · 贴在纸背上",
        "effect": "天暗下来时风筝面浮出暖光，像一盏挂在云上的灯"
      },
      {
        "key": "gyro",
        "id": "hp-11",
        "name": "陀螺仪",
        "desc": "感知姿态与倾斜",
        "tags": [
          "感知",
          "姿态",
          "输入"
        ],
        "install": "风筝骨交叉处 · 卡在竹节",
        "effect": "手机上能看到风筝在风里的姿态，知道它偏了还是稳了"
      }
    ],
    "mods": [
      {
        "key": "camera",
        "id": "ai-09",
        "name": "记忆相册",
        "desc": "照片自动整理与讲述",
        "tags": [
          "影像",
          "记忆",
          "叙事"
        ],
        "effect": "风筝上的光敏记录每次放飞时的天色，自动拼成一本放飞日记",
        "panel": "飞天日记"
      },
      {
        "key": "voice",
        "id": "ai-07",
        "name": "语音识别",
        "desc": "语音转文字",
        "tags": [
          "语音",
          "转写",
          "交互"
        ],
        "effect": "放风筝时说的话转成文字写在风筝面上，像给天空寄了封信",
        "panel": "天空书信"
      }
    ],
    "shots": {
      "plain": {
        "img": "kite/kite-plain.jpg",
        "label": "原设计 · 春天的风筝",
        "caption": "竹骨纸面的老风筝，线一放就飞到天上——是整个春天的头等大事。"
      },
      "light": {
        "img": "kite/kite-light.jpg",
        "label": "感光 · 天暗了会亮",
        "caption": "天暗下来时风筝面浮出暖光，像挂在云上的一盏灯。"
      },
      "gyro": {
        "img": "kite/kite-gyro.jpg",
        "label": "陀螺仪 · 看见风的姿态",
        "caption": "手机上能看到风筝的姿态——偏了多少、稳不稳，像它在跟你说话。"
      },
      "both": {
        "img": "kite/kite-both.jpg",
        "label": "组合 · 会写日记的风筝",
        "caption": "天色记录成日记，说的话写在风筝面上——每一次放飞都被天空记住。"
      }
    }
  },
  {
    "id": "di-26",
    "slug": "rattle",
    "el": {
      "name": "拨浪鼓",
      "desc": "咚咚作响的小拨浪鼓，摇一摇两边弹珠敲鼓面",
      "tags": [
        "玩具",
        "声音",
        "童年"
      ]
    },
    "parts": [
      {
        "key": "led",
        "id": "hp-12",
        "name": "RGB 全彩灯珠",
        "desc": "可编程彩色 LED",
        "tags": [
          "发光",
          "彩色",
          "可编程"
        ],
        "install": "鼓面两侧 · 嵌入小灯",
        "effect": "摇动时鼓面两侧亮起随节奏变色的光，像把声音变成看得见的颜色"
      },
      {
        "key": "mic",
        "id": "hp-10",
        "name": "电容麦克风",
        "desc": "高灵敏度拾音头",
        "tags": [
          "收音",
          "音频",
          "输入"
        ],
        "install": "鼓腰内壁 · 藏在鼓身里",
        "effect": "录下拨浪鼓的每一次咚咚声，存成节奏档案"
      }
    ],
    "mods": [
      {
        "key": "analyze",
        "id": "ai-03",
        "name": "声音分析",
        "desc": "声纹情绪与语义分析",
        "tags": [
          "分析",
          "情感",
          "洞察"
        ],
        "effect": "从咚咚声的节奏里读出摇鼓人的心情，灯色随之变化",
        "panel": "节奏心情"
      },
      {
        "key": "playback",
        "id": "ai-10",
        "name": "语音播报",
        "desc": "文字转自然语音",
        "tags": [
          "语音",
          "转写",
          "交互"
        ],
        "effect": "摇三下拨浪鼓，它说一句童年时奶奶哄你的话",
        "panel": "童年回声"
      }
    ],
    "shots": {
      "plain": {
        "img": "rattle/rattle-plain.jpg",
        "label": "原设计 · 小手摇的鼓",
        "caption": "咚咚响的拨浪鼓，小手一摇两边弹珠敲鼓面——是童年最早的乐器。"
      },
      "led": {
        "img": "rattle/rattle-led.jpg",
        "label": "彩光 · 声音变颜色",
        "caption": "摇动时鼓面两侧亮起变色的光，咚咚声变成了看得见的颜色。"
      },
      "mic": {
        "img": "rattle/rattle-mic.jpg",
        "label": "收音 · 记下咚咚声",
        "caption": "鼓身里藏了个小麦克风，每一声咚咚都被记下来。"
      },
      "both": {
        "img": "rattle/rattle-both.jpg",
        "label": "组合 · 懂心情的拨浪鼓",
        "caption": "咚咚声读出心情，灯色跟着变——摇三下，说一句奶奶的老话。"
      }
    }
  },
  {
    "id": "di-27",
    "slug": "hotpot",
    "el": {
      "name": "铜火锅",
      "desc": "炭火铜火锅，一家人围着吃",
      "tags": [
        "餐具",
        "金属",
        "团聚"
      ]
    },
    "parts": [
      {
        "key": "temp",
        "id": "hp-19",
        "name": "温度传感器",
        "desc": "实时感知温度",
        "tags": [
          "感知",
          "温度",
          "输入"
        ],
        "install": "锅底中心 · 嵌入感温",
        "effect": "锅壁一圈暖光显示汤温，橙到红就是滚了，该下菜了"
      },
      {
        "key": "speaker",
        "id": "hp-06",
        "name": "扬声器",
        "desc": "小体积全频喇叭",
        "tags": [
          "发声",
          "音频",
          "输出"
        ],
        "install": "锅底座侧 · 藏在铜壁里",
        "effect": "水滚时轻轻播放一段老曲子，像在叫大家该上桌了"
      }
    ],
    "mods": [
      {
        "key": "record",
        "id": "ai-02",
        "name": "声音录制",
        "desc": "持续采集与归档声音",
        "tags": [
          "采集",
          "记录",
          "回忆"
        ],
        "effect": "围炉时的说笑声都录下来，每次火锅都是一个团圆的声音档案",
        "panel": "团圆留声"
      },
      {
        "key": "analyze",
        "id": "ai-08",
        "name": "情感分析",
        "desc": "识别语气与情绪",
        "tags": [
          "情感",
          "分析",
          "陪伴"
        ],
        "effect": "从说笑声里读出今晚的氛围，下次开锅时灯色自动还原那个温度",
        "panel": "团圆温度"
      }
    ],
    "shots": {
      "plain": {
        "img": "hotpot/hotpot-plain.jpg",
        "label": "原设计 · 围炉之夜",
        "caption": "炭火铜火锅，一家人围着坐——筷子在锅里捞来捞去，是最热闹的冬夜。"
      },
      "temp": {
        "img": "hotpot/hotpot-temp.jpg",
        "label": "温感 · 汤滚了会亮",
        "caption": "锅壁一圈暖光显示汤温，橙到红就是滚了，该下菜了。"
      },
      "speaker": {
        "img": "hotpot/hotpot-speaker.jpg",
        "label": "音响 · 开锅的老曲子",
        "caption": "水滚时铜壁里飘出一段老曲子，像在叫大家该上桌了。"
      },
      "both": {
        "img": "hotpot/hotpot-both.jpg",
        "label": "组合 · 会记住团圆的铜锅",
        "caption": "汤温用光告诉你，说笑声存进锅底，下次开锅时那个温度自动还原——像团圆从未散场。"
      }
    }
  },
  {
    "id": "di-28",
    "slug": "abacus",
    "el": {
      "name": "算盘",
      "desc": "噼啪作响的木算盘，拨珠子算账",
      "tags": [
        "工具",
        "木质",
        "老物件"
      ]
    },
    "parts": [
      {
        "key": "screen",
        "id": "hp-13",
        "name": "墨水屏",
        "desc": "低功耗电子纸屏",
        "tags": [
          "显示",
          "低功耗",
          "薄片"
        ],
        "install": "算盘底部 · 薄屏贴合",
        "effect": "算完后拨一下末档，算盘底部浮现数字确认结果"
      },
      {
        "key": "vibrate",
        "id": "hp-05",
        "name": "微型马达",
        "desc": "低速静音马达",
        "tags": [
          "运动",
          "驱动",
          "机械"
        ],
        "install": "算盘边框内 · 藏在横梁里",
        "effect": "拨到特定位置时算盘轻轻一震，像在提醒你算错了"
      }
    ],
    "mods": [
      {
        "key": "extract",
        "id": "ai-05",
        "name": "信息提取",
        "desc": "从聊天记录提取记忆素材",
        "tags": [
          "数据",
          "记忆",
          "整理"
        ],
        "effect": "从老账本里提取每笔数字背后的故事，在算盘底屏上回看",
        "panel": "账目回看"
      },
      {
        "key": "voice",
        "id": "ai-07",
        "name": "语音识别",
        "desc": "语音转文字",
        "tags": [
          "语音",
          "转写",
          "交互"
        ],
        "effect": "报一个数，算盘自动拨到对应位置，像有个老掌柜帮你算",
        "panel": "老掌柜模式"
      }
    ],
    "shots": {
      "plain": {
        "img": "abacus/abacus-plain.jpg",
        "label": "原设计 · 老掌柜的算盘",
        "caption": "噼啪作响的木算盘，拨珠子算账——是老掌柜吃饭的家伙。"
      },
      "screen": {
        "img": "abacus/abacus-screen.jpg",
        "label": "底屏 · 算完亮数字",
        "caption": "拨一下末档，算盘底部浮现数字，像在帮你确认结果。"
      },
      "vibrate": {
        "img": "abacus/abacus-vibrate.jpg",
        "label": "震动 · 算错了会提醒",
        "caption": "拨到特定位置时算盘轻轻一震，像在说你算错了。"
      },
      "both": {
        "img": "abacus/abacus-both.jpg",
        "label": "组合 · 会讲故事的老算盘",
        "caption": "报个数自动拨珠，底屏亮出结果和故事——像老掌柜还在柜台后面坐着。"
      }
    }
  },
  {
    "id": "di-29",
    "slug": "pen",
    "el": {
      "name": "老钢笔",
      "desc": "笔尖磨旧的钢笔，写过很多字",
      "tags": [
        "文字",
        "金属",
        "随身"
      ]
    },
    "parts": [
      {
        "key": "screen",
        "id": "hp-13",
        "name": "墨水屏",
        "desc": "低功耗电子纸屏",
        "tags": [
          "显示",
          "低功耗",
          "薄片"
        ],
        "install": "笔杆内壁 · 薄屏贴面",
        "effect": "写过的字在笔杆上缓缓显示一行摘要，像笔在帮你记住写了什么"
      },
      {
        "key": "heart",
        "id": "hp-21",
        "name": "心率传感器",
        "desc": "感知心跳节奏",
        "tags": [
          "感知",
          "生理",
          "输入"
        ],
        "install": "笔握处 · 指腹触点",
        "effect": "写字时感知你心跳，紧张时笔杆微微变暖"
      }
    ],
    "mods": [
      {
        "key": "analyze",
        "id": "ai-08",
        "name": "情感分析",
        "desc": "识别语气与情绪",
        "tags": [
          "情感",
          "分析",
          "陪伴"
        ],
        "effect": "从你写的字里读出心情，笔杆温度随之变化",
        "panel": "笔触心事"
      },
      {
        "key": "record",
        "id": "ai-02",
        "name": "声音录制",
        "desc": "持续采集与归档声音",
        "tags": [
          "采集",
          "记录",
          "回忆"
        ],
        "effect": "写字时的笔尖沙沙声和你的喃喃都录下来，存成一篇有声日记",
        "panel": "有声日记"
      }
    ],
    "shots": {
      "plain": {
        "img": "pen/pen-plain.jpg",
        "label": "原设计 · 写过很多字",
        "caption": "笔尖磨旧的钢笔，握在手里有分量——写过很多字，也写了很多心事。"
      },
      "screen": {
        "img": "pen/pen-screen.jpg",
        "label": "笔屏 · 记住你写了什么",
        "caption": "写过的字在笔杆上缓缓显示一行摘要，像笔在帮你记。"
      },
      "heart": {
        "img": "pen/pen-heart.jpg",
        "label": "心率 · 笔杆会变暖",
        "caption": "写字时笔握处感知心跳，紧张时笔杆微微变暖。"
      },
      "both": {
        "img": "pen/pen-both.jpg",
        "label": "组合 · 懂心事的钢笔",
        "caption": "笔尖沙沙声存成有声日记，心情让笔杆变暖——像老朋友在旁边听你写。"
      }
    }
  },
  {
    "id": "di-30",
    "slug": "letterbox",
    "el": {
      "name": "手写信匣",
      "desc": "装满旧信的木匣子，叠着泛黄的信纸",
      "tags": [
        "收纳",
        "木质",
        "记忆"
      ]
    },
    "parts": [
      {
        "key": "screen",
        "id": "hp-13",
        "name": "墨水屏",
        "desc": "低功耗电子纸屏",
        "tags": [
          "显示",
          "低功耗",
          "薄片"
        ],
        "install": "匣盖内面 · 屏贴盖板",
        "effect": "打开匣盖，墨水屏上浮现最近一封信的开头几句"
      },
      {
        "key": "speaker",
        "id": "hp-06",
        "name": "扬声器",
        "desc": "小体积全频喇叭",
        "tags": [
          "发声",
          "音频",
          "输出"
        ],
        "install": "匣底暗格 · 藏在木壁里",
        "effect": "打开匣盖时轻轻播放一段写信人的声音"
      }
    ],
    "mods": [
      {
        "key": "voice",
        "id": "ai-01",
        "name": "声音克隆",
        "desc": "复刻真人声线",
        "tags": [
          "声音",
          "分身",
          "情感"
        ],
        "effect": "用信上的字生成写信人的声音，把信读给你听",
        "panel": "读信之声"
      },
      {
        "key": "memory",
        "id": "ai-09",
        "name": "记忆相册",
        "desc": "照片自动整理与讲述",
        "tags": [
          "影像",
          "记忆",
          "叙事"
        ],
        "effect": "信纸上提到的每个场景自动配上老照片，在墨水屏上展示",
        "panel": "信中影像"
      }
    ],
    "shots": {
      "plain": {
        "img": "letterbox/letterbox-plain.jpg",
        "label": "原设计 · 泛黄的信",
        "caption": "装满旧信的木匣子，信纸泛黄叠着——每封都是一段没说完的话。"
      },
      "screen": {
        "img": "letterbox/letterbox-screen.jpg",
        "label": "盖屏 · 打开就看见",
        "caption": "打开匣盖，墨水屏上浮现最近一封信的开头几句。"
      },
      "speaker": {
        "img": "letterbox/letterbox-speaker.jpg",
        "label": "音响 · 打开就听见",
        "caption": "打开匣盖时木壁里飘出写信人的声音，像信在开口说话。"
      },
      "both": {
        "img": "letterbox/letterbox-both.jpg",
        "label": "组合 · 会读信的木匣",
        "caption": "打开匣盖，信开头浮在屏上，写信人的声音从木壁里飘出来——像他还在灯下写。"
      }
    }
  },
  {
    "id": "di-31",
    "slug": "chime",
    "el": {
      "name": "檐下风铃",
      "desc": "风吹叮当的风铃，挂在屋檐下",
      "tags": [
        "氛围",
        "声音",
        "悬挂"
      ]
    },
    "parts": [
      {
        "key": "light",
        "id": "hp-01",
        "name": "LED 灯带",
        "desc": "可调色温的柔性灯带",
        "tags": [
          "发光",
          "柔性",
          "氛围"
        ],
        "install": "铃管底部 · 绕一圈薄光",
        "effect": "风起时铃管底部亮起随风力变化的暖光，像把风声变成光"
      },
      {
        "key": "mic",
        "id": "hp-10",
        "name": "电容麦克风",
        "desc": "高灵敏度拾音头",
        "tags": [
          "收音",
          "音频",
          "输入"
        ],
        "install": "铃顶吊座 · 藏在吊绳处",
        "effect": "每一声叮当都被录下来，存成风的声音日记"
      }
    ],
    "mods": [
      {
        "key": "analyze",
        "id": "ai-03",
        "name": "声音分析",
        "desc": "声纹情绪与语义分析",
        "tags": [
          "分析",
          "情感",
          "洞察"
        ],
        "effect": "从铃声的频率读出今天的风是急是缓，灯色随风力变化",
        "panel": "风语解读"
      },
      {
        "key": "playback",
        "id": "ai-10",
        "name": "语音播报",
        "desc": "文字转自然语音",
        "tags": [
          "语音",
          "转写",
          "交互"
        ],
        "effect": "无风的夜晚，铃里轻轻播放白天录下的叮当声，像把风带进屋",
        "panel": "风回声"
      }
    ],
    "shots": {
      "plain": {
        "img": "chime/chime-plain.jpg",
        "label": "原设计 · 檐下的风",
        "caption": "挂在檐下的风铃，风一吹就叮当响——是整条巷子最温柔的声音。"
      },
      "light": {
        "img": "chime/chime-light.jpg",
        "label": "光带 · 风变成光",
        "caption": "风起时铃管底部亮起暖光，风力越大光越亮。"
      },
      "mic": {
        "img": "chime/chime-mic.jpg",
        "label": "收音 · 记下每一声叮当",
        "caption": "铃顶藏了个小麦克风，每一声叮当都被存下来。"
      },
      "both": {
        "img": "chime/chime-both.jpg",
        "label": "组合 · 会记住风的风铃",
        "caption": "叮当声变成光，存成声音日记——无风的夜里轻轻回放，像把风带回屋里。"
      }
    }
  },
  {
    "id": "di-32",
    "slug": "bedwarmer",
    "el": {
      "name": "汤婆子",
      "desc": "捂被窝的铜暖手炉，灌上热水暖一夜",
      "tags": [
        "保暖",
        "金属",
        "冬日"
      ]
    },
    "parts": [
      {
        "key": "temp",
        "id": "hp-19",
        "name": "温度传感器",
        "desc": "实时感知温度",
        "tags": [
          "感知",
          "温度",
          "输入"
        ],
        "install": "铜壁底部 · 内嵌感温",
        "effect": "铜壁颜色随温度变化，暖时泛橙光，凉了就暗下去"
      },
      {
        "key": "glow",
        "id": "hp-02",
        "name": "夜光荧光粉",
        "desc": "白天吸光、夜晚自发光",
        "tags": [
          "发光",
          "涂装",
          "被动光"
        ],
        "install": "铜面花纹处 · 荧光填刻",
        "effect": "铜面的刻花纹路夜里发光，在被窝里亮成一幅暖图"
      }
    ],
    "mods": [
      {
        "key": "remind",
        "id": "ai-44",
        "name": "智能闹钟",
        "desc": "睡眠周期感知与提醒",
        "tags": [
          "时间",
          "感知",
          "陪伴"
        ],
        "effect": "感知你的睡眠周期，在浅睡时用暖光唤醒而不是吵醒你",
        "panel": "温柔叫醒"
      },
      {
        "key": "analyze",
        "id": "ai-08",
        "name": "情感分析",
        "desc": "识别语气与情绪",
        "tags": [
          "情感",
          "分析",
          "陪伴"
        ],
        "effect": "根据你说梦话的语气调灯色，像汤婆子也在替你操心",
        "panel": "梦话灯语"
      }
    ],
    "shots": {
      "plain": {
        "img": "bedwarmer/bedwarmer-plain.jpg",
        "label": "原设计 · 冬夜的被窝",
        "caption": "灌上热水的铜汤婆子，塞进被窝暖一夜——是冬天最朴素的安全感。"
      },
      "temp": {
        "img": "bedwarmer/bedwarmer-temp.jpg",
        "label": "温感 · 凉了会暗",
        "caption": "铜壁颜色随温度变，暖时泛橙光，凉了就暗下去。"
      },
      "glow": {
        "img": "bedwarmer/bedwarmer-glow.jpg",
        "label": "夜光 · 被窝里的暖图",
        "caption": "铜面花纹夜里发光，在被窝里亮成一幅暖图。"
      },
      "both": {
        "img": "bedwarmer/bedwarmer-both.jpg",
        "label": "组合 · 懂你冷热的汤婆子",
        "caption": "铜壁告诉你还暖不暖，花纹在被窝里发光——浅睡时用光轻轻叫醒你。"
      }
    }
  },
  {
    "id": "di-33",
    "slug": "bell",
    "el": {
      "name": "拉绳门铃",
      "desc": "门外拉绳的老门铃",
      "tags": [
        "声音",
        "机械",
        "家"
      ]
    },
    "parts": [
      {
        "key": "ir",
        "id": "hp-09",
        "name": "红外传感器",
        "desc": "人体/距离感应",
        "tags": [
          "感知",
          "触发",
          "非接触"
        ],
        "install": "门铃内 · 嵌装感应",
        "effect": "还没拉绳，就知道有人来了"
      },
      {
        "key": "bell",
        "id": "hp-47",
        "name": "小铜铃",
        "desc": "叮当响的小铜铃",
        "tags": [
          "声音",
          "复古",
          "提示"
        ],
        "install": "门铃旁 · 加装铜铃",
        "effect": "叮当一声，比原来更清脆"
      }
    ],
    "mods": [
      {
        "key": "voiceprint",
        "id": "ai-46",
        "name": "声纹识别",
        "desc": "认出家人的声音",
        "tags": [
          "安全",
          "声音",
          "识别"
        ],
        "effect": "一拉绳，就听出是谁回来了",
        "panel": "听声辨人"
      },
      {
        "key": "announce",
        "id": "ai-10",
        "name": "语音播报",
        "desc": "文字转自然语音",
        "tags": [
          "语音",
          "输出",
          "交互"
        ],
        "effect": "轻轻报一声：是谁到家了",
        "panel": "回家播报"
      }
    ],
    "shots": {
      "plain": {
        "img": "bell/bell-plain.jpg",
        "label": "原设计 · 家门之外",
        "caption": "一只老门铃，等着一根拉绳被轻轻拽动。"
      },
      "ir": {
        "img": "bell/bell-ir.jpg",
        "label": "红外 · 未拉先知",
        "caption": "还没拉绳，就知道有人来了。"
      },
      "bell": {
        "img": "bell/bell-bell.jpg",
        "label": "铜铃 · 一声清脆",
        "caption": "叮当一声，比原来更清脆。"
      },
      "both": {
        "img": "bell/bell-both.jpg",
        "label": "全组合 · 听声知归",
        "caption": "一拉绳，就听出是谁回家了。"
      }
    }
  },
  {
    "id": "di-34",
    "slug": "coalstove",
    "el": {
      "name": "蜂窝煤炉",
      "desc": "冬天取暖的煤炉，炉膛里烧着蜂窝煤",
      "tags": [
        "炊事",
        "金属",
        "冬日"
      ]
    },
    "parts": [
      {
        "key": "light",
        "id": "hp-01",
        "name": "LED 灯带",
        "desc": "可调色温的柔性灯带",
        "tags": [
          "发光",
          "柔性",
          "氛围"
        ],
        "install": "炉腰通风口 · 绕一圈暖光",
        "effect": "模拟炭火的暖光跳动，炉子里没煤也像在烧着"
      },
      {
        "key": "speaker",
        "id": "hp-06",
        "name": "扬声器",
        "desc": "小体积全频喇叭",
        "tags": [
          "发声",
          "音频",
          "输出"
        ],
        "install": "炉底座内 · 藏在铁壁里",
        "effect": "播放炭火噼啪的白噪音，像炉子真的在烧着"
      }
    ],
    "mods": [
      {
        "key": "memory",
        "id": "ai-09",
        "name": "记忆相册",
        "desc": "照片自动整理与讲述",
        "tags": [
          "影像",
          "记忆",
          "叙事"
        ],
        "effect": "炉前烤红薯的记忆自动配上老照片，在炉面光带上轮播",
        "panel": "炉前记忆"
      },
      {
        "key": "voice",
        "id": "ai-07",
        "name": "语音识别",
        "desc": "语音转文字",
        "tags": [
          "语音",
          "转写",
          "交互"
        ],
        "effect": "说一句想吃什么，炉子用暖光画出字来，像在应你",
        "panel": "炉口回话"
      }
    ],
    "shots": {
      "plain": {
        "img": "coalstove/coalstove-plain.jpg",
        "label": "原设计 · 冬天的炉子",
        "caption": "蜂窝煤炉烧着火，一家人围着烤——是冬天最暖的那块地方。"
      },
      "light": {
        "img": "coalstove/coalstove-light.jpg",
        "label": "暖光 · 模拟炭火",
        "caption": "炉腰绕一圈暖光，模拟炭火跳动，没煤也像在烧着。"
      },
      "speaker": {
        "img": "coalstove/coalstove-speaker.jpg",
        "label": "音响 · 炭火白噪音",
        "caption": "炉底飘出噼啪的炭火声，像炉子真的在烧着。"
      },
      "both": {
        "img": "coalstove/coalstove-both.jpg",
        "label": "组合 · 会记事的煤炉",
        "caption": "暖光模拟炭火，噼啪声陪着你——说句话炉子就用光画字应你，像冬天从没走远。"
      }
    }
  },
  {
    "id": "di-35",
    "slug": "tinbox",
    "el": {
      "name": "铁皮饼干盒",
      "desc": "装满回忆的铁皮盒，打开闻到黄油味",
      "tags": [
        "收纳",
        "金属",
        "童年"
      ]
    },
    "parts": [
      {
        "key": "screen",
        "id": "hp-13",
        "name": "墨水屏",
        "desc": "低功耗电子纸屏",
        "tags": [
          "显示",
          "低功耗",
          "薄片"
        ],
        "install": "盒盖内面 · 屏贴盖板",
        "effect": "打开盒盖浮现饼干盒里最旧的那张照片"
      },
      {
        "key": "speaker",
        "id": "hp-06",
        "name": "扬声器",
        "desc": "小体积全频喇叭",
        "tags": [
          "发声",
          "音频",
          "输出"
        ],
        "install": "盒底暗格 · 藏在铁壁里",
        "effect": "打开盒盖时播放一段小时候的电视广告曲"
      }
    ],
    "mods": [
      {
        "key": "memory",
        "id": "ai-09",
        "name": "记忆相册",
        "desc": "照片自动整理与讲述",
        "tags": [
          "影像",
          "记忆",
          "叙事"
        ],
        "effect": "盒里每张老照片都被识别整理，打开盒盖就能在屏上翻看",
        "panel": "铁盒相册"
      },
      {
        "key": "voice",
        "id": "ai-01",
        "name": "声音克隆",
        "desc": "复刻真人声线",
        "tags": [
          "声音",
          "分身",
          "情感"
        ],
        "effect": "打开盒盖，奶奶的声音说一句小时候说的话",
        "panel": "奶奶的话"
      }
    ],
    "shots": {
      "plain": {
        "img": "tinbox/tinbox-plain.jpg",
        "label": "原设计 · 打开是回忆",
        "caption": "铁皮饼干盒，打开闻到黄油味——里面装着旧照片和小玩意儿，是童年的百宝箱。"
      },
      "screen": {
        "img": "tinbox/tinbox-screen.jpg",
        "label": "盖屏 · 打开看见旧照",
        "caption": "打开盒盖，墨水屏上浮现盒里最旧的那张照片。"
      },
      "speaker": {
        "img": "tinbox/tinbox-speaker.jpg",
        "label": "音响 · 打开听见老曲",
        "caption": "打开盒盖时铁壁里飘出小时候的电视广告曲。"
      },
      "both": {
        "img": "tinbox/tinbox-both.jpg",
        "label": "组合 · 会说话的饼干盒",
        "caption": "打开盒盖看旧照，奶奶的声音从铁壁里飘出来——像她还坐在你旁边拆饼干。"
      }
    }
  },
  {
    "id": "di-36",
    "slug": "marble",
    "el": {
      "name": "玻璃弹珠",
      "desc": "五颜六色的玻璃珠，弹一下在地上滚",
      "tags": [
        "玩具",
        "玻璃",
        "童年"
      ]
    },
    "parts": [
      {
        "key": "led",
        "id": "hp-12",
        "name": "RGB 全彩灯珠",
        "desc": "可编程彩色 LED",
        "tags": [
          "发光",
          "彩色",
          "可编程"
        ],
        "install": "弹珠内部 · 封入微型灯",
        "effect": "弹珠内部亮起随滚动变色的光，像把彩虹藏进了玻璃球"
      },
      {
        "key": "gyro",
        "id": "hp-11",
        "name": "陀螺仪",
        "desc": "感知姿态与倾斜",
        "tags": [
          "感知",
          "姿态",
          "输入"
        ],
        "install": "弹珠内 · 封入微型陀螺",
        "effect": "手机上看到弹珠在滚动的轨迹，像在看一个彩虹的路径"
      }
    ],
    "mods": [
      {
        "key": "play",
        "id": "ai-02",
        "name": "声音录制",
        "desc": "持续采集与归档声音",
        "tags": [
          "采集",
          "记录",
          "回忆"
        ],
        "effect": "弹珠碰撞的咔嗒声被录下来，存成一条童年声音线",
        "panel": "弹珠声线"
      },
      {
        "key": "analyze",
        "id": "ai-03",
        "name": "声音分析",
        "desc": "声纹情绪与语义分析",
        "tags": [
          "分析",
          "情感",
          "洞察"
        ],
        "effect": "从弹珠碰撞的节奏读出玩耍时的兴奋程度，灯色随之变化",
        "panel": "弹珠心情"
      }
    ],
    "shots": {
      "plain": {
        "img": "marble/marble-plain.jpg",
        "label": "原设计 · 地上的彩虹",
        "caption": "五颜六色的玻璃弹珠，弹一下在地上滚——是童年最简单的快乐。"
      },
      "led": {
        "img": "marble/marble-led.jpg",
        "label": "内光 · 彩虹藏进玻璃",
        "caption": "弹珠内部亮起变色的光，像把彩虹藏进了玻璃球。"
      },
      "gyro": {
        "img": "marble/marble-gyro.jpg",
        "label": "陀螺仪 · 看见滚的轨迹",
        "caption": "手机上看到弹珠滚动的轨迹，像在追一个彩虹的路径。"
      },
      "both": {
        "img": "marble/marble-both.jpg",
        "label": "组合 · 会记快乐的弹珠",
        "caption": "彩虹在玻璃球里转，碰撞声存成声音线——快乐被记住了。"
      }
    }
  },
  {
    "id": "di-37",
    "slug": "fan-fold",
    "el": {
      "name": "木折扇",
      "desc": "折起来的老折扇，打开有竹香",
      "tags": [
        "竹纸",
        "夏夜",
        "随身"
      ]
    },
    "parts": [
      {
        "key": "glow",
        "id": "hp-02",
        "name": "夜光荧光粉",
        "desc": "白天吸光、夜晚自发光",
        "tags": [
          "发光",
          "涂装",
          "被动光"
        ],
        "install": "扇面文字处 · 荧光描字",
        "effect": "扇面上的水墨字夜里发光，像在夏夜的风里亮着一段诗"
      },
      {
        "key": "mic",
        "id": "hp-10",
        "name": "电容麦克风",
        "desc": "高灵敏度拾音头",
        "tags": [
          "收音",
          "音频",
          "输入"
        ],
        "install": "扇骨末端 · 藏在竹节里",
        "effect": "扇一扇时录下风声，存成夏天声音档案"
      }
    ],
    "mods": [
      {
        "key": "voice",
        "id": "ai-07",
        "name": "语音识别",
        "desc": "语音转文字",
        "tags": [
          "语音",
          "转写",
          "交互"
        ],
        "effect": "说一句话，扇面上自动用水墨字体写出来，像在替你题扇",
        "panel": "题扇模式"
      },
      {
        "key": "playback",
        "id": "ai-10",
        "name": "语音播报",
        "desc": "文字转自然语音",
        "tags": [
          "语音",
          "转写",
          "交互"
        ],
        "effect": "打开扇子时轻轻念一句扇面上的诗，像扇子在自言自语",
        "panel": "扇面吟诗"
      }
    ],
    "shots": {
      "plain": {
        "img": "fan-fold/fan-fold-plain.jpg",
        "label": "原设计 · 夏天的扇子",
        "caption": "折起来的老折扇，打开有竹香——是夏天院子里最体面的凉风。"
      },
      "glow": {
        "img": "fan-fold/fan-fold-glow.jpg",
        "label": "夜光 · 字在夜里亮",
        "caption": "扇面水墨字夜里发光，像在夏夜的风里亮着一段诗。"
      },
      "mic": {
        "img": "fan-fold/fan-fold-mic.jpg",
        "label": "收音 · 扇出风声",
        "caption": "扇骨末端藏了个小麦克风，扇一扇就录下风声。"
      },
      "both": {
        "img": "fan-fold/fan-fold-both.jpg",
        "label": "组合 · 会题诗的折扇",
        "caption": "说句话扇面自动题字，夜里字亮着，打开时念一句——像夏夜的风带着诗。"
      }
    }
  },
  {
    "id": "di-38",
    "slug": "glasses",
    "el": {
      "name": "老花镜",
      "desc": "祖母戴过的老花镜，镜腿磨得光亮",
      "tags": [
        "随身",
        "光学",
        "长辈"
      ]
    },
    "parts": [
      {
        "key": "screen",
        "id": "hp-13",
        "name": "墨水屏",
        "desc": "低功耗电子纸屏",
        "tags": [
          "显示",
          "低功耗",
          "薄片"
        ],
        "install": "镜腿外侧 · 薄屏贴面",
        "effect": "看书时镜腿屏上浮现放大的字，像一副会帮你认字的镜"
      },
      {
        "key": "light",
        "id": "hp-18",
        "name": "光敏传感器",
        "desc": "感知光线明暗",
        "tags": [
          "感知",
          "光",
          "输入"
        ],
        "install": "镜框桥处 · 面向书页",
        "effect": "光线暗时镜框微微亮起暖光，像在替你开一盏灯"
      }
    ],
    "mods": [
      {
        "key": "read",
        "id": "ai-07",
        "name": "语音识别",
        "desc": "语音转文字",
        "tags": [
          "语音",
          "转写",
          "交互"
        ],
        "effect": "看书看累了，说一句念给我听，镜腿里轻声把字念出来",
        "panel": "念给我听"
      },
      {
        "key": "memory",
        "id": "ai-05",
        "name": "信息提取",
        "desc": "从聊天记录提取记忆素材",
        "tags": [
          "数据",
          "记忆",
          "整理"
        ],
        "effect": "从老照片里提取祖母戴这副眼镜的每个场景，在镜腿屏上回看",
        "panel": "祖母影像"
      }
    ],
    "shots": {
      "plain": {
        "img": "glasses/glasses-plain.jpg",
        "label": "原设计 · 祖母的眼镜",
        "caption": "祖母戴过的老花镜，镜腿磨得光亮——她戴着它看了很多年的书和报纸。"
      },
      "screen": {
        "img": "glasses/glasses-screen.jpg",
        "label": "镜腿屏 · 帮你认字",
        "caption": "看书时镜腿屏上浮现放大的字，像在帮你认。"
      },
      "light": {
        "img": "glasses/glasses-light.jpg",
        "label": "感光 · 暗了会亮",
        "caption": "光线暗时镜框微微亮起暖光，像在替你开一盏灯。"
      },
      "both": {
        "img": "glasses/glasses-both.jpg",
        "label": "组合 · 会念书的眼镜",
        "caption": "暗了会亮，累了会念——镜腿屏上还能看到祖母戴它的老照片。"
      }
    }
  },
  {
    "id": "di-39",
    "slug": "sewbasket",
    "el": {
      "name": "针线笸箩",
      "desc": "竹编的针线筐，装着线和顶针",
      "tags": [
        "工具",
        "竹编",
        "家传"
      ]
    },
    "parts": [
      {
        "key": "glow",
        "id": "hp-02",
        "name": "夜光荧光粉",
        "desc": "白天吸光、夜晚自发光",
        "tags": [
          "发光",
          "涂装",
          "被动光"
        ],
        "install": "竹编纹理间 · 荧光填缝",
        "effect": "笸箩的编织纹路夜里发光，像把针线活的光也留住了"
      },
      {
        "key": "mic",
        "id": "hp-10",
        "name": "电容麦克风",
        "desc": "高灵敏度拾音头",
        "tags": [
          "收音",
          "音频",
          "输入"
        ],
        "install": "笸箩底沿 · 藏在竹编里",
        "effect": "穿针引线时的细碎声被录下，存成一段手艺声音档案"
      }
    ],
    "mods": [
      {
        "key": "voice",
        "id": "ai-01",
        "name": "声音克隆",
        "desc": "复刻真人声线",
        "tags": [
          "声音",
          "分身",
          "情感"
        ],
        "effect": "拿起顶针时，笸箩里传出奶奶教穿针的声音",
        "panel": "手艺回声"
      },
      {
        "key": "memory",
        "id": "ai-09",
        "name": "记忆相册",
        "desc": "照片自动整理与讲述",
        "tags": [
          "影像",
          "记忆",
          "叙事"
        ],
        "effect": "每件缝过的衣物都被识别整理，在笸箩纹路的光里轮播",
        "panel": "针线记忆"
      }
    ],
    "shots": {
      "plain": {
        "img": "sewbasket/sewbasket-plain.jpg",
        "label": "原设计 · 奶奶的筐",
        "caption": "竹编的针线笸箩，装着线和顶针——是奶奶做了一辈子针线活的伙伴。"
      },
      "glow": {
        "img": "sewbasket/sewbasket-glow.jpg",
        "label": "夜光 · 编纹发光",
        "caption": "笸箩的编织纹路夜里发光，像把针线活的光也留住了。"
      },
      "mic": {
        "img": "sewbasket/sewbasket-mic.jpg",
        "label": "收音 · 记下穿针声",
        "caption": "笸箩底沿藏了个小麦克风，穿针引线的细碎声被记下来。"
      },
      "both": {
        "img": "sewbasket/sewbasket-both.jpg",
        "label": "组合 · 会回声的针线筐",
        "caption": "编纹发光，拿起顶针奶奶的声音就传出来——像她还在灯下帮你穿针。"
      }
    }
  },
  {
    "id": "di-40",
    "slug": "calendar",
    "el": {
      "name": "老挂历",
      "desc": "一天撕一页的老挂历，撕到年末只剩薄薄一叠",
      "tags": [
        "时间",
        "纸质",
        "记忆"
      ]
    },
    "parts": [
      {
        "key": "screen",
        "id": "hp-13",
        "name": "墨水屏",
        "desc": "低功耗电子纸屏",
        "tags": [
          "显示",
          "低功耗",
          "薄片"
        ],
        "install": "挂历封面 · 屏贴面",
        "effect": "每天自动翻一页，墨水屏上显示今天的日子和节气"
      },
      {
        "key": "speaker",
        "id": "hp-06",
        "name": "扬声器",
        "desc": "小体积全频喇叭",
        "tags": [
          "发声",
          "音频",
          "输出"
        ],
        "install": "挂历背板 · 藏在纸板里",
        "effect": "每天早上撕页时播放一段当年那天的声音记忆"
      }
    ],
    "mods": [
      {
        "key": "memory",
        "id": "ai-09",
        "name": "记忆相册",
        "desc": "照片自动整理与讲述",
        "tags": [
          "影像",
          "记忆",
          "叙事"
        ],
        "effect": "挂历屏上每天轮播一张那年同一天的老照片",
        "panel": "那年今日"
      },
      {
        "key": "voice",
        "id": "ai-01",
        "name": "声音克隆",
        "desc": "复刻真人声线",
        "tags": [
          "声音",
          "分身",
          "情感"
        ],
        "effect": "撕页时家人当年的声音从背板飘出，说一句那天说的话",
        "panel": "那年那语"
      }
    ],
    "shots": {
      "plain": {
        "img": "calendar/calendar-plain.jpg",
        "label": "原设计 · 一天一页",
        "caption": "一天撕一页的老挂历，撕到年末只剩薄薄一叠——是时间最实在的样子。"
      },
      "screen": {
        "img": "calendar/calendar-screen.jpg",
        "label": "日屏 · 自动翻页",
        "caption": "每天自动翻一页，墨水屏上显示今天的日子和节气。"
      },
      "speaker": {
        "img": "calendar/calendar-speaker.jpg",
        "label": "音响 · 撕页的声音",
        "caption": "撕页时背板飘出当年那天的声音记忆。"
      },
      "both": {
        "img": "calendar/calendar-both.jpg",
        "label": "组合 · 会回声的挂历",
        "caption": "每天翻一页，屏上看到那年今日的老照片，背板飘出那天的声音——像时间没走远。"
      }
    }
  },
  {
    "id": "di-41",
    "slug": "mortar",
    "el": {
      "name": "石臼",
      "desc": "捣蒜捣谷的石臼，石杵磨得光滑",
      "tags": [
        "厨房",
        "石质",
        "老物件"
      ]
    },
    "parts": [
      {
        "key": "vibrate",
        "id": "hp-05",
        "name": "微型马达",
        "desc": "低速静音马达",
        "tags": [
          "运动",
          "驱动",
          "机械"
        ],
        "install": "石臼底部 · 嵌入底座",
        "effect": "捣的时候石臼轻轻震，帮你把料捣得更匀"
      },
      {
        "key": "glow",
        "id": "hp-02",
        "name": "夜光荧光粉",
        "desc": "白天吸光、夜晚自发光",
        "tags": [
          "发光",
          "涂装",
          "被动光"
        ],
        "install": "石臼内壁 · 荧光刻纹",
        "effect": "石臼内壁的纹路夜里发光，像把石头的年轮亮出来"
      }
    ],
    "mods": [
      {
        "key": "recipe",
        "id": "ai-05",
        "name": "信息提取",
        "desc": "从聊天记录提取记忆素材",
        "tags": [
          "数据",
          "记忆",
          "整理"
        ],
        "effect": "从家里的老菜谱里提取配方，捣什么料时臼里亮出步骤",
        "panel": "老菜谱"
      },
      {
        "key": "voice",
        "id": "ai-07",
        "name": "语音识别",
        "desc": "语音转文字",
        "tags": [
          "语音",
          "转写",
          "交互"
        ],
        "effect": "说一句捣什么，石臼的震动频率自动调到适合的力度",
        "panel": "捣料模式"
      }
    ],
    "shots": {
      "plain": {
        "img": "mortar/mortar-plain.jpg",
        "label": "原设计 · 灶台的石头",
        "caption": "捣蒜捣谷的石臼，石杵磨得光滑——是灶台上最沉也最实在的家伙。"
      },
      "vibrate": {
        "img": "mortar/mortar-vibrate.jpg",
        "label": "震动 · 捣得更匀",
        "caption": "捣的时候石臼轻轻震，帮你把料捣得更匀。"
      },
      "glow": {
        "img": "mortar/mortar-glow.jpg",
        "label": "夜光 · 石纹发光",
        "caption": "石臼内壁的纹路夜里发光，像把石头的年轮亮出来。"
      },
      "both": {
        "img": "mortar/mortar-both.jpg",
        "label": "组合 · 懂菜谱的石臼",
        "caption": "说句捣什么就调好力度，臼里亮出老菜谱步骤——像灶台上那个老帮手。"
      }
    }
  },
  {
    "id": "di-42",
    "slug": "canteen",
    "el": {
      "name": "军用水壶",
      "desc": "漆皮斑驳的铝水壶，背带磨得发白",
      "tags": [
        "容器",
        "金属",
        "家传"
      ]
    },
    "parts": [
      {
        "key": "temp",
        "id": "hp-19",
        "name": "温度传感器",
        "desc": "实时感知温度",
        "tags": [
          "感知",
          "温度",
          "输入"
        ],
        "install": "壶底内壁 · 贴底测温",
        "effect": "壶壁一圈光显示水温，暖到凉一眼就知道"
      },
      {
        "key": "glow",
        "id": "hp-02",
        "name": "夜光荧光粉",
        "desc": "白天吸光、夜晚自发光",
        "tags": [
          "发光",
          "涂装",
          "被动光"
        ],
        "install": "漆皮斑驳处 · 荧光补漆",
        "effect": "斑驳的漆皮处夜里发光，像把行军的路标亮出来"
      }
    ],
    "mods": [
      {
        "key": "memory",
        "id": "ai-09",
        "name": "记忆相册",
        "desc": "照片自动整理与讲述",
        "tags": [
          "影像",
          "记忆",
          "叙事"
        ],
        "effect": "壶上的漆痕被识别整理，拼出一段行军记忆",
        "panel": "行军记忆"
      },
      {
        "key": "voice",
        "id": "ai-01",
        "name": "声音克隆",
        "desc": "复刻真人声线",
        "tags": [
          "声音",
          "分身",
          "情感"
        ],
        "effect": "拧开壶盖时，壶里传出当年行军号子的声音",
        "panel": "号子回声"
      }
    ],
    "shots": {
      "plain": {
        "img": "canteen/canteen-plain.jpg",
        "label": "原设计 · 斑驳的漆",
        "caption": "漆皮斑驳的铝水壶，背带磨得发白——跟着谁走过很远的路。"
      },
      "temp": {
        "img": "canteen/canteen-temp.jpg",
        "label": "温感 · 水还热不热",
        "caption": "壶壁一圈光显示水温，暖到凉一眼就知道。"
      },
      "glow": {
        "img": "canteen/canteen-glow.jpg",
        "label": "夜光 · 漆痕发亮",
        "caption": "斑驳的漆皮处夜里发光，像把行军的路标亮出来。"
      },
      "both": {
        "img": "canteen/canteen-both.jpg",
        "label": "组合 · 会记路的水壶",
        "caption": "水温一眼看到，漆痕夜里发光，拧开壶盖听到号子——像跟着走了一段路。"
      }
    }
  },
  {
    "id": "di-43",
    "slug": "rockhorse",
    "el": {
      "name": "摇摇木马",
      "desc": "会摇的儿童木马，骑着摇了一代又一代",
      "tags": [
        "玩具",
        "木质",
        "童年"
      ]
    },
    "parts": [
      {
        "key": "led",
        "id": "hp-01",
        "name": "LED 灯带",
        "desc": "可调色温的柔性灯带",
        "tags": [
          "发光",
          "柔性",
          "氛围"
        ],
        "install": "木马鬃毛处 · 绕一圈暖光",
        "effect": "骑上去时鬃毛亮起暖光，像木马活了过来"
      },
      {
        "key": "gyro",
        "id": "hp-11",
        "name": "陀螺仪",
        "desc": "感知姿态与倾斜",
        "tags": [
          "感知",
          "姿态",
          "输入"
        ],
        "install": "木马底弧 · 卡在弧形处",
        "effect": "手机上看到摇动的幅度，像在记录一个孩子的快乐节奏"
      }
    ],
    "mods": [
      {
        "key": "record",
        "id": "ai-02",
        "name": "声音录制",
        "desc": "持续采集与归档声音",
        "tags": [
          "采集",
          "记录",
          "回忆"
        ],
        "effect": "骑上去时的笑声和吱呀声被录下，存成一条童年声音线",
        "panel": "笑声存档"
      },
      {
        "key": "playback",
        "id": "ai-10",
        "name": "语音播报",
        "desc": "文字转自然语音",
        "tags": [
          "语音",
          "转写",
          "交互"
        ],
        "effect": "摇到一定次数时，木马说一句童年的话鼓励你继续摇",
        "panel": "木马说话"
      }
    ],
    "shots": {
      "plain": {
        "img": "rockhorse/rockhorse-plain.jpg",
        "label": "原设计 · 摇了一代",
        "caption": "会摇的儿童木马，骑着摇了一代又一代——是家里最老的玩具。"
      },
      "led": {
        "img": "rockhorse/rockhorse-led.jpg",
        "label": "鬃光 · 木马活了",
        "caption": "骑上去时鬃毛亮起暖光，像木马活了过来。"
      },
      "gyro": {
        "img": "rockhorse/rockhorse-gyro.jpg",
        "label": "陀螺仪 · 摇的节奏",
        "caption": "手机上看到摇动的幅度，像在记录一个孩子的快乐节奏。"
      },
      "both": {
        "img": "rockhorse/rockhorse-both.jpg",
        "label": "组合 · 会记笑声的木马",
        "caption": "鬃毛亮暖光，笑声和吱呀声存进木马——摇到一定次数说一句老话，像它也成了家人。"
      }
    }
  },
  {
    "id": "di-44",
    "slug": "toolbox",
    "el": {
      "name": "木质工具箱",
      "desc": "爷爷的木工工具箱，装着锤子和凿子",
      "tags": [
        "工具",
        "木质",
        "家传"
      ]
    },
    "parts": [
      {
        "key": "screen",
        "id": "hp-13",
        "name": "墨水屏",
        "desc": "低功耗电子纸屏",
        "tags": [
          "显示",
          "低功耗",
          "薄片"
        ],
        "install": "箱盖内面 · 屏贴盖板",
        "effect": "打开箱盖浮现爷爷当年的工具清单和手稿"
      },
      {
        "key": "light",
        "id": "hp-18",
        "name": "光敏传感器",
        "desc": "感知光线明暗",
        "tags": [
          "感知",
          "光",
          "输入"
        ],
        "install": "箱盖内侧 · 面向工具",
        "effect": "打开箱盖时工具区亮起暖光，像爷爷在灯下帮你照亮"
      }
    ],
    "mods": [
      {
        "key": "guide",
        "id": "ai-07",
        "name": "语音识别",
        "desc": "语音转文字",
        "tags": [
          "语音",
          "转写",
          "交互"
        ],
        "effect": "说一句想做什么，箱盖屏上浮现爷爷手写的步骤指南",
        "panel": "爷爷指南"
      },
      {
        "key": "memory",
        "id": "ai-05",
        "name": "信息提取",
        "desc": "从聊天记录提取记忆素材",
        "tags": [
          "数据",
          "记忆",
          "整理"
        ],
        "effect": "从老照片里提取爷爷做木工的每个场景，在屏上轮播",
        "panel": "手艺影像"
      }
    ],
    "shots": {
      "plain": {
        "img": "toolbox/toolbox-plain.jpg",
        "label": "原设计 · 爷爷的箱",
        "caption": "爷爷的木工工具箱，装着锤子和凿子——是家里最有分量的传家宝。"
      },
      "screen": {
        "img": "toolbox/toolbox-screen.jpg",
        "label": "盖屏 · 打开看手稿",
        "caption": "打开箱盖，墨水屏上浮现爷爷当年的工具清单和手稿。"
      },
      "light": {
        "img": "toolbox/toolbox-light.jpg",
        "label": "感光 · 打开就亮",
        "caption": "打开箱盖时工具区亮起暖光，像爷爷在帮你照亮。"
      },
      "both": {
        "img": "toolbox/toolbox-both.jpg",
        "label": "组合 · 会教手艺的工具箱",
        "caption": "打开盖子看手稿和照片，说句话浮现指南——像爷爷还站在工作台旁边。"
      }
    }
  },
  {
    "id": "di-45",
    "slug": "candle",
    "el": {
      "name": "黄铜烛台",
      "desc": "插蜡烛的黄铜烛台，烛光摇曳映在墙上",
      "tags": [
        "照明",
        "金属",
        "氛围"
      ]
    },
    "parts": [
      {
        "key": "led",
        "id": "hp-01",
        "name": "LED 灯带",
        "desc": "可调色温的柔性灯带",
        "tags": [
          "发光",
          "柔性",
          "氛围"
        ],
        "install": "烛台杯口 · 绕一圈暖光",
        "effect": "没点蜡烛时烛台杯口亮起模拟烛光的暖光，像永不熄灭的烛火"
      },
      {
        "key": "mic",
        "id": "hp-10",
        "name": "电容麦克风",
        "desc": "高灵敏度拾音头",
        "tags": [
          "收音",
          "音频",
          "输入"
        ],
        "install": "烛台底座 · 藏在铜壁里",
        "effect": "烛光下说的话被录下来，存成一段烛边声音档案"
      }
    ],
    "mods": [
      {
        "key": "voice",
        "id": "ai-01",
        "name": "声音克隆",
        "desc": "复刻真人声线",
        "tags": [
          "声音",
          "分身",
          "情感"
        ],
        "effect": "烛台里传出一个故人的声音，说一句烛光下说过的老话",
        "panel": "烛边回声"
      },
      {
        "key": "analyze",
        "id": "ai-08",
        "name": "情感分析",
        "desc": "识别语气与情绪",
        "tags": [
          "情感",
          "分析",
          "陪伴"
        ],
        "effect": "烛光的亮度随说话的语气变化，像烛台在替你感受",
        "panel": "烛语心灯"
      }
    ],
    "shots": {
      "plain": {
        "img": "candle/candle-plain.jpg",
        "label": "原设计 · 墙上的烛影",
        "caption": "插蜡烛的黄铜烛台，烛光摇曳映在墙上——是夜晚最温柔的仪式。"
      },
      "led": {
        "img": "candle/candle-led.jpg",
        "label": "暖光 · 不灭的烛",
        "caption": "没点蜡烛时杯口亮起模拟烛光的暖光，永不熄灭。"
      },
      "mic": {
        "img": "candle/candle-mic.jpg",
        "label": "收音 · 记下烛边话",
        "caption": "烛台底座藏了个小麦克风，烛光下说的话被记下来。"
      },
      "both": {
        "img": "candle/candle-both.jpg",
        "label": "组合 · 会回声的烛台",
        "caption": "暖光模拟烛火，烛光下的话被存住——故人的声音从铜壁里飘出来，像他还在烛光那头。"
      }
    }
  },
  {
    "id": "di-46",
    "slug": "jar",
    "el": {
      "name": "玻璃腌菜罐",
      "desc": "封着老味道的玻璃罐，盖子拧得紧",
      "tags": [
        "容器",
        "玻璃",
        "日用"
      ]
    },
    "parts": [
      {
        "key": "screen",
        "id": "hp-13",
        "name": "墨水屏",
        "desc": "低功耗电子纸屏",
        "tags": [
          "显示",
          "低功耗",
          "薄片"
        ],
        "install": "罐壁外侧 · 薄屏贴面",
        "effect": "罐壁屏上显示腌制天数和最佳食用期，像罐子在帮你数日子"
      },
      {
        "key": "temp",
        "id": "hp-19",
        "name": "温度传感器",
        "desc": "实时感知温度",
        "tags": [
          "感知",
          "温度",
          "输入"
        ],
        "install": "罐底外壁 · 贴底感温",
        "effect": "罐壁一圈光显示罐内温度，酸了就变色提醒"
      }
    ],
    "mods": [
      {
        "key": "recipe",
        "id": "ai-05",
        "name": "信息提取",
        "desc": "从聊天记录提取记忆素材",
        "tags": [
          "数据",
          "记忆",
          "整理"
        ],
        "effect": "从家里的腌菜老配方里提取步骤，罐壁屏上显示今天该做什么",
        "panel": "腌菜指南"
      },
      {
        "key": "voice",
        "id": "ai-07",
        "name": "语音识别",
        "desc": "语音转文字",
        "tags": [
          "语音",
          "转写",
          "交互"
        ],
        "effect": "问一句腌了多久，罐壁屏上显示天数，像罐子在回答你",
        "panel": "罐子回答"
      }
    ],
    "shots": {
      "plain": {
        "img": "jar/jar-plain.jpg",
        "label": "原设计 · 封着老味道",
        "caption": "封着老味道的玻璃罐，盖子拧得紧——里面是奶奶腌了一辈子的菜。"
      },
      "screen": {
        "img": "jar/jar-screen.jpg",
        "label": "罐屏 · 帮你数日子",
        "caption": "罐壁屏上显示腌制天数和最佳食用期，像在帮你数日子。"
      },
      "temp": {
        "img": "jar/jar-temp.jpg",
        "label": "温感 · 酸了会变色",
        "caption": "罐壁一圈光显示罐内温度，酸了就变色提醒。"
      },
      "both": {
        "img": "jar/jar-both.jpg",
        "label": "组合 · 懂腌菜的罐子",
        "caption": "罐壁显示天数和温度，问一句就回答——像奶奶在旁边帮你记着腌菜的每个日子。"
      }
    }
  },
  {
    "id": "di-47",
    "slug": "oilpaper",
    "el": {
      "name": "油纸伞",
      "desc": "桐油刷面的纸伞，打开有桐油香",
      "tags": [
        "雨具",
        "竹纸",
        "诗意"
      ]
    },
    "parts": [
      {
        "key": "glow",
        "id": "hp-02",
        "name": "夜光荧光粉",
        "desc": "白天吸光、夜晚自发光",
        "tags": [
          "发光",
          "涂装",
          "被动光"
        ],
        "install": "伞面竹骨处 · 荧光描骨",
        "effect": "雨夜里伞骨发出柔光，像在雨中亮着一盏不灭的灯"
      },
      {
        "key": "mic",
        "id": "hp-10",
        "name": "电容麦克风",
        "desc": "高灵敏度拾音头",
        "tags": [
          "收音",
          "音频",
          "输入"
        ],
        "install": "伞顶内面 · 藏在竹骨交叉处",
        "effect": "打伞时雨打伞面的声音被录下，存成一段雨声档案"
      }
    ],
    "mods": [
      {
        "key": "voice",
        "id": "ai-01",
        "name": "声音克隆",
        "desc": "复刻真人声线",
        "tags": [
          "声音",
          "分身",
          "情感"
        ],
        "effect": "打开伞时伞里传出一个故人的声音，说一句雨天的老话",
        "panel": "雨中回声"
      },
      {
        "key": "analyze",
        "id": "ai-03",
        "name": "声音分析",
        "desc": "声纹情绪与语义分析",
        "tags": [
          "分析",
          "情感",
          "洞察"
        ],
        "effect": "从雨声读出雨的大小缓急，伞骨的光随雨势变化",
        "panel": "雨语解读"
      }
    ],
    "shots": {
      "plain": {
        "img": "oilpaper/oilpaper-plain.jpg",
        "label": "原设计 · 雨中的诗",
        "caption": "桐油刷面的纸伞，打开有桐油香——是雨天最诗意的一把伞。"
      },
      "glow": {
        "img": "oilpaper/oilpaper-glow.jpg",
        "label": "夜光 · 伞骨发亮",
        "caption": "雨夜里伞骨发出柔光，像在雨中亮着一盏不灭的灯。"
      },
      "mic": {
        "img": "oilpaper/oilpaper-mic.jpg",
        "label": "收音 · 记下雨声",
        "caption": "伞顶藏了个小麦克风，雨打伞面的声音被存下来。"
      },
      "both": {
        "img": "oilpaper/oilpaper-both.jpg",
        "label": "组合 · 会记雨声的伞",
        "caption": "伞骨在雨夜发光，雨声被存住——打开伞听到故人的声音，像雨天有人陪你走。"
      }
    }
  },
  {
    "id": "di-48",
    "slug": "hangingbasket",
    "el": {
      "name": "藤编吊篮",
      "desc": "挂在檐下的藤吊篮，晃晃悠悠垂着",
      "tags": [
        "收纳",
        "藤编",
        "悬挂"
      ]
    },
    "parts": [
      {
        "key": "light",
        "id": "hp-01",
        "name": "LED 灯带",
        "desc": "可调色温的柔性灯带",
        "tags": [
          "发光",
          "柔性",
          "氛围"
        ],
        "install": "吊篮边缘 · 绕一圈暖光",
        "effect": "傍晚时吊篮边缘亮起暖光，像檐下挂了一盏会摇的灯"
      },
      {
        "key": "gyro",
        "id": "hp-11",
        "name": "陀螺仪",
        "desc": "感知姿态与倾斜",
        "tags": [
          "感知",
          "姿态",
          "输入"
        ],
        "install": "吊篮底部 · 卡在藤编底座",
        "effect": "手机上看到吊篮晃动的幅度，像在记录风的节奏"
      }
    ],
    "mods": [
      {
        "key": "memory",
        "id": "ai-09",
        "name": "记忆相册",
        "desc": "照片自动整理与讲述",
        "tags": [
          "影像",
          "记忆",
          "叙事"
        ],
        "effect": "吊篮里的老物件被识别整理，边缘光带轮播它们的照片",
        "panel": "吊篮记忆"
      },
      {
        "key": "voice",
        "id": "ai-10",
        "name": "语音播报",
        "desc": "文字转自然语音",
        "tags": [
          "语音",
          "转写",
          "交互"
        ],
        "effect": "风大时吊篮里轻轻说一句檐下的老话，像在提醒你收衣服",
        "panel": "檐下提醒"
      }
    ],
    "shots": {
      "plain": {
        "img": "hangingbasket/hangingbasket-plain.jpg",
        "label": "原设计 · 檐下的晃悠",
        "caption": "挂在檐下的藤吊篮，晃晃悠悠垂着——里面装着夏天的瓜果和零碎。"
      },
      "light": {
        "img": "hangingbasket/hangingbasket-light.jpg",
        "label": "暖光 · 会摇的灯",
        "caption": "傍晚时吊篮边缘亮起暖光，像檐下挂了一盏会摇的灯。"
      },
      "gyro": {
        "img": "hangingbasket/hangingbasket-gyro.jpg",
        "label": "陀螺仪 · 风的节奏",
        "caption": "手机上看到吊篮晃动的幅度，像在记录风的节奏。"
      },
      "both": {
        "img": "hangingbasket/hangingbasket-both.jpg",
        "label": "组合 · 会记事的吊篮",
        "caption": "边缘暖光轮播老照片，风大时说一句檐下的老话——像老屋的檐还护着你。"
      }
    }
  },
  {
    "id": "di-49",
    "slug": "matchbox",
    "el": {
      "name": "火柴盒",
      "desc": "划一下就亮的火柴，磷面磨得发白",
      "tags": [
        "小物",
        "日常",
        "复古"
      ]
    },
    "parts": [
      {
        "key": "led",
        "id": "hp-12",
        "name": "RGB 全彩灯珠",
        "desc": "可编程彩色 LED",
        "tags": [
          "发光",
          "彩色",
          "可编程"
        ],
        "install": "盒内底面 · 嵌入微型灯",
        "effect": "划一下火柴盒，盒内亮起暖光，像真的擦出一朵小火苗"
      },
      {
        "key": "vibrate",
        "id": "hp-05",
        "name": "微型马达",
        "desc": "低速静音马达",
        "tags": [
          "运动",
          "驱动",
          "机械"
        ],
        "install": "盒底内壁 · 藏在纸板里",
        "effect": "划开时盒子轻轻一震，像真的擦到磷面的触感"
      }
    ],
    "mods": [
      {
        "key": "remind",
        "id": "ai-02",
        "name": "声音录制",
        "desc": "持续采集与归档声音",
        "tags": [
          "采集",
          "记录",
          "回忆"
        ],
        "effect": "每次划火柴的时间被记录，存成一段日常仪式档案",
        "panel": "划火记忆"
      },
      {
        "key": "voice",
        "id": "ai-10",
        "name": "语音播报",
        "desc": "文字转自然语音",
        "tags": [
          "语音",
          "转写",
          "交互"
        ],
        "effect": "划开时盒里说一句老话，像在提醒你今天还没点灯",
        "panel": "点灯提醒"
      }
    ],
    "shots": {
      "plain": {
        "img": "matchbox/matchbox-plain.jpg",
        "label": "原设计 · 划一下就亮",
        "caption": "划一下就亮的火柴，磷面磨得发白——是最小的火，也是最日常的仪式。"
      },
      "led": {
        "img": "matchbox/matchbox-led.jpg",
        "label": "内光 · 擦出光",
        "caption": "划一下盒子，盒内亮起暖光，像真的擦出一朵小火苗。"
      },
      "vibrate": {
        "img": "matchbox/matchbox-vibrate.jpg",
        "label": "震动 · 擦到磷面",
        "caption": "划开时盒子轻轻一震，像真的擦到磷面的触感。"
      },
      "both": {
        "img": "matchbox/matchbox-both.jpg",
        "label": "组合 · 会记事的火柴盒",
        "caption": "划一下亮光震动，说一句点灯的老话——像在提醒你今天还有一盏灯没点。"
      }
    }
  },
  {
    "id": "di-50",
    "slug": "album",
    "el": {
      "name": "集邮册",
      "desc": "贴过岁月的集邮册",
      "tags": [
        "纸质",
        "收藏",
        "记忆"
      ]
    },
    "parts": [
      {
        "key": "speaker",
        "id": "hp-06",
        "name": "扬声器",
        "desc": "小体积全频喇叭",
        "tags": [
          "发声",
          "音频",
          "输出"
        ],
        "install": "册旁 · 内嵌小喇叭",
        "effect": "翻开集邮册，故事随之响起"
      },
      {
        "key": "led",
        "id": "hp-01",
        "name": "LED 灯带",
        "desc": "可调色温的柔性灯带",
        "tags": [
          "发光",
          "柔性",
          "氛围"
        ],
        "install": "册脊 · 夹一条暖光",
        "effect": "翻页时，册脊透出一线暖光"
      }
    ],
    "mods": [
      {
        "key": "radio",
        "id": "ai-50",
        "name": "回忆电台",
        "desc": "自动播你的人生电台",
        "tags": [
          "音频",
          "节目",
          "回忆"
        ],
        "effect": "把邮票里的岁月，播成一部人生电台",
        "panel": "人生电台"
      },
      {
        "key": "story",
        "id": "ai-17",
        "name": "故事生成",
        "desc": "把回忆写成小故事",
        "tags": [
          "文字",
          "创作",
          "回忆"
        ],
        "effect": "一张张邮票，讲成一段段往事",
        "panel": "邮票往事"
      }
    ],
    "shots": {
      "plain": {
        "img": "album/album-plain.jpg",
        "label": "原设计 · 书桌之上",
        "caption": "一本旧集邮册，封着许多张过去的模样。"
      },
      "speaker": {
        "img": "album/album-speaker.jpg",
        "label": "扬声 · 故事响起",
        "caption": "翻开集邮册，故事随之响起。"
      },
      "led": {
        "img": "album/album-led.jpg",
        "label": "灯带 · 册脊暖光",
        "caption": "翻页时，册脊透出一线暖光。"
      },
      "both": {
        "img": "album/album-both.jpg",
        "label": "全组合 · 回忆电台",
        "caption": "暖光里翻开册子，把岁月播成一部电台。"
      }
    }
  }
];

export const WK_ROUTE = {
  "di-01": "cup",
  "di-03": "comb",
  "di-04": "lamp",
  "di-05": "box",
  "di-06": "radio",
  "di-07": "camera",
  "di-08": "clock",
  "di-09": "thermos",
  "di-10": "frame",
  "di-11": "typewriter",
  "di-12": "kerosene",
  "di-13": "suitcase",
  "di-14": "tv",
  "di-15": "flashlight",
  "di-16": "sewing",
  "di-17": "frog",
  "di-18": "fan",
  "di-19": "gramophone",
  "di-20": "watch",
  "di-21": "enamel-mug",
  "di-22": "cradle",
  "di-23": "chair",
  "di-24": "top",
  "di-25": "kite",
  "di-26": "rattle",
  "di-27": "hotpot",
  "di-28": "abacus",
  "di-29": "pen",
  "di-30": "letterbox",
  "di-31": "chime",
  "di-32": "bedwarmer",
  "di-33": "bell",
  "di-34": "coalstove",
  "di-35": "tinbox",
  "di-36": "marble",
  "di-37": "fan-fold",
  "di-38": "glasses",
  "di-39": "sewbasket",
  "di-40": "calendar",
  "di-41": "mortar",
  "di-42": "canteen",
  "di-43": "rockhorse",
  "di-44": "toolbox",
  "di-45": "candle",
  "di-46": "jar",
  "di-47": "oilpaper",
  "di-48": "hangingbasket",
  "di-49": "matchbox",
  "di-50": "album"
};

// 全部 50 件日常物品的 id→slug 映射（含 3D 型电话 di-02），供组合工作台卡片入口判断
export const SLUG_OF = {
  "di-01": "cup",
  "di-03": "comb",
  "di-04": "lamp",
  "di-05": "box",
  "di-06": "radio",
  "di-07": "camera",
  "di-08": "clock",
  "di-09": "thermos",
  "di-10": "frame",
  "di-11": "typewriter",
  "di-12": "kerosene",
  "di-13": "suitcase",
  "di-14": "tv",
  "di-15": "flashlight",
  "di-16": "sewing",
  "di-17": "frog",
  "di-18": "fan",
  "di-19": "gramophone",
  "di-20": "watch",
  "di-21": "enamel-mug",
  "di-22": "cradle",
  "di-23": "chair",
  "di-24": "top",
  "di-25": "kite",
  "di-26": "rattle",
  "di-27": "hotpot",
  "di-28": "abacus",
  "di-29": "pen",
  "di-30": "letterbox",
  "di-31": "chime",
  "di-32": "bedwarmer",
  "di-33": "bell",
  "di-34": "coalstove",
  "di-35": "tinbox",
  "di-36": "marble",
  "di-37": "fan-fold",
  "di-38": "glasses",
  "di-39": "sewbasket",
  "di-40": "calendar",
  "di-41": "mortar",
  "di-42": "canteen",
  "di-43": "rockhorse",
  "di-44": "toolbox",
  "di-45": "candle",
  "di-46": "jar",
  "di-47": "oilpaper",
  "di-48": "hangingbasket",
  "di-49": "matchbox",
  "di-50": "album",
  "di-02": "phone"
};

// 3D 演示型工作间（老式旋转电话机 / 老式手摇病床）：路由直接指向 3D 演示组件
export const WORKSHOP_3D = {
  phone: { id: 'di-02', name: '老式旋转电话机' },
  bed: { id: 'di-51', name: '老式手摇病床' },
};
