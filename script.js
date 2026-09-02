const skills = ["Bash", "Linux", "Python"];

let output = "";

for (let i = 0; i < skills.length; i++) {
    output += skills[i];

    if (i < skills.length - 1) {
        output += ", ";
    }
}

if (skills.length > 2) {
    output += " (experienced)";
} else {
    output += " (beginner)";
}

document.getElementById("output").textContent = output;
