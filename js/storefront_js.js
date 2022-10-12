// const topBar = document.getElementsByClassName("top-bar");

// const syls = document.getElementById("syls");

// const sylsDrop = document.getElementById("syls-drop");

// syls.addEventListener('mouseenter', ()=> {
//     danuDrop.classList.add("hidden");
//     myceDrop.classList.add("hidden");
//     sylsDrop.classList.remove("hidden");
// });

// sylsDrop.addEventListener('mouseleave', ()=> {
//     sylsDrop.classList.add("hidden");
// });

// const danu = document.getElementById("danu");

// const danuDrop = document.getElementById("danu-drop");

// danu.addEventListener('mouseenter', ()=> {
//     sylsDrop.classList.add("hidden");
//     myceDrop.classList.add("hidden");
//     danuDrop.classList.remove("hidden");
// });

// danuDrop.addEventListener('mouseleave', ()=> {
//     danuDrop.classList.add("hidden");
// });

// const myce = document.getElementById("myce");

// const myceDrop = document.getElementById("myce-drop");

// myce.addEventListener('mouseenter', ()=> {
//     sylsDrop.classList.add("hidden");
//     danuDrop.classList.add("hidden");
//     myceDrop.classList.remove("hidden");
// });

// myceDrop.addEventListener('mouseleave', ()=> {
//     myceDrop.classList.add("hidden");
// });


// const borger = document.getElementById("burger-icon");

// const borgerDrop = document.getElementById("borger-drop");

// borger.addEventListener('click', ()=> {
//     borgerDrop.classList.toggle("hidden");
// });


const sylsBackS = document.getElementById("syls-back");
const sylsFwrdS = document.getElementById("syls-fwrd");
const sylsFeature = document.getElementById("syls-feature");

sylsBackS.addEventListener('click', ()=> {
    sylsFeature.scrollLeft -= 300;
});

sylsFwrdS.addEventListener('click', ()=> {
    sylsFeature.scrollLeft += 300;
});


const danuBackS = document.getElementById("danu-back");
const danuFwrdS = document.getElementById("danu-fwrd");
const danuFeature = document.getElementById("danu-feature");

danuBackS.addEventListener('click', ()=> {
    danuFeature.scrollLeft -= 300;
});

danuFwrdS.addEventListener('click', ()=> {
    danuFeature.scrollLeft += 300;

});

const myceBackS = document.getElementById("myce-back");
const myceFwrdS = document.getElementById("myce-fwrd");
const myceFeature = document.getElementById("myce-feature");

myceBackS.addEventListener('click', ()=> {
    myceFeature.scrollLeft -= 300;
});

myceFwrdS.addEventListener('click', ()=> {
    myceFeature.scrollLeft += 300;

});


