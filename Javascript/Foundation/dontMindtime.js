function dontMindtime() {

    var hour = 8;
    var minute = 30;
    var period = "AM";
    var x = 0;

    x = hour + ":" + minute + period;


    console.log("The time is", x);

    if (hour == 8 && minute >= 30) {
        if (period = "AM") {
            console.log("Its almost 9 in the morning");
        }
    } else if (hour == 7 && minute < 30) {
        if (period = "PM") {
            console.log("Its just after 7 in the evening");
        }
    }

}

dontMindtime()
