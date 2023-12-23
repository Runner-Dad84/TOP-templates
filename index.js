// Class 'nav' appears with mouseover event
const navBars = (()=> {
  let nav = Array.from(document.getElementsByClassName('nav'));
  nav.forEach(element => {
    element.style.opacity = '0';
   }
  );
  nav.forEach(element => {
    element.addEventListener('mouseover',()=> {
      element.style.opacity = '100';
   }
  )
 }
);
  nav.forEach(element => {
    element.addEventListener('mouseout',()=> {
      element.style.opacity = '0';
    }
  )
 }
);
})();
// For container class 'dropDown', ul appears on button click event
const dropDowns = (()=> {
  const dropDown = Array.from(document.getElementsByClassName('dropDown'));
  dropDown.forEach(menu => {
    let list = menu.querySelector('ul');
      list.style.display = 'none';
    menu.addEventListener('click',()=> {
      if (list.style.display === 'none') {
         list.style.display = 'block';
      } else {
        list.style.display = 'none';
      }
    }
  )
}
);
})();

// Mobile dot nav
function dotNav () {
  const dot = Array.from(document.getElementsByClassName('dotNav'));
  dot.forEach(menu => {
    let list = menu.querySelector('ul');
      list.style.display = 'none';
    menu.addEventListener('click',()=> {
      if (list.style.display === 'none') {
        list.style.display = 'block';
     } else {
       list.style.display = 'none';
     }
   }
 )
  })}
dotNav();

// Image carousel
function forward () {
  const slide1 = document.getElementById('slide1');
  const slide2 = document.getElementById('slide2');
  const slide3 = document.getElementById('slide3');
  const slide4 = document.getElementById('slide4');
  const slide5 = document.getElementById('slide5');
  const containter = document.getElementById('container');


};
const carousel = (()=> {
  
  const slide1 = document.getElementById('pic1');
  const slide2 = document.getElementById('pic2');
  const slide3 = document.getElementById('pic3');
  const slide4 = document.getElementById('pic4');
  const slide5 = document.getElementById('pic5');



  

})();