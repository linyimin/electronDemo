const {ipcMain} =require('electron');
const {send:sendMainWindow} =require('./windows/main')
const {create:createControlWindows} =require('./windows/control')

module.exports=function(){
    ipcMain.handle('login',()=>{
        let code=Math.floor(Math.random()*(999999-100000))+100000;
        return code;
    })

    ipcMain.on('control',async(e,remoteCode)=>{
        //在这里处置
        sendMainWindow('control-state-change',remoteCode,1);
        createControlWindows();
    })
}

