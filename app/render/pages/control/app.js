
 console.log('peer-control.js begin');
 let video = document.getElementById('screen-video');
function play(stream){
    console.log('peer-control.js play');
    video.srcObject = stream;
    video.onloadedmetadata=function(){
        alert(5)
        console.log('video.onloadedmetadata');
        video.play();
    }
}