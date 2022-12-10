"use strict";
let val1 = 0;
let val2 = 0;
let action = "";
let result = 0;

function add() {
  val1 = +document.getElementById("num").value;
  action = "+";
}
function sub() {
  val1 = +document.getElementById("num").value;
  action = "-";
}
function mult() {
  val1 = +document.getElementById("num").value;
  action = "*";
}
function div() {
  val1 = +document.getElementById("num").value;
  action = "/";
}
function calc() {
  val2 = +document.getElementById("num").value;
  let expr = val1 + action + val2;
  let res1 = eval(expr);
  document.getElementById("num").value = res1;
}

plus.addEventListener("click", add);
minus.addEventListener("click", sub);
multiply.addEventListener("click", mult);
division.addEventListener("click", div);
equals.addEventListener("click", calc);
