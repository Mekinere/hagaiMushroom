const topBar = document.getElementsByClassName("top-bar");

const syls = document.getElementById("syls");

const sylsDrop = document.getElementById("syls-drop");

syls.addEventListener('mouseenter', ()=> {
    danuDrop.classList.add("hidden");
    myceDrop.classList.add("hidden");
    sylsDrop.classList.remove("hidden");
});

sylsDrop.addEventListener('mouseleave', ()=> {
    sylsDrop.classList.add("hidden");
});

const danu = document.getElementById("danu");

const danuDrop = document.getElementById("danu-drop");

danu.addEventListener('mouseenter', ()=> {
    sylsDrop.classList.add("hidden");
    myceDrop.classList.add("hidden");
    danuDrop.classList.remove("hidden");
});

danuDrop.addEventListener('mouseleave', ()=> {
    danuDrop.classList.add("hidden");
});

const myce = document.getElementById("myce");

const myceDrop = document.getElementById("myce-drop");

myce.addEventListener('mouseenter', ()=> {
    sylsDrop.classList.add("hidden");
    danuDrop.classList.add("hidden");
    myceDrop.classList.remove("hidden");
});

myceDrop.addEventListener('mouseleave', ()=> {
    myceDrop.classList.add("hidden");
});


const borger = document.getElementById("burger-icon");

const borgerDrop = document.getElementById("borger-drop");

borger.addEventListener('click', ()=> {
    borgerDrop.classList.toggle("hidden");
});