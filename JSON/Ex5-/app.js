const userList = document.getElementById("first-block-posts");
const salaryList = document.getElementById("salary");
const user = [...new Array(1)].map((_, index) => ({
  id: index,
  fullName: ["Manoli", "Alexandru", "Mihai"],
  birthday: "17.10.2000",
  phoneNumber: 37360637718,
  adddress: "str.Bulgara 166",
  email: "sasha-manoli@mail.ru",
  gender: "male",
  job: "web developer",
  startWorkData: "01.02.2020",
  IDNP: 1586985469853,
  salary: "8454 лей",
  placeOfBirth: "Balti",
  workExperience: "2 года",
  department: "Js develper",
  homePhoneNumber: "025235518",
  workSchedule: ["8:00 - 17:00", "12:00 - 13:00"],
}));
let salaryAverage = null;
let minSalary = 0;
let maxSalary = 0;
console.log(user);

user.forEach((user) => {
  userList.innerHTML += `
    <li class="post">
    <h1>${user.fullName.join(" ")}</h1>
    <h2>${user.birthday}</h2>
    <p>${user.phoneNumber}</p>
    <p>${user.adddress}</p>
    <p>${user.email}</p>
    <p>${user.gender}</p>
    <p>${user.job}</p>
    <p>${user.startWorkData}</p>
    <p>${user.IDNP}</p>
    <p>${user.salary}</p>
    <p>${user.placeOfBirth}</p>
    <p>${user.workExperience}</p>
    <p>${user.department}</p>
    <p>${user.homePhoneNumber}</p>
    <p>${user.workSchedule.join(" | ")}</p>
  </li>
  `;

  salaryList.innerHTML += `
  <h1>${user.fullName.join(" ")}</h1>
  <p>${user.salary}</p>
  `;

  const salary = Number(user.salary);
  salaryAverage += salary;

  if (minSalary > salary) {
    minSalary = salary;
  }
  if (maxSalary < salary) {
    maxSalary = salary;
  }
});
console.log(salaryAverage);
console.log(salaryAverage / user.length);
console.log(minSalary);
console.log(maxSalary);
