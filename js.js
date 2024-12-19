document.querySelector('.scroller').addEventListener('click', scroll)
let state = 0;
function scroll(){
    if (state == 0){
        document.querySelector('.menu').classList.add("moveright");
        document.querySelector('.menu').classList.remove("moveleft");
        document.querySelector('.scroller').classList.add("turn");
        state = 1
    }
    else{
        document.querySelector('.menu').classList.remove("moveright");
        document.querySelector('.menu').classList.add("moveleft");
        document.querySelector('.scroller').classList.remove("turn");
        state = 0
    }
}