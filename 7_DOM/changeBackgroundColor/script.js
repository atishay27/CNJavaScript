function changeBackgroundColor(selector) {
  //Implement your function here
  const els = document.querySelectorAll(selector);
  for (el of els) {
    el.style.backgroundColor = "yellow";
  }
}

changeBackgroundColor(".my-class");
changeBackgroundColor("#my-id");
changeBackgroundColor("button");
