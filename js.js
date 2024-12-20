// document.querySelector('.scroller').addEventListener('click', scroll)
// let state = 0;
// function scroll(){
//     if (state == 0){
//         document.querySelector('.menu').classList.add("moveright");
//         document.querySelector('.menu').classList.remove("moveleft");
//         document.querySelector('.scroller').classList.add("turn");
//         state = 1
//     }
//     else{
//         document.querySelector('.menu').classList.remove("moveright");
//         document.querySelector('.menu').classList.add("moveleft");
//         document.querySelector('.scroller').classList.remove("turn");
//         state = 0
//     }
// }

document.querySelector('.header-menu').addEventListener('click', open);
document.querySelector('.cross').addEventListener('click',close);
function open(){
    document.querySelector('.header-platform').classList.remove("hidden");
}
function close(){
    document.querySelector('.header-platform').classList.add("hidden");
}

// JavaScript source code
const _C = document.querySelector('.container'), 
    N = _C.children.length;
let i = 0, x0 = null, locked = false, w;
function unify(e) {	return e.changedTouches ? e.changedTouches[0] : e };
function lock(e) {
  x0 = unify(e).clientX;
	_C.classList.toggle('smooth', !(locked = true))
};
function drag(e) {
	e.preventDefault();

	if(locked) 		
		_C.style.setProperty('--tx', `${Math.round(unify(e).clientX - x0)}px`)
};
function move(e) {
  if(locked) {
    let dx = unify(e).clientX - x0, s = Math.sign(dx), 
				f = +(s*dx/w).toFixed(2);
    if((i > 0 || s < 0) && (i < N - 1 || s > 0)) {
			_C.style.setProperty('--i', i -= s);
			f = 1 - f
		}
  
    _C.style.setProperty('--tx', '0px');
		_C.style.setProperty('--f', f);
    _C.classList.toggle('smooth', !(locked = false));
    x0 = null
  }
};
function size() { w = window.innerWidth };
size();
if (N!=null){
_C.style.setProperty('--n', N);
}

window.addEventListener("resize", mobile);
function mobile(){
//   if (screen.width > 767){
//     document.querySelector('.container').removeEventListener('mousedown', lock, false);
//     document.querySelector('.container').removeEventListener('touchstart', lock, false);
//     document.querySelector('.container').removeEventListener('mousemove', drag, false);
//     document.querySelector('.container').removeEventListener('touchmove', drag, false);
//     document.querySelector('.container').removeEventListener('mouseup', move, false);
//     document.querySelector('.container').removeEventListener('touchend', move, false);
//     document.querySelector('.container').classList = "flex gap-36 space-between menu container"
//     document.querySelector('.container').style = ""
//   }
//   else{
    _C.addEventListener('resize', size, false);
    _C.addEventListener('mousedown', lock, false);
    _C.addEventListener('touchstart', lock, false);
    _C.addEventListener('mousemove', drag, false);
    _C.addEventListener('touchmove', drag, false);
    _C.addEventListener('mouseup', move, false);
    _C.addEventListener('touchend', move, false);
  }
// }
mobile();