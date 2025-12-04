let box = document.querySelector('.track');
let leftBtn = document.querySelector('.end_btn');
let rightBtn = document.querySelector('.pre_btn');

let position = 0;
const moveDistance = 1200;

// 초기 상태: 양쪽 버튼 모두 활성화 (원하는 경우 한쪽만 활성화해도 됨)
leftBtn.disabled = false;
rightBtn.disabled = true;

leftBtn.addEventListener('click', () => {
    position -= moveDistance;
    box.style.left = position + 'px';

    // 왼쪽 버튼을 누르면: 오른쪽 버튼만 활성화
    leftBtn.disabled = true;
    rightBtn.disabled = false;
});

rightBtn.addEventListener('click', () => {
    position += moveDistance;
    box.style.left = position + 'px';

    // 오른쪽 버튼을 누르면: 왼쪽 버튼만 활성화
    rightBtn.disabled = true;
    leftBtn.disabled = false;
});

const mainmenu = document.querySelectorAll('.main-menu>li');
const headerlogo = document.querySelector('.headerlogo');
mainmenu.forEach((item) => {
    item.addEventListener('click', () => {
        mainmenu.forEach((li) => li.classList.remove('active'));
        item.classList.add('active');
    });
    headerlogo.addEventListener('click', function () {
        mainmenu.forEach((li) => li.classList.remove('active'));
    });
});
const train = document.querySelector('.slide_train');
let count = 0;
setInterval(function () {
    count++;
    if (count > 2) {
        count = 0;
    }
    train.style.transform = `translateY(${-500 * count}px)`;
}, 4000);
