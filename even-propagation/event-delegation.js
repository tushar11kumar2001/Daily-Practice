// event bubbling

const parent = document.querySelector(".parent2");
const ch1 = document.querySelector(".child1");
const ch2 = document.querySelector(".child2");
const ch3 = document.querySelector(".child3");
const ch4 = document.querySelector(".child4");
const ch5 = document.querySelector(".child5");



// parent.addEventListener("click", ()=>{
//     console.log("parent click")
// },
// )


//here this is example adding event listener on multiple childrens

// ch1.addEventListener("click", ()=>{
//     console.log("child1 click")
// },
// )
// ch2.addEventListener("click", ()=>{
//     console.log("child2 click")
// },
// )
// ch3.addEventListener("click", ()=>{
//     console.log("child3 click")
// },
// )
// ch4.addEventListener("click", ()=>{
//     console.log("child4 click")
// },
// )
// ch5.addEventListener("click", ()=>{
//     console.log("child5 click")
// },
// )


//event delegation :- instead of adding event listener on multiple childern, we attach one event listener on parent and use it to handle event on childresn

parent.addEventListener("click", (e)=>{
    if(e.target.id === "1"){
        console.log("child1 click")
    }else if(e.target.id === "2"){
        console.log("child2 click")
    }else if(e.target.id === "3"){
        console.log("child3 click")
    }else if(e.target.id === "4"){
        console.log("child4 click")
    }else if(e.target.id === "5"){
        console.log("child5 click")
    }
},
)
