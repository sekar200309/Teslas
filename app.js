const menubtn = document.querySelector('.Menu-btn')
const mobile = document.querySelector('.mobile')
menubtn.addEventListener('click',()=>{
    mobile.classList.toggle('show-menu');
    menubtn.classList.toggle('mb');
    
    if (menubtn.classList.contains('mb')) {
        menubtn.innerHTML = "Close";
    } else {
        menubtn.innerHTML = "Menu";
    }
});
