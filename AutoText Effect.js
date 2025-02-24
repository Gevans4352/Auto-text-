const bodyEl = document.querySelector("body");
bodyEl.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style .left = xPos + "px";
    spanEl.style .top= yPos + "px";
    const size = Math.random()*100;
    spanEl.style.width = size + "px"
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
    spanEl.remove();
    }, 3000);
})

const career = ["Web developer", "Freelancer", "Polygot", "Engineer"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText(){
    characterIndex++
const containerEl = document.querySelector(".container");
containerEl.innerHTML =`<h1> I am ${career[careerIndex].slice(0,1)=== "I" ? "an" : "a" } ${career[careerIndex].slice(0,characterIndex)}</h1>`;
if (characterIndex > career[careerIndex].length){
careerIndex++
characterIndex = 0;
}
if(careerIndex === career.length){
careerIndex = 0;
}
setTimeout(updateText, 400);
}

