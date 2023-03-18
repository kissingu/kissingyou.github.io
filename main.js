const audio = new Audio("./test.mp3");
var count = 0;

function playBtn(el){
    if(count == 0){
        count = 1;
        audio.play();
        el.querySelector(".play").setAttribute('name', 'pause');
    }else{
        count = 0;
        audio.pause();
        el.querySelector(".play").setAttribute('name', 'play');
    }
}

function muteBtn(el){
    if(count == 0){
        count = 1;
        audio.muted = true;
        el.querySelector(".mute").setAttribute('name', 'volume-mute-outline');
    }else{
        count = 0;
        audio.muted = false;
        el.querySelector(".mute").setAttribute('name', 'volume-medium-outline');
    }
}
