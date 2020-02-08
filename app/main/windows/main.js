const {app,BrowserWindow} =require('electron');
const isDev =require('electron-is-dev');
const path=require('path');

let win;
function create(){
    win = new BrowserWindow({
        width:600,
        height:600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    if(isDev) {
        win.loadURL("http://localhost:3000");
    }else{
        //线上环境
        win.loadURL(path.resolve(__dirname,'../render/pages/main/index.html'));
    }
}
function send(channel,...args){
    win.webContents.send(channel,...args);
}

module.exports={create,send}