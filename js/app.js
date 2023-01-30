if(!localStorage.getItem('userLog')){
  window.location = './login.html'
}
const userLog = JSON.parse(localStorage.getItem('userLog'))
const signOff = () => {
  localStorage.removeItem('userLog')
  window.location = './login.html'
};

const barLines = document.querySelector('.header__lines')
const barCross = document.querySelector('.header__cross')
const button = document.getElementById('button')
const nav = document.querySelector('.nav__ul')

function lines(){
    if(nav.classList.contains('nav--active')){
      barLines.style.display = 'none'
      barCross.style.display = 'block'
      document.body.style.overflow = 'hidden'
    } 
  }
  
  function cross(){
    if(!nav.classList.contains('nav--active')) {
      barLines.style.display = 'block'
      barCross.style.display = 'none'
      document.body.style.overflow = 'visible'
    } 
}

button.addEventListener('click', function(){
  nav.classList.toggle('nav--active')
  nav.style.transition = 'all .5s ease-in-out'
  lines();
  cross();
});

let dot = document.querySelectorAll('.carrousel__dot')
let img = document.querySelectorAll('.carrousel__item')
let array = [0,0,0]

//valor por defecto
img[0].style.zIndex=1;
img[0].style.opacity=1;
dot[0].classList.add('carrousel__dot--active')

dot.forEach((eachDot, i)=>{
    dot[i].addEventListener('click', ()=>{
      array[i]=1;
      img.forEach((eachImg,i)=>{
          img[i].style.zIndex=array[i];
          img[i].style.opacity=array[i];
      })
      dot.forEach((eachDot, i)=>{
          dot[i].classList.remove('carrousel__dot--active')
      })
      dot[i].classList.add('carrousel__dot--active')
      array = [0,0,0]
    })
})