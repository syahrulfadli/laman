var x = document.getElementById("search-hide");
var z = document.getElementById("search-toggle");
var a = document.getElementById("close");
function searchToggle() {
  if (x.style.opacity === "0") {
    x.style.opacity = "1";
    x.style.visibility = "visible";
    x.style.transform = "scale(1)";
    z.style.transform = "scale(0.1)";
    z.style.visibility = "hidden";
    a.style.visibility = "visible";
    a.style.transform = "scale(1.4)";

  } else {
    x.style.opacity = "0";
    x.style.visibility = "hidden";
    x.style.transform = "scale(0.1)";
    z.style.transform = "scale(1)";
    z.style.visibility = "visible";
    a.style.visibility = "hidden";
    a.style.transform = "scale(0.1)";
  }
}
function closeToggle(){
if (x.style.opacity === "1"){
    x.style.opacity = "0";
    x.style.visibility = "hidden";
    x.style.transform = "scale(0.1)";
    z.style.transform = "scale(1)";
    z.style.visibility = "visible";
    a.style.visibility = "hidden";
    a.style.transform = "scale(0.1)";
}else{
    x.style.opacity = "1";
    x.style.visibility = "visible";
    z.style.transform = "scale(0.1)";
    x.style.transform = "scale(1)";
    z.style.visibility = "hidden";
    a.style.visibility = "visible";
    a.style.transform = "scale(1.4)";
}
}