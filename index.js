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

//Mobile nav and rudder
function rudder () {
  const rudder = Array.from(document.getElementsByClassName('dotNav'));
  rudder.forEach(menu => {
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
rudder();