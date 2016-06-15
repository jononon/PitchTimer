$(document).ready(function () {
    var active = false;
    var seconds = 60;
    
    myNewWindow = window.open("timer.html");
    
    setInterval(function(){ 
        $('#time').text(seconds);
        if(active && seconds>0)
            seconds--;
    }, 1000);
    
    window.updateTimer(e) {
        if(data=='reset') {
            seconds=60;
            active = false;
        }
        else if (data=='stop')
            active = false;
        else if (data=='start')
            active = true;
    }

});
