var noon = 12;

function showCurrentTime() {
    var clock = document.getElementById('clock')
    var currentTime = new Date();

    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()

    var meridian = "AM";

    if (hours >= noon) {
        meridian = "PM"
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
}

function changeImage() {
    var time = new Date().getHours();
    console.log(time);

    var image = "https://th.bing.com/th/id/OIP.5HzAvZPEp3wkBoMrCeYDLgHaCh?W=349&h=111&c=7&r=0&o=7&pid=1.7&rm=3";

    var imageHTML = document.getElementById("timeImage");

    if (time == wakeupTime) {
        image = "https://www.freepik.com/premium-vector/alarm-clock-wakeup-time-isolated-background-flat-style-vector-illustration";
    }
    else if (time == sleepTime) {
        image = "https://www.bing.com/th/id/OIP.yscbQBLU8XUIN639_4EVhwHaGj?w=193&h=171&c=8&rs=1&qlt=90&o=6&pid=ImgAns";
    }
    else {
        image = "https://www.bing.com/th/id/OIP.KMgi5UjjXhu47k7LsFQ-MgHaFG?w=193&h=135&c=8&rs=1&qlt=90&o=6&pid=ImgAns";
    }

    imageHTML.src = image;
}