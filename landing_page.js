const menuItem = document.querySelector('.menu-items');
const openMenu = document.querySelector('.toggle-menu');

openMenu.addEventListener("click", function(){
    menuItem.classList.toggle("active")
});
    
