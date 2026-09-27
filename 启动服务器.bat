@echo off
chcp 65001 >nul 2>&1
title WonderForge - 小云雀 AI 生图服务器

echo ========================================
echo   WonderForge 万物改造工坊
echo   小云雀 AI 生图版 - 启动服务器
echo ========================================
echo.

cd /d "%~dp0server"

echo [1/2] 检查依赖...
if not exist "node_modules" (
  echo 正在安装依赖，请稍候...
  call npm install
  if errorlevel 1 (
    echo.
    echo 依赖安装失败！请确保已安装 Node.js
    pause
    exit /b 1
  )
)

echo [2/2] 启动服务器...
echo.
echo ========================================
echo   服务器已启动！
echo   请在浏览器打开: http://localhost:8787
echo   按 Ctrl+C 停止服务器
echo ========================================
echo.

node index.mjs

pause
