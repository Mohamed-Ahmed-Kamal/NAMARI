let btn_open = document.getElementById("open");
let btn_close = document.getElementById("close");
let bar = document.getElementById("sid");

btn_open.onclick = function open() {
  bar.style.opacity = ".9";
  btn_open.style.opacity = "0";
  btn_close.style.left = "0";
  console.log("sd;fjasdkfh");
};


btn_close.onclick = function close() {
  bar.style.opacity = "0";
  btn_open.style.opacity = "1";
  btn_close.style.left = "-1000px";
};
