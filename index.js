const body=document.getElementsByTagName("body")[0];
console.log(body.children);
// const head=document.getElementsByClassName("togle");
// console.log(head);
const header=Array.from(document.getElementsByClassName("togle"));
console.log(header);
header.map(item=>{
    item.firstElementChild.addEventListener("click",e=>{
       e.target.nextElementSibling.classList.toggle("hide");
    })
})




const video=document.getElementById("video");

const btn=document.getElementById("btn");
btn.addEventListener("click",e=>{
    e.target.innerHTML="song";
    btn.style.backgroundColor="yellow";
   btn.style.color="red";
 video.classList.toggle("videoHide");
   
})
const upper=document.createElement("div");
body.insertBefore(upper,body.children[0]);
upper.classList.add("upper");

const righter=document.createElement("div");
body.insertBefore(righter,upper);
righter.classList.add("righter");

const click=document.createElement("button");
click.classList.add("click");
click.innerHTML="click";
body.insertBefore(click,body.children[0]);

click.addEventListener("click",e=>{
righter.classList.toggle("right");
upper.classList.toggle("up");
})



