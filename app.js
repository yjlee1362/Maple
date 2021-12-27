let secondsO = 7200; //기본 시간(재획)
const clockF = document.getElementById("clockF");
const clockF1 = document.getElementById("clockF1");

//알림창 
const info = document.getElementById("info");


// const plusF = document.getElementById("plusF");
//버튼을 통한 시간추가는 추후 다시 구현예정.
// plusF.addEventListener("click", function () {
//     seconds = seconds + 50;
//     clock1.innerText = `${seconds}`;
//     return seconds;
// });//타이머 50초
// const plusH = document.getElementById("plusH");//타이머 100초
// plusH.addEventListener("click", function (Time) {
//     seconds = seconds + Time;
//     clock1.innerText = `${seconds}`;
//     return seconds;
// });
// const plusT = document.getElementById("plusT");//타이머 1000초
// plusT.addEventListener("click", function () {
//     seconds = seconds + 1000;
//     clock1.innerText = `${seconds}`;
//     return seconds;
// });

// clockF1.innerText = `${parseInt(secondsO / 3600)}:${(parseInt(secondsO % 3600 / 60))}:${parseInt((secondsO % 60))}`;
clockF1.innerText = `재획`;
let a;
const cheakF = document.getElementById("cheak1");
const startButtonF = document.getElementById("start1");
let sw = false;

let big;

const clockOne = document.getElementById("clockOne");
const clockOpen1 = document.getElementById("clockOpen1");

function clockOpen() {
    clockOne.style.display = "block";
    clockOpen1.style.display = "none";
    const closeClock1 = document.getElementById("closeClock1")
    closeClock1.addEventListener("click", function () {
        clockOne.style.display = "none";
        clockOpen1.style.display = "block";
    })
};

clockOpen1.addEventListener("click", clockOpen);

//기본적인 타이머 구현 함수. 
const IS = function () {
    if (a == 0) {
        ;
        clockF1.style.display = "none";
        startButtonF.addEventListener("click", op);
        info.style.backgroundColor = "white";

    }
    else if (a < 11) {
        info.style.backgroundColor = "red";
        a--; startButtonF.removeEventListener("click", op);
        let h = parseInt(a / 3600);
        let m = parseInt((a % 3600 / 60));
        let s = parseInt(a % 60);
        clockF.innerText = `${h}:${m}:${s}`;
        clockOne.style.display = "block";
        secondsO = a;
    }
    else {
        a--;
        startButtonF.removeEventListener("click", op);
        let h = parseInt(a / 3600);
        let m = parseInt((a % 3600 / 60));
        let s = parseInt(a % 60);
        clockF.innerText = `${h}:${m}:${s}`;
        clockOne.style.display = "block";

        secondsO = a;
    };
    return secondsO;
}
function op() {
    a = secondsO; sw = true;
    big = setInterval(IS, 1000);
};
//interval을 통한 카운트 다운. (ms는 수를 늘려서 대응.)
startButtonF.addEventListener("click", op);
cheakF.addEventListener("click", stop);
function stop() { clearInterval(big); startButtonF.addEventListener("click", op) };

// const testing = document.getElementById("testing");
// const record = document.getElementById("record");
// function pp() { record.innerText = `${seconds}`; };
// testing.addEventListener("click", pp);
// 중간중간 경과시간을 알아보기 위한 함수 추가할지 판단여부에따라

let secondsT = 1800; //기본 시간(경쿠 30분)
const clockS = document.getElementById("clockS");
const clockS1 = document.getElementById("clockS1");
const start2 = document.getElementById("start2");
const cheak2 = document.getElementById("cheak2");
const clockOpen2 = document.getElementById("clockOpen2");
const closeClock2 = document.getElementById("closeClock2");
const clockTwo = document.getElementById("clockTwo");

// clockS1.innerText = `${parseInt(secondsT / 3600)}:${(parseInt(secondsT % 3600 / 60))}:${parseInt((secondsT % 60))}`;
clockS1.innerText = `경쿠`;
let b;
let big2;
function clockOpenS() {
    clockTwo.style.display = "block";
    clockOpen2.style.display = "none";
    closeClock2.addEventListener("click", function () {
        clockTwo.style.display = "none";
        clockOpen2.style.display = "block";
    });
};

clockOpen2.addEventListener("click", clockOpenS);

