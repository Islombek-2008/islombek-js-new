let allbtn = document.getElementById("all");
let htmlbtn = document.getElementById("html");
let javaScriptbtn = document.getElementById("javaScript");
let vuebtn = document.getElementById("VueJs");
let githubbtn = document.getElementById("GitHub");
let htmldiv = document.getElementById("html-css");
let javaScriptdiv = document.getElementById("javaScriptdiv");
let vuediv = document.getElementById("vuediv");
let githubdiv = document.getElementById("githubdiv");

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
