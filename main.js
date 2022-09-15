var sceneryFrames= [
    { transform: 'translate3d(90%,0,0)'},
    { transform: 'translate3d(-150%,0,0)'}
]

var sceneryTiming={
    duration: 36000,
    iterations: Infinity,
    playbackRate: -2
}

var background = document.getElementById("background")

var backgroundMovement = background.animate(sceneryFrames,sceneryTiming)

backgroundMovement.currentTime = backgroundMovement.effect.getTiming().duration / 2

var flyFaster = function(){
    backgroundMovement.playbackRate *= 1.1
}

// setInterval(function(){
//     if(backgroundMovement.playbackRate>0.4){
//         backgroundMovement.playbackRate *= 0.9
//     }
// },2000)

document.addEventListener("click",flyFaster)
