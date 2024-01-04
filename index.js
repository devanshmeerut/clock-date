const hourelm = document.getElementById("hours")
const minuteelm = document.getElementById("minutes")
const secondelm = document.getElementById("seconds")
const ampmelm = document.getElementById("ampm")
const dateelm = document.getElementById("datehere")




function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let datedef = new Date().toDateString();
    console.log(datedef)

    let ampm = "AM";

    if (h >= 12) {
        if (h > 12) {
            h = h - 12;
        }
        h = h;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourelm.innerText = h;
    minuteelm.innerText = m;
    secondelm.innerText = s;
    ampmelm.innerText = ampm;
    dateelm.innerText = datedef;
    setTimeout(() => {
        updateClock();
    }, 1000);
}
updateClock();