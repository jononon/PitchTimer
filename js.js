$(document).ready(function () {
    var active = false;
    var seconds = 60;
    
    myNewWindow = window.open("timer.html");
    
    setInterval(function(){ 
        $('#time').text(seconds);
        if(active && seconds>0)
            seconds--;
    }, 1000);
    
    window.updateTimer = function (e) {
        if(e=='reset') {
            seconds=60;
            active = false;
        }
        else if (e=='stop')
            active = false;
        else if (e=='start')
            active = true;
    }

});
