const {app,BrowserWindow} =require('electron');
const handleIPC =require('./ipc');
const {create:createMainWindow} = require('./windows/main');
const {create:createControWindow} = require('./windows/control');


app.on('ready',()=>{
   // createMainWindow();
   createControWindow();
    handleIPC();
})