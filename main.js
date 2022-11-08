document.querySelector('.menuBTN').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase', {delay:200});
ScrollReveal().reveal('.newsCards', {delay:400});
ScrollReveal().reveal('.contentBanner', {delay:600});
ScrollReveal().reveal('.contentBanner-2', {delay:800});