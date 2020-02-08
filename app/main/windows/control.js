const {app,BrowserWindow} =require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let win;

function create(){
    win = new BrowserWindow({
        width:1000,
        height:600,
        webPreferences:{
            nodeIntegration:true
        }
    })

    win.loadFile(path.resolve(__dirname,'../../render/pages/control/index.html'));
    win.openDevTools();
}

module.exports={create};