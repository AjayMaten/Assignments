let count = 0;
let count1 = 0;
let value = document.querySelector("#value");

function Plus() {
  count = count + 1;
  value.innerHTML = count;
}
function Minus() {
  count = count - 1;
  value.innerHTML = count;
}

function Reset() {
  count = 0;
  value.innerHTML = count;
}
