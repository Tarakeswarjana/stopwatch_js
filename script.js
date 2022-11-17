var timer = true;
hr = 0;
min = 0;
sec = 0;
count = 0;

function start() {
  timer = true;
  stopwatch();
}
function end() {
  timer = false;
}
function restart() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("ms").innerHTML = "00";
}

function stopwatch() {
  if (timer == true) {
    count = count + 1;
    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }

    if (min == 60) {
      hr = hr + 1;
      count = 0;
      sec = 0;
      min = 0;
    }
    if(hr<10){hrstring="0"+hr;}
    else{hrstring=hr;}
    if(min<10)
    minstring="0"+min;
    else{
        minstring=min;  
    }
    if(sec<10)
    secstring="0"+sec;
    else{
        secstring=sec;  
    }
    if(count<10)
    msstring="0"+count;
    else{
        msstring=+count; 
    }

    document.getElementById("hr").innerHTML = hrstring;
    document.getElementById("min").innerHTML = minstring;
    document.getElementById("sec").innerHTML = secstring;
    document.getElementById("ms").innerHTML = msstring;
    setTimeout("stopwatch()", 10);
  }
}
