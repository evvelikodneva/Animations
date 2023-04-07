const loaders = document.querySelectorAll(".loader-container");
let i = 0;
let j = 0;
window.addEventListener("click",()=>{
    loaders[i].classList.add("hidden");
    i+1 == loaders.length ? i = 0 : i+=1;
    loaders[i].classList.remove("hidden");
    i == 3 ? (j = 0, timeout()) : 0;

})
// circle loading
const circleLoad = document.querySelector("circle");
function timeout(){
    let timeIsOut;
    j < 101 ? timeIsOut = setTimeout(()=>{
        let first = j*Math.PI + ' ' + (100 - j) * Math.PI;
        console.log(j);
        circleLoad.style.strokeDasharray = first;
        j += 1;
        timeout()},100) : 0;
}