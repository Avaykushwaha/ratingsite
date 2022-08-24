let value = 0;
function submit(shown, hidden) {
  document.getElementById(shown).style.display = "block";
  document.getElementById(hidden).style.display = "none";
  document.getElementById("rate").innerHTML = value;

  return false;
}

const btn = document.getElementsByClassName("btn");

for (curr of btn) {
  console.log(curr);
  curr.addEventListener("click", (e) => {
    value = e.target.innerHTML;
    console.log(value);
  });
}
console.log(btn);
