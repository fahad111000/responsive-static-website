
let unorder = document.getElementById('unorder');
let navIcons = document.getElementById('navIcons');
navIcons.addEventListener('click', ()=>{
    
    navIcons.classList.toggle('fa-xmark');
    unorder.classList.toggle('open')

});



