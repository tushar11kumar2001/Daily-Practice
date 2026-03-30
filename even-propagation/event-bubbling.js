// event bubbling

const parent = document.querySelector(".parent");
const level1child = document.querySelector(".level1child");
const level2child = document.querySelector(".level2child");


parent.addEventListener("click", ()=>{
    console.log("parent click")
})

level1child.addEventListener("click", ()=>{
    console.log("level1child click")
})

level2child.addEventListener("click", ()=>{
    console.log("level2child click")
})