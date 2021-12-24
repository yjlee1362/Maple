let seconds = 0; //기본 시간
const clock = document.getElementById("clock");
const clock1 = document.getElementById("clock1");
const plusF = document.getElementById("plusF");
plusF.addEventListener("click", function () {
    seconds = seconds + 50;
    clock1.innerText = `${seconds}`;
    return seconds;
});//타이머 50초
const plusH = document.getElementById("plusH");//타이머 100초
plusH.addEventListener("click", function () {
    seconds = seconds + 100;
    clock1.innerText = `${seconds}`;
    return seconds;
});
const plusT = document.getElementById("plusT");//타이머 1000초
plusT.addEventListener("click", function () {
    seconds = seconds + 1000;
    clock1.innerText = `${seconds}`;
    return seconds;
});
let big;// interval을 전역 함수로 만들기 위한 변수 할당

clock1.innerText = `${parseInt(seconds / 3600)}:${(parseInt(seconds % 3600 / 60))}:${parseInt((seconds % 60))}`;
let a;
const cheak = document.getElementById("cheak");
const button = document.getElementById("start");
let sw = false;

const clockOne = document.getElementById("clockOne");
const clockOpen1 = document.getElementById("clockOpen1");

function clockOpen() {
    clockOne.style.display = "block";
    clockOpen1.style.display = "none";
    const clock1Close = document.getElementById("clock1Close")
    clock1Close.addEventListener("click", function () {
        clockOne.style.display = "none";
        clockOpen1.style.display = "block";
    })
};


clockOpen1.addEventListener("click", clockOpen);

//기본적인 타이머 구현 함수. 
const IS = function () {
    if (a == 0) {
        ;
        clock1.style.display = "none";
        start.addEventListener("click", op); 
        clock.innerText = `done`; //타이머 종료 시 취할 코드. 추후 변경 예정
      
    }
    else {
        a--;
        start.removeEventListener("click", op);
        let h = parseInt(a / 3600);
        let m = parseInt((a % 3600 / 60));
        let s = parseInt(a % 60);
        clock.innerText = `${h}:${m}:${s}`;
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
button.addEventListener("click", op);
cheak.addEventListener("click", stop);
function stop() { clearInterval(big); start.addEventListener("click", op) };
const testing = document.getElementById("testing");
const record = document.getElementById("record");


function pp() { record.innerText = `${seconds}`; };
testing.addEventListener("click", pp);