function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').textContent = timeString;
  
    var greeting = '';
    if (hours >= 5 && hours < 12) {
      greeting = 'Good Morning';
    } else if (hours >= 12 && hours < 18) {
      greeting = 'Good Afternoon';
    } else {
      greeting = 'Good Evening';
    }
    document.getElementById('greeting').textContent = greeting;

    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('en-GB', options); 
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  var now = new Date();