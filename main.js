let count = 0;
const number = document.getElementById("count");
const plus =
document.getElementById("plus");
const min =
document.getElementById("min");
const reset = 
document.getElementById("reset");
plus.addEventListener("click" , () => { count++;
    number.textContent = count;
});

min.addEventListener("click", () => {
  count--;
    number.textContent = count;
});
reset.addEventListener("click", () => {
  count = 0;
    number.textContent = count;})



