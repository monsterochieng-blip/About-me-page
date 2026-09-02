const skills = ["Bash", "Linux", "Python"];

for (let i = 0; i < skills.length; i++) {
console.log(skills[i]);
}
let result;
if (skills.length > 2) {
result = "experienced"
} else {
result = "beginner"
}
document.getElementById"output").textContent = result
