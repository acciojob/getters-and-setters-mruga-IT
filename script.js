//complete this code
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  study() {
    console.log(this._name + " is studying");
  }
}

class Teacher extends Person {
  teach() {
    console.log(this._name + " is teaching");
  }
}

const personButton = document.getElementById("personButton");
personButton.addEventListener("click", () => {
  const name = document.getElementById("personName").value;
  const age = document.getElementById("personAge").value;
  const person = new Person(name, age);
  console.log(person);
});

const studentButton = document.getElementById("studentButton");
studentButton.addEventListener("click", () => {
  const name = document.getElementById("studentName").value;
  const age = document.getElementById("studentAge").value;
  const student = new Student(name, age);
  console.log(student);
  student.study();
});

const teacherButton = document.getElementById("teacherButton");
teacherButton.addEventListener("click", () => {
  const name = document.getElementById("teacherName").value;
  const age = document.getElementById("teacherAge").value;
  const teacher = new Teacher(name, age);
  console.log(teacher);
  teacher.teach();
});

class Person {}

class Student extends Person {}

class Teacher extends Person {}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
