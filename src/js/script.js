const titles = document.querySelectorAll('.project__title')
const dates = document.querySelectorAll('.project__date')
const btn = document.getElementById('date_btn')

btn.addEventListener('click', function() {
    moreDates()
})
window.addEventListener('load', function() {
    if (document.body.clientWidth > 1106) {
        datesToLi()
    }
})
window.addEventListener('load', function() {
    if (document.body.clientWidth > 768) {
        changeTitle()
    }
})
window.addEventListener('resize', function() {
    changeTitle()
    datesToLi()
})

function changeTitle() {
    if (document.body.clientWidth > 768) {
        titles.forEach(el => {
            el.innerHTML='Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020'
        })
    }
    else {
        titles.forEach(el => {
            el.innerHTML='АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2019'
        })
    }
}
function moreDates() {
    for (i= 11; i<15;i++) {
        dates[i].classList.toggle('hide')
    }
    document.getElementById('dates3').style.marginTop='10px'
}
function datesToLi() {
    if (document.body.clientWidth > 1106) {
        for (i=1;i<4;i++) {
            document.getElementById('li' + i).appendChild(document.getElementById('dates' + i))
        }
    }
    else {
        for (i=1;i<4;i++) {
            document.getElementById('content' + i).appendChild(document.getElementById('dates' + i))
            document.getElementById('dates' + i).style.order='0'
        }
    }
}