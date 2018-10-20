$(document).ready(function() {

    function getTimeRemaining(endtime) {
      var t = endtime - new Date().getTime();
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
    
    function initializeClock(endtime) {
      var daysSpan = document.querySelectorAll('.days');
      var hoursSpan = document.querySelectorAll('.hours');
      var minutesSpan = document.querySelectorAll('.minutes');
      var secondsSpan = document.querySelectorAll('.seconds');
    
      function updateClock() {
        var t = getTimeRemaining(endtime);
    
        daysSpan[0].innerHTML = t.days;
        daysSpan[1].innerHTML = t.days;
        hoursSpan[0].innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan[0].innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan[0].innerHTML = ('0' + t.seconds).slice(-2);
        
        hoursSpan[1].innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan[1].innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan[1].innerHTML = ('0' + t.seconds).slice(-2);
    

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
    
      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }   
    
    var deadline = Date.parse('Nov 27, 2019');
    initializeClock(deadline);
    
    });