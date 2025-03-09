const body = document.querySelector("body");

body.addEventListener("mousemove", (event) => {
   createHeart(event.offsetX, event.offsetY);
});

body.addEventListener("touchstart", handleTouch, {passive: false});
body.addEventListener("touchmove", handleTouch, {passive: false});

function handleTouch(event) {
   event.preventDefault();
   
   const touch = event.touches[0];

   const rect = body.getBoundingClientRect();
   const touchX = touch.clientX - rect.left;
   const touchY = touch.clientY - rect.top;
   
   createHeart(touchX, touchY);
}

function createHeart(x, y) {
   const spanElement = document.createElement("span");
   spanElement.style.left = x + "px";
   spanElement.style.top = y + "px";
   body.appendChild(spanElement);
   
   const size = Math.random() * 100;
   spanElement.style.width = size + "px";
   spanElement.style.height = size + "px";

   setTimeout(() => {
      spanElement.remove();
   }, 3000);
}