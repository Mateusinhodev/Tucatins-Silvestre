/*==========================================
    TUCÃTINS SILVESTRE
==========================================*/


/*============ HEADER ============*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.background="#1B5E20";
        header.style.boxShadow="0 5px 20px rgba(0,0,0,.2)";

    }else{

        header.style.background="rgba(0,0,0,.30)";
        header.style.boxShadow="none";

    }

});


/*============ BOTÃO TOPO ============*/

const botaoTopo = document.createElement("a");

botaoTopo.href="#";

botaoTopo.classList.add("topo");

botaoTopo.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(botaoTopo);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        botaoTopo.style.display="flex";

    }else{

        botaoTopo.style.display="none";

    }

});


/*============ SCROLL SUAVE ============*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const destino=document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});


/*============ ANIMAÇÃO DOS CARDS ============*/

const elementos=document.querySelectorAll(".card,.animal,.projeto");

function aparecer(){

    elementos.forEach(item=>{

        const posicao=item.getBoundingClientRect().top;

        const tela=window.innerHeight-100;

        if(posicao<tela){

            item.style.opacity="1";
            item.style.transform="translateY(0)";

        }

    });

}

elementos.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(80px)";
    item.style.transition=".8s";

});

window.addEventListener("scroll",aparecer);

aparecer();


/*============ CONTADORES ============*/

const numeros=document.querySelectorAll(".numero h2");

function contador(){

    numeros.forEach(numero=>{

        const alvo=+numero.dataset.numero;

        let atual=0;

        const incremento=alvo/120;

        function atualizar(){

            atual+=incremento;

            if(atual<alvo){

                numero.innerText=Math.floor(atual);

                requestAnimationFrame(atualizar);

            }else{

                numero.innerText=alvo+"+";

            }

        }

        atualizar();

    });

}

const secao=document.querySelector(".numeros");

if(secao){

const observer=new IntersectionObserver((entries)=>{

if(entries[0].isIntersecting){

contador();

observer.disconnect();

}

});

observer.observe(secao);

}


/*============ EFEITO PARALLAX ============*/

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    hero.style.backgroundPositionY=window.pageYOffset * .5 +"px";

});


/*============ ANIMAÇÃO LOGO ============*/

const logo=document.querySelector(".logo img");

logo.addEventListener("mouseenter",()=>{

    logo.style.transform="rotate(10deg) scale(1.1)";

});

logo.addEventListener("mouseleave",()=>{

    logo.style.transform="rotate(0) scale(1)";

});