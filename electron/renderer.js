const { remote } = require('electron');

document.getElementById('back-button').addEventListener('click', () => {
  const currentWindow = remote.getCurrentWindow();
  currentWindow.webContents.goBack();
});