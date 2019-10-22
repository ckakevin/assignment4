var el = document.getElementById('text');

el.addEventListener("mouseover", ChangeTextPos);
el.addEventListener("mouseup", ChangeTextPos);

function ChangeTextPos(){
  el.style.left = "100px";
}