const ClockSystem2 = function () {
    if (b == 0) {
        ;
        clockS1.style.display = "none";
        start2.addEventListener("click", IntervalS);
        info.style.backgroundColor = "white"
    }
    else if (b < 11) {
        info.style.backgroundColor = "blue";
        b--;
        let h2 = parseInt(b / 3600);
        let m2 = parseInt((b % 3600 / 60));
        let s2 = parseInt(b % 60);
        clockS.innerText = `${h2}:${m2}:${s2}`;
        clockTwo.style.display = "block";
        secondsT = b;
    }
    else {
        b--;
        start2.removeEventListener("click", IntervalS);

        let h2 = parseInt(b / 3600);
        let m2 = parseInt((b % 3600 / 60));
        let s2 = parseInt(b % 60);
        clockS.innerText = `${h2}:${m2}:${s2}`;
        clockTwo.style.display = "block";

        secondsT = b;
    };
    return secondsT;
};
function IntervalS() {
    b = secondsT;
    big2 = setInterval(ClockSystem2, 1000);
};

start2.addEventListener("click", IntervalS);
cheak2.addEventListener("click", stop2);

function stop2() {
    clearInterval(big2);
    start2.addEventListener("click", IntervalS)
};

let secondsThree = 1800; //기본 시간(경뿌 30분) 5분미만이 됬을때 안내할 방법 추가하기.
const clockT = document.getElementById("clockT");
const clockT1 = document.getElementById("clockT1");
const start3 = document.getElementById("start3");
const cheak3 = document.getElementById("cheak3");
const clockOpen3 = document.getElementById("clockOpen3");
const closeClock3 = document.getElementById("closeClock3");
const clockThree = document.getElementById("clockThree");

// clockT1.innerText = `${parseInt(secondsThree / 3600)}:${(parseInt(secondsThree % 3600 / 60))}:${parseInt((secondsThree % 60))}`;
clockT1.innerText = "경뿌";
let c;
let big3;
function clockOpenT() {
    clockThree.style.display = "block";
    clockOpen3.style.display = "none";
    closeClock3.addEventListener("click", function () {
        clockThree.style.display = "none";
        clockOpen3.style.display = "block";
    });
};

clockOpen3.addEventListener("click", clockOpenT);

const ClockSystem3 = function () {
    if (c == 0) {
        info.style.backgroundColor = "white";
        clockT1.style.display = "none";
        start3.addEventListener("click", IntervalT);
        clearInterval(big3);
        //타이머 종료 시 취할 코드. 추후 변경 예정

    }// 남은시간이 1, 2, 3, 4 분 일 경우에 녹색으로 색 변경
    else if (((c < 11) && (c > 0)) || ((c < 71) && (c > 61)) || ((c < 131) && (c > 121)) || ((c < 191) && (c > 181)) || ((c < 251) && (c > 241)) || ((c < 311) && (c > 301))) {
        c--;
        start3.removeEventListener("click", IntervalT);
        info.style.backgroundColor = "green";
        let h3 = parseInt(c / 3600);
        let m3 = parseInt((c % 3600 / 60));
        let s3 = parseInt(c % 60);
        clockT.innerText = `${h3}:${m3}:${s3}`;
        clockThree.style.display = "block";
        secondsThree = c;;
    }
    else if ((c == 60) || (c == 120) || (c == 180) || (c == 240) || (c == 300)) {
        c--;
        start3.removeEventListener("click", IntervalT);
        info.style.backgroundColor = "white";
        let h3 = parseInt(c / 3600);
        let m3 = parseInt((c % 3600 / 60));
        let s3 = parseInt(c % 60);
        clockT.innerText = `${h3}:${m3}:${s3}`;
        clockThree.style.display = "block";
        secondsThree = c;
    }
    else {
        c--;
        start3.removeEventListener("click", IntervalT);
        let h3 = parseInt(c / 3600);
        let m3 = parseInt((c % 3600 / 60));
        let s3 = parseInt(c % 60);
        clockT.innerText = `${h3}:${m3}:${s3}`;
        clockThree.style.display = "block";
        info.style.backgroundColor = "white";
        secondsThree = c;
    };
    return secondsThree;
};
function IntervalT() {
    c = secondsThree;
    big3 = setInterval(ClockSystem3, 1000);
};

start3.addEventListener("click", IntervalT);
cheak3.addEventListener("click", stop3);

function stop3() {
    clearInterval(big3);
    start3.addEventListener("click", IntervalT)
};

const reset = document.getElementById("reset");
const reset2 = document.getElementById("reset2");
const reset3 = document.getElementById("reset3");

reset.addEventListener("click", clockReset1);
reset2.addEventListener("click", clockReset2);
reset3.addEventListener("click", clockReset3);


function clockReset1() {
    clearInterval(big);
    a = 7200;
    big = setInterval(IS, 1000);
    return a
};


function clockReset2() {
    clearInterval(big2);
    b = 1800;
    big2 = setInterval(ClockSystem2, 1000);
    return b
};


function clockReset3() {
    clearInterval(big3);
    c = 1800;
    big3 = setInterval(ClockSystem3, 1000);
    return c
};