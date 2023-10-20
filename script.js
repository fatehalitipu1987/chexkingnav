let menubox =document.querySelector(".menu-box");
let menuicon =document.querySelector(".menu");

menuicon.addEventListener("click" , function(){
      menubox.classList.toggle("active");

      if(menubox.classList.contains("active")){
      menuicon.src ="data:image/png;base64,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";
      }else{
menuicon.src ="https://cdn4.iconfinder.com/data/icons/simplicity-1/48/menu-512.png";
      }
});

var main =document.querySelector("body");
var crsr =document.querySelector(".mf");
var logoheading =document.querySelector(".navh2");
var logolink =document.querySelector(".navlink");
main.addEventListener("mousemove" , function(dets){
        crsr.style.left = dets.x+="px";
        crsr.style.top = dets.y+="px";
});
logoheading.addEventListener("mouseenter" , function(){
    crsr.style.height = "60px";
    crsr.style.width = "60px";
    crsr.style.background = "transparent";
    crsr.style.border = "1px solid black";
})
logoheading.addEventListener("mouseleave" , function(){
    crsr.style.height = "10px";
    crsr.style.width = "10px";
    crsr.style.background = "#111";
    crsr.style.border = "none";
})
logolink.addEventListener("mouseenter" , function(){
    crsr.style.height = "60px";
    crsr.style.width = "60px";
    crsr.style.background = "transparent";
    crsr.style.border = "1px solid black";
})
logolink.addEventListener("mouseleave" , function(){
    crsr.style.height = "10px";
    crsr.style.width = "10px";
    crsr.style.background = "#111";
    crsr.style.border = "none";
})


