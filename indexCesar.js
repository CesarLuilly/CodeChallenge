const StudentsController = require("./app/controllers/StudentController")
const getStudents= StudentsController.get();
expect(getStudents).not.toBeUndefined();
console.log(getStudents);

