 { "name"; "Ім'я"; "surname" ; "Прізвище"; "age"; 20, "course"; 3, "faculty"; "Факультет", "courses"; ["Курс1", "Курс2"] }

const addStudentForm = document.getElementById('addStudentForm');
addStudentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(addStudentForm);
        const studentData = {};
        formData.forEach((value, key) => {
        studentData[key] = value;
 });
});

const studentsTable = document.getElementById('studentsTable');
function renderStudentsTable(students) {

studentsTable.innerHTML `<tr>Ім'я</th> <th>Прізвище</th> <th>Вік</th> <th>Курс</th> <th>Факультет</th> <th>Курси</th><th>Дії</th></tr>`;
students.forEach(student => {
const row = `<tr><td>${student.name}</td><td>${student.surname}</td><td>${student.age}</td><td>${student.course}</td><td>${student.faculty}</td><td>${student.courses.join(', ')}</td><td><button onclick="editStudent(${student.id})">Редагувати</button> <button onclick="deleteStudent(${student.id})">Видалити</button></td></tr>`;
studentsTable.innerHTML += row;
 });
}