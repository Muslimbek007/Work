var elNav = document.querySelector('.nav');
var elbody = document.querySelector('body');
var elTop = document.getElementById('top');

document.addEventListener('scroll', function(){
    if(window.scrollY > 220){
        elNav.classList.add('nav--fixed');
        elbody.style.marginTop = elNav.offsetHeight + 'px';
    }
    else{
        elNav.classList.remove('nav--fixed');
        elbody.style.marginTop = 0;
    }
    if(window.scrollY > 320){
        elTop.classList.add('top-fixed');
    }
    else{
        elTop.classList.remove('top-fixed');
    }
})

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}