// //p2p控制段
// const EventEmitter = require('events');
// const peer = new EventEmitter();
// console.log('peer-control.js begin');
// const {desktopCapturer} = require('electron');

// async function getScreenStream(){
//     const sources = await desktopCapturer.getSources({types:['screen']});

//     navigator.webkitGetUserMedia({
//         audio:false,
//         video:{
//             mandatory:{
//                 chromeMedioSource:'desktop',
//                 chromeMedioSourceId:sources[0].id,
//                 maxWidth:window.screen.width,
//                 maxHeight:window.screen.height
//             }
//         }
//     },(strean)=>{
//         peer.emit('add-stream',stream);
//     },(err)=>{
//         console.log(err);
//     })

// }

// console.log("getScreenStream view stream")
// getScreenStream();

const EventEmitter = require('events') 
const peer = new EventEmitter()
const {ipcRenderer, desktopCapturer} = require('electron')

async function getScreenStream() {
    const sources = await desktopCapturer.getSources({types: ['screen']})
    navigator.webkitGetUserMedia({
        audio: false,
        video: {
            mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: sources[0].id,
                maxWidth: window.screen.width,
                maxHeight: window.screen.height
            }
        }
    }, (stream) => {
        peer.emit('add-stream', stream)
    }, (err) => {
        //handle err
        console.error(err)
    })
}
getScreenStream()
module.exports=peer;