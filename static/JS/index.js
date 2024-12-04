window.addEventListener('scroll', function() {
    const altura = window.innerHeight / 1.6;
    function fade(direccion){
        let imagen = document.querySelectorAll('.fade_'+direccion);
        for(let i = 0; i < imagen.length; i++){ 
            let distancia = imagen[i].getBoundingClientRect().top;
            imagen[i].classList.add('trasform_'+direccion)
            if(distancia <= altura){
            imagen[i].classList.add('aparecer');
            }else{
            imagen[i].classList.remove('aparecer')
            }
        }
    }
    function fadeTxt(){
        let txt = document.querySelectorAll('.fade_text')
        for(let i = 0; i < txt.length; i++){
            let distancia = txt[i].getBoundingClientRect().top;
            if(distancia <= altura){
                txt[i].classList.add('aparecer-tex');
            }
            else{
                txt[i].classList.remove('aparecer-tex');
            }
        }
    }
    fade('left')
    fade('right')
    fadeTxt()
    })
window.addEventListener('DOMContentLoaded', function(){
    let txt_izq = document.querySelectorAll('.text_izq');
    let txt_der = this.document.querySelectorAll('.text_der')
    for(let i = 0; i< txt_izq.length; i++){
        txt_izq[i].style.borderRadius = '85px 25px';  // Aplica el border-radius
    }

    for(let i = 0; i< txt_der.length; i++){
        txt_der[i].style.borderRadius = '25px 85px'  // Aplica margin-right
    }
})
let mode = document.getElementById('modoclaro')
let body = document.getElementById('body')
let imgLogo = document.querySelectorAll('#img-logo')
let nav = document.getElementById('nav')
let luz = document.querySelectorAll('.luz')
let contec = document.querySelectorAll('.container-img-txt')
let detalles = document.querySelectorAll('.luz-detalles')
let navs = document.querySelectorAll('.luz-nav')
let fcont = document.querySelector('.contFotter')
let fRnav = document.querySelector('.Ftelderechos')
let v = true;
mode.addEventListener('click', function(){
        v = !v
        if(v){
            mode.innerHTML = 'dark_mode';
            body.style.background = 'linear-gradient(to bottom, rgba(163,196,188,1) 0%, rgba(231,239,197,1) 50%, rgba(242,231,201,1) 100%)';
            for(let a of imgLogo){
                a.src = "static/no-bg.png";
            }
            fcont.style.background = '#AFCDA2';
            fRnav.style.background = '#3333336c';
            for(let l of luz){
                l.style.boxShadow = '15px 10px 5px 0px rgba(0, 0, 0, 0.75)';
                l.style.webkitBoxShadow = '-15px 10px 5px 0px rgba(0, 0, 0, 0.75)';
                l.style.mozBoxShadow = '15px 10px 5px 0px rgba(0, 0, 0, 0.75)';
            }
            for(let j of contec){
                j.style.background = '#E7D39C';
            }
            for(let b of detalles){
                b.style.boxShadow = '-4px 3px 16px 0px rgba(0,0,0,1)'
                b.style.webkitBoxShadow = '-4px 3px 16px 0px rgba(0,0,0,1)'
                b.style.mozBoxShadow = '-4px 3px 16px 0px rgba(0,0,0,1)'
            }
            for(let c of navs){
                c.style.boxShadow = '-10px 6px 16px 0px rgba(0,0,0,1)'
                c.style.webkitBoxShadow = '-10px 6px 16px 0px rgba(0,0,0,1)'
                c.style.mozBoxShadow = '-10px 6px 16px 0px rgba(0,0,0,1)'
            }
        }else{
            mode.innerHTML = 'light_mode'
            fcont.style.background = '#523D4D'
            fRnav.style.background = '#6A4E63'
            body.style.background = 'hsla(266, 6%, 24%, 1);'
            body.style.background = 'linear-gradient(90deg, hsla(266, 6%, 24%, 1) 0%, hsla(218, 11%, 40%, 1) 100%)'
            body.style.background = '-moz-linear-gradient(90deg, hsla(266, 6%, 24%, 1) 0%, hsla(218, 11%, 40%, 1) 100%)'
            body.style.background = '-webkit-linear-gradient(90deg, hsla(266, 6%, 24%, 1) 0%, hsla(218, 11%, 40%, 1) 100%)'
            imgLogo.src = "static/mode-dark.png";
            for(let l of luz){
                l.style.boxShadow = '15px 10px 5px 0px rgba(255, 255, 255, 0.75)';
                l.style.webkitBoxShadow = '-15px 10px 5px 0px rgba(255, 255, 255, 0.75)';
                l.style.mozBoxShadow = '15px 10px 5px 0px rgba(255, 255, 255, 0.75)';
            }
            for(let a of imgLogo){
                a.src = "static/mode-dark.png";
            }
            for(let j of contec){
                j.style.background = '#565658'
            }
            for(let b of detalles){
                b.style.boxShadow = '-4px 3px 16px 0px rgba(255,255,255, 0.75)'
                b.style.webkitBoxShadow = '-4px 3px 16px 0px rgba(255,255,255, 0.75)'
                b.style.mozBoxShadow = '-4px 3px 16px 0px rgba(255,255,255, 0.75)'
            }
            for(let c of navs){
                c.style.boxShadow = '-10px 6px 16px 0px rgba(255,255,255, 0.75)'
                c.style.webkitBoxShadow = '-10px 6px 16px rgba(255,255,255, 0.75)'
                c.style.mozBoxShadow = '-10px 6px 16px 0px rgba(255,255,255, 0.75)'
            }
    }})
    const fomulari = document.getElementById('form-contact');
fomulari.addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(this);

    // Depurar: Verifica los datos que se están enviando
    console.log('Datos del formulario:', Object.fromEntries(formData.entries()));

    try {
        const response = await fetch('https://aneloko.pythonanywhere.com/api/send-email/', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            // Si no es exitoso, imprime el código de estado y el texto de la respuesta
            console.error('Error en la respuesta:', response.status, response.statusText);
            const text = await response.text(); // Captura el cuerpo de la respuesta
            console.error('Cuerpo de la respuesta:', text);
            alert(`Error ${response.status}: ${response.statusText}`);
            return;
        }

        const result = await response.json();
        alert(result.status);
        fomulari.reset();
    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Error en la solicitud');
    }
});
