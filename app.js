let seconds = 10; //기본 시간
const clockF = document.getElementById("clockF");
const clockF1 = document.getElementById("clockF1");

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


clockF1.innerText = `${parseInt(seconds / 3600)}:${(parseInt(seconds % 3600 / 60))}:${parseInt((seconds % 60))}`;
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
        clockF.innerText = `done`; //타이머 종료 시 취할 코드. 추후 변경 예정

    }
    else {
        a--;
        startButtonF.removeEventListener("click", op);
        let h = parseInt(a / 3600);
        let m = parseInt((a % 3600 / 60));
        let s = parseInt(a % 60);
        clockF.innerText = `${h}:${m}:${s}`;
        clockOne.style.display = "block";
        seconds = a;
    };
    return seconds;
}
function op() {
    a = seconds; sw = true;
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