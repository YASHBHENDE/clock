function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
   
    
    var clock = document.getElementById('clock');
    clock.textContent = 'time:-' + hours + ':' + minutes + ':' + seconds;
}
  

setInterval(updateClock, 1000);


let date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
let display_date = document.getElementsByClassName('display_date')[0];
display_date.textContent = 'date:-' + day + ":" + month + ":"  + year;


  
