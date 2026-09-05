const skills = Array.from(document.querySelectorAll(".skills li")).map(li => li.textContent);
let result;
if (skills.length > 2) {
result = "(experienced)"
} else {
result = "(beginner)";
}
document.getElementById("output").textContent = skills.join(", ") + " " +result;
const btn = document.querySelector("#toggleBtn");
btn.addEventListener("click", function() {
document.querySelector(".skills").classList.toggle("highlight"); });
async function loadRepoCount() {
  const response = await fetch("https://api.github.com/users/monsterochieng-blip");
  const data = await response.json();
  document.getElementById("repo-count").textContent = "Public repos: " + data.public_repos;
}
loadRepoCount();


