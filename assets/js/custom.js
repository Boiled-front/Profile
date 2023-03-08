const sidebarButton = document.querySelector('.sidebar-button');
const sidebarMenu = document.querySelector('.sidebar');

sidebarButton.addEventListener('click', function(){
    sidebarMenu.classList.toggle('active');
    sidebarButton.classList.toggle('active');
})