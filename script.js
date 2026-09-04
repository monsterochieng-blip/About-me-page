const skills = ["Bash", "Linux", "Python"];

for (let i = 0; i < skills.length; i++) {
console.log(skills[i]);
}
let result;
if (skills.length > 2) {
result = "experience"
} else {
result = "beginner";
}
document.getElementById("output").textContent = result;
const btn = document.querySelector("#toggleBtn");
btn.addEventListener("click", function() {
document.querySelector(".skills").classList.toggle("highlight"); });
list = skills.join(", ")
async function loadRepoCount() {
  const response = await fetch("https://api.github.com/users/monsterochieng-blip");
  const data = await response.json();
  document.getElementById("repo-count").textContent = "Public repos: " + data.public_repos;
}
loadRepoCount();


