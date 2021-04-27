

const ramadanDate = '2 april 2022';


function countDown() {
    const ramadan = new Date(ramadanDate);
    const currentDate = new Date();

    // we get the answer in milisec , so devide by 1000 to get the sec
    const difference = (ramadanDate - currentDate) / 1000;

    var days = Math.floor(difference / 3600 / 24);
    var hour = Math.floor(difference / 3600) % 24;
    var min = Math.floor(difference / 60) % 60;
    var sec = Math.floor(difference % 60);



    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hour;
    document.getElementById("mins").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
}









setInterval(countDown, 1000);