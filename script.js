const button = document.querySelector("button");
const body = document.querySelector("body");

body.style.backgroundColor = "blue";
colors = ["red", "skyblue", "orange","yellow","green","pink"]

button.addEventListener('click', handleClick);

function handleClick (){
    const random_color = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[random_color];

}
