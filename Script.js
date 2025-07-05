const students = [];

document.getElementById("addBtn").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const marks = Number(document.getElementById("marks").value);

  if (name && !isNaN(marks)) {
    const grade = getGrade(marks);

    const student = {
      name,
      marks,
      grade
    };

    students.push(student);
    renderStudents();
  }
});

function getGrade(marks) {
  if (marks >= 80) return "A";
  if (marks >= 60) return "B";
  if (marks >= 40) return "C";
  return "D";
}

function renderStudents() {
  const container = document.getElementById("students");
  container.innerHTML = "";

  students.forEach((student, index) => {
    const div = document.createElement("div");
    div.className = "student";
    div.innerHTML = `
      <strong>${student.name}</strong> - ${student.marks} Marks - Grade: ${student.grade}
      <button onclick="deleteStudent(${index})">Delete</button>
    `;
    container.appendChild(div);
  });
}

function deleteStudent(index) {
  students.splice(index, 1);
  renderStudents();
}

document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
