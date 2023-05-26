let info = document.querySelector('.info');
let btns = document.querySelectorAll('.btn');
let content = document.querySelectorAll('.content');

info.addEventListener('click', (e) => {
    //console.log(e.target.dataset.id);
    let id = e.target.dataset.id;
    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove('live');
        })
        e.target.classList.add('live');
        content.forEach((c) => {
            c.classList.remove('live');
        });
        let el = document.getElementById(id);
        el.classList.add('live')
    }
})







