let count = 0;
const number = document.getElementById("count");
const plus =
document.getElementById("plus");
const min =
document.getElementById("min");
const reset = 
document.getElementById("reset");
function updatecolor() {
  if(count>0) {
    number.style.color ="green";
  } else if (count < 0) {
    number.style.color ="red";
  }else if ("black") {
    number.style.color ="black"; 
}
}
plus.addEventListener("click" , () => { count++;
    number.textContent = count;
    updatecolor();
});

min.addEventListener("click", () => {
  count--;
    number.textContent = count;
     updatecolor();
});
reset.addEventListener("click", () => {
  count = 0;
    number.textContent = count;
     updatecolor();
  })



