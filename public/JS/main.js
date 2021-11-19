document.onclick = (e) => {
  // when a key is pressed, remove all previously active keys css
  keys = document.querySelector(".active");
  if (keys != null) keys.classList.remove("active");

  const audio = e.target.children[0];
  audio.currentTime = 0;
  audio.play();

  e.target.classList.add("active");

  // when the audio ends, remove the active key css
  audio.addEventListener("ended", () => {
    e.target.classList.remove("active");
  });
};
