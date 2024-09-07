const pangBomba = document.querySelector('#pangBomba');
const bomba = document.querySelector('#bomba');
const bayag = document.querySelector('#bayag');

console.log(pangBomba,bomba)
let size =100;
const down = ()=>{
    console.log('down');
    bomba.style.transform = 'translateY(40px)'
    bomba.style.transition = "all"
    bayag.style.height = `${size+=10}px`
}
const up = ()=>{
    setTimeout(() => {
         bomba.style.transform = 'translateY(0px)'
    }, 500);
   
}
// const removeListerner = ()=>{
//         pangBomba.removeEventListener('mousedown', down)
// }

pangBomba.addEventListener('mousedown', down)
pangBomba.addEventListener('mouseup', up)