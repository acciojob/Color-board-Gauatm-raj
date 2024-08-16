//your JS code here. If required.
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

const cont  = document.getElementById("container");

//const sq = 800;
for(let i=0;i<800;i++){
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover",()=> setColor(square));
    square.addEventListener("mouseout",()=> removeColor(square));

    cont.appendChild(square);
}
function setColor(element){
    const color = randomColor()

    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(element){
    element.style.background = "#1d1d1d"
    element.style.boxShadow = "0 0 2px #000"
}
function randomColor(){
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}