const btn = document.getElementById("btn");
const heading = document.getElementById("heading");
const  getRandonColor = ()=>{
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomNumber,randomCode);
    document.body.style.backgroundColor = randomCode;
    heading.innerText = randomCode;
}
//event call
btn.addEventListener("click", getRandonColor);

//initial call
getRandonColor()