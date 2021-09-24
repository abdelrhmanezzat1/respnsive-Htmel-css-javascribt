let container = document.querySelector(".container");
let arry = [];

setInterval(() => {
    for (i = 1; i < 6; i++) {
        arry.push(`0${i}.svg`)
    }
    let antNum = Math.floor(Math.random() * arry.length);
    container.style.backgroundImage = 'url("imgs/' + arry[antNum] + ' ")'
}, 3000)

let icon = document.querySelector(" .navbar");
icon.addEventListener("click",()=>{
    icon.classList.toggle("active")
})
let enter = document.querySelector(".qq")
let icons = document.querySelector(".icons");
enter.addEventListener("click",()=>{
    icons.classList.toggle("active1")
})
let up = document.querySelector(".up");
window.onscroll = ()=>{
    this.scrollY>= 600 ? up.classList.add("show"):up.classList.remove("show");
}
up.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})