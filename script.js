const svg = document.getElementById("Frame 1");

svg.onclick = (e) => {
  const colors = ["black", "blue", "green", "orange", "pink", "purple", "white"]
  const random = () => colors[Math.floor(Math.random() * colors.length)];
  document.documentElement.style.cssText = `
  --dark: ${random()};
  --light: ${random()};`
}
