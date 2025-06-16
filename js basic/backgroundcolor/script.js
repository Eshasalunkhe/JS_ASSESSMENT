
const colors = ['red', 'green', 'blue', 'purple', 'orange', 'brown', 'teal', 'pink', 'maroon', 'navy','peachpurple'];

function changeColor() {
  
  const text = document.getElementById('text');
  
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  text.style.color = randomColor;
}
