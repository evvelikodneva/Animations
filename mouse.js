// const hii = document.querySelector(".hii");
let prevX = 0;
let deltaX = 0;
let prevY = 0;
let deltaY = 0;
function plusMinus(){
    return Math.floor(Math.random()*3)%2 == 1 ? true : false;
}
document.addEventListener("mousemove",(event)=>{
    deltaX = event.clientX - prevX;
    prevX = event.clientX;
    deltaY = event.clientY - prevY;
    prevY = event.clientY;
    for(let i = 0; i < 10; i++){
        let div = document.createElement("div");
        div.classList.add("anim");
        div.style.height = Math.random() * 3 + "px";
        div.style.width = Math.random() * 3 + "px";
        let left;
        let top;
        if(Math.abs(deltaX) > Math.abs(deltaY)){
            if(deltaX > 0){
                left = event.clientX - Math.random()*100;
                if(deltaY > 0){
                    top = event.clientY - Math.random()*50;
                }
                else if(deltaY < 0){
                    top = event.clientY + Math.random()*50;
                }
                else{
                    plusMinus() ? top = event.clientY - Math.random()*50 : top = event.clientY + Math.random()*50;
                }
            }
            else if(deltaX < 0){
                left = event.clientX + Math.random()*100;
                if(deltaY > 0){
                    top = event.clientY - Math.random()*50;
                }
                else if(deltaY < 0){
                    top = event.clientY + Math.random()*50;
                }
                else{
                    plusMinus() ? top = event.clientY - Math.random()*50 : top = event.clientY + Math.random()*50;
                }
            }
            else{
                let plusminus = plusMinus();
                if(plusminus){
                    left = event.clientX + Math.random()*100;
                }
                else{
                    left = event.clientX - Math.random()*100;
                }
                if(deltaY >= 0){
                    top = event.clientY - Math.random()*50;
                }
                else{
                    top = event.clientY + Math.random()*50;
                }
            }
        }
        else{
            if(deltaX > 0){
                left = event.clientX - Math.random()*50;
                if(deltaY >= 0){
                    top = event.clientY - Math.random()*100;
                }
                else{
                    top = event.clientY + Math.random()*100;
                }
            }
            else if(deltaX < 0){
                left = event.clientX + Math.random()*50;
                if(deltaY >= 0){
                    top = event.clientY - Math.random()*100;
                }
                else{
                    top = event.clientY + Math.random()*100;
                }
            }
            else{
                let plusminus = Math.floor(Math.random()*3)%2;
                if(plusminus == 1){
                    left = event.clientX + Math.random()*50;
                }
                else{
                    left = event.clientX - Math.random()*50;
                }
                if(deltaY >= 0){
                    top = event.clientY - Math.random()*100;
                }
                else{
                    top = event.clientY + Math.random()*100;
                }
            }
        }
        div.style.left = left + "px";
        div.style.top = top + "px";
        document.body.appendChild(div);
        setTimeout(animate, 10, div, left, top);
        setTimeout(deleteFunc, 400, div);
    }
    // hii.style.left = event.clientX + "px";
    // hii.style.top = event.clientY + "px";
})
function animate(elem, x, y){
    elem.style.opacity = 1;
    elem.style.left = x - deltaX * Math.random()*70 + "px";
    elem.style.top = y - deltaY * Math.random()*70 + "px";
    elem.style.height = Math.random()*5 + "px";
    elem.style.width = Math.random()*5 + "px";
    elem.style.transition = "all 2s linear";
}
function deleteFunc(elem){
    document.body.removeChild(elem)
}