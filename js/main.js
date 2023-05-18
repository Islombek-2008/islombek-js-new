let body = document.getElementById("body");

let allbtn = document.getElementById("all");
let htmlbtn = document.getElementById("html");
let javaScriptbtn = document.getElementById("javaScript");
let vuebtn = document.getElementById("VueJs");
let githubbtn = document.getElementById("GitHub");
let dark = document.getElementById("dark");
let light = document.getElementById("light");
let htmldiv = document.getElementById("html-css");
let javaScriptdiv = document.getElementById("javaScriptdiv");
let vuediv = document.getElementById("vuediv");
let githubdiv = document.getElementById("githubdiv");
let desktop = document.getElementById("desktop");

dark.addEventListener("click", function () {
  body.style.background = "black";
  body.style.color = "white";
  dark.style.display = "none";
  light.style.display = "block";
  light.style.color = "white"
  desktop.style.background = "black";
  dark.style.border = "none";
  dark.style.background = "white";
});

light.addEventListener("click", function () {
  body.style.background = "white";
  body.style.color = "black";
  dark.style.display = "block";
  light.style.display = "none";
  desktop.style.background = "white";
  light.style.border = "none";
  light.style.background = "black";
  light.style.color = "white";
});

allbtn.addEventListener("click", function () {
  htmldiv.style.display = "block";
  javaScriptdiv.style.display = "block";
  vuediv.style.display = "block";
  githubdiv.style.display = "block";
});

htmlbtn.addEventListener("click", function () {
  htmldiv.style.display = "block";
  javaScriptdiv.style.display = "none";
  vuediv.style.display = "none";
  githubdiv.style.display = "none";
});

javaScriptbtn.addEventListener("click", function () {
  htmldiv.style.display = "none";
  javaScriptdiv.style.display = "block";
  vuediv.style.display = "none";
  githubdiv.style.display = "none";
});

vuebtn.addEventListener("click", function () {
  htmldiv.style.display = "none";
  javaScriptdiv.style.display = "none";
  vuediv.style.display = "block";
  githubdiv.style.display = "none";
});

githubbtn.addEventListener("click", function () {
  htmldiv.style.display = "none";
  javaScriptdiv.style.display = "none";
  vuediv.style.display = "none";
  githubdiv.style.display = "block";
});
