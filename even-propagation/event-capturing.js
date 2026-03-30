// event bubbling

const parent = document.querySelector(".parent");
const level1child = document.querySelector(".level1child");
const level2child = document.querySelector(".level2child");
const level3child = document.querySelector(".level3child");


parent.addEventListener("click", ()=>{
    console.log("parent click")
},
)

level1child.addEventListener("click", ()=>{
    console.log("level1child click")
},
{
    capture:true
}
)

level2child.addEventListener("click", ()=>{
    console.log("level2child click")
},
{
    capture:true
}
)

level3child.addEventListener("click", ()=>{
    console.log("level3child click")
},
)