$(document).ready(function () {
    myNewWindow = window.open();
    int seconds = 60;
    $('#time').text(seconds);
    
    function messageReceived(e) {

      var data = e.data;
      if(data=='reset') {
        seconds=60;
        
      }
  
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
