const button = document.querySelector(".arrow");
const span = document.querySelector(".arrow-span");
const color = document.querySelector(".changing-color");
const arrow = document.querySelectorAll(".round");
const outerDiv = document.querySelector(".color")

button.addEventListener("mouseover",()=>{
    span.style.backgroundColor = "white";
    console.log("jyhf");
})
button.addEventListener("mouseout",()=>{
    span.style.backgroundColor = "black";
})
let j = 0;
color.addEventListener("mouseover",()=>{
    outerDiv.style.width = "200px";
    outerDiv.style.transition = "width 1s"
    arrow.forEach((el)=>{
        el.classList.remove("hidden");
        el.style.transition = "opacity 1s"
    })
    document.querySelectorAll(".background").forEach((el)=>{
        el.style.animation = "animate 2s ease-in-out 3";
        j < 4 ? j < 2 ? el.style.animationDelay = "200ms" : el.style.animationDelay = "100ms" : 0;
        j+=1;
    })
})
color.addEventListener("mouseout",()=>{
    outerDiv.style.width = "100px";
    outerDiv.style.transition = "width 1s"
    arrow.forEach((el)=>{
        el.classList.add("hidden");
    })
    document.querySelectorAll(".background").forEach((el)=>{
        el.style.animation = "none";
        el.style.animationDelay = "0";
        j-=1;
    })
})
