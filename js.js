$(document).ready(function () {
    var active = false;
    var resetlength = 300;
    var seconds = resetlength;
    
    myNewWindow = window.open("timer.html");
    
    setInterval(function(){
        if(seconds>60)
            $('#time').text(""+parseInt(seconds/60)+":"+seconds%60<10?"0"+seconds%60:seconds%60);
        else
            $('#time').text(seconds);
            
        if(seconds<=10)
            $("#time").css("color", "rgb(198, 27, 23)");
        else
            $("#time").css("color", "black");
        if(active && seconds>0)
            seconds--;
    }, 1000);
    
    window.updateTimer = function (e) {
        if(e=='reset') {
            seconds=resetlength;
            active = false;
        }
        else if (e=='stop')
            active = false;
        else if (e=='start')
            active = true;
    }
    
    window.updateTimerLength = function (e) {
        resetLength = parseInt(e);
    }

});
