let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime(){
    let date = new Date();
    // getting min, hour and sec only, from date
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hrot=30*h+m/2;
    let mrot= 6*m;
    let srot=6*s;

    hr.style.transform=`rotate(${hrot}deg)`;
    // ${} >> evaluates the value in the variable and rotates that much degrees
    min.style.transform=`rotate(${mrot}deg)`;
    sec.style.transform=`rotate(${srot}deg)`;

}
setInterval(displayTime,1000)