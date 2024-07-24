import { app, BrowserWindow } from 'electron'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

// Получаем путь к текущей директории
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createWindow () {
  const win = new BrowserWindow({
    title: 'Main window',
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs')
    }
  })

  // You can use `process.env.VITE_DEV_SERVER_URL` when the vite command is called `serve`  
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    // Load your file
    win.loadFile('dist/index.html');
  }
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})