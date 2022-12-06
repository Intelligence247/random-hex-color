let rand = '#' + Math.random().toString(16).substr(2, 6)
let btn = document.querySelector('button')
let sp = document.querySelector('span')
sp.textContent = rand
let body = document.querySelector('body')
body.style.backgroundColor = rand

btn.addEventListener('click', () => {
    let rand = '#' + Math.random().toString(16).substr(2, 6)
    body.style.backgroundColor = rand
    let sp = document.querySelector('span')
    sp.textContent = rand
})