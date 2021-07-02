var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start(){
    timer = true;
    stopwatch();

}
function stop(){
    timer = false;
    stopwatch();

}
function reset(){
    timer = false;
    stopwatch();


    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";

}
function stopwatch(){
    if(timer == true){
        count = count+1;

        if(count == 100){
            sec = sec + 1;
            count = 0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hr = h1 + 1;
            min = 0;
            sec = 0;
        }

        hrString = hr;
        minString = min;
        secString = sec;
        countString = count;

        if(hr < 9){
            hrString = "0" + hrString;
        }
        if(min < 9){
            minString = "0" + minString;
        }
        if(sec < 9){
            secString = "0" + secString;
        }
        if(count < 9){
            hrString = "0" + countString;
        }


        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;


        setTimeout("stopwatch()" , 10);

    }
}