const btnMob = document.getElementById('navBtnMob');

function toggleNav(){
    const barOp = document.getElementById('navBarOp');
    barOp.classList.toggle('active');
    const active = navBarOp.classList.contains('active');
    Event.currentTarget.setAttribute('aria-expanded', active);
    if(active){
        Event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        Event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMob.addEventListener('click', toggleNav);
btnMob.addEventListener('touchstart', toggleNav);