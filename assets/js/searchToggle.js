var x = document.getElementById("search-hide");
var z = document.getElementById("search-toggle");
var a = document.getElementById("close");
function searchToggle() {
  if (x.style.left === "-100px" && x.style.width === "100px") {
    x.style.left = "0px";
    x.style.width = "100%";
    x.style.visibility = "visible";
    z.style.transform = "scale(0.1)";
    z.style.visibility = "hidden";
    a.style.visibility = "visible";
    a.style.transform = "scale(1.4)";
  } else {
    x.style.left = "-100px";
    x.style.width= "100px";
    x.style.visibility = "hidden";
    z.style.transform = "scale(1)";
    z.style.visibility = "visible";
    a.style.visibility = "hidden";
    a.style.transform = "scale(0.1)";
  }
}
function closeToggle(){
if (x.style.left === "0px" && x.style.width === "100%"){
    x.style.left = "-100px";
    x.style.width= "100px";
    x.style.visibility = "hidden";
    z.style.transform = "scale(1)";
    z.style.visibility = "visible";
    a.style.visibility = "hidden";
    a.style.transform = "scale(0.1)";
}else{
    x.style.left = "0px";
    x.style.width = "100%";
    x.style.visibility = "visible";
    z.style.transform = "scale(0.1)";
    z.style.visibility = "hidden";
    a.style.visibility = "visible";
    a.style.transform = "scale(1.4)";
}
}