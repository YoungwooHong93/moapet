'use strict';

const main_container = document.querySelector('.main_container'),
    slide_container = main_container.querySelector('.slide_container'),
    slide_list = main_container.querySelector('.slide_list'),
    li = slide_list.getElementsByTagName('li'),
    btn = main_container.querySelectorAll('a');

const list_endIdx = li.length - 1;
let list_idx = 0;

function changeImg() {
    let move = this === window ? 1 : +this.dataset.moveValue;

    list_idx += move;
    list_idx %= li.length;

    slide_list.style.left = `${-list_idx * 100}%`;

    if (list_idx <= 0) {
        btn[0].classList.add('nonVisible');
    } else {
        btn[0].classList.remove('nonVisible');
    }

    if (list_idx >= list_endIdx) {
        btn[1].classList.add('nonVisible');
    } else {
        btn[1].classList.remove('nonVisible');
    }

}
btn[1].addEventListener('click', changeImg);
btn[0].addEventListener('click', changeImg);


setInterval(changeImg, 3000);