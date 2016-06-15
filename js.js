$(document).ready(function () {
    var active = false;
    var seconds = 60;
    
    myNewWindow = window.open(timer.html);
    
    setInterval(function(){ 
        $('#time').text(seconds);
        if(active && seconds>0)
            seconds--;
    }, 1000);
    
    function messageReceived(e) {

     var data = e.data;
    if(data=='reset') {
        seconds=60;
        active = false;
    }
    else if (data=='stop')
        active = false;
    else if (data=='start')
        active = true;
  
      if(data=="start") {
        while(data!="stop" && seconds>0) {
          $('#time').text(seconds);
          sleep(1000);
          seconds--;
        }
      }

    }

    if(window.addEventListener)
        window.addEventListener('message', messageReceived);
    else
        window.attachEvent('onmessage', messageReceived);
});
