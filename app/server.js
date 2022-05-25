const StudentsController = require("./controllers/StudentController");
const express= require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/v1/students/all", (request, response) => {
    const studentsAll = StudentsController.get();
    response.json(studentsAll);
});

app.get("/v1/students/Email/emailWithCertification", (request, response) => {
    const studentsHaveCertification = StudentsController.getEmailWithCertification();
    response.json(studentsHaveCertification);
});


app.get("/v1/students/creditGreatherThan500", (request, response) => {
    const studentsCredits = StudentsController.getFilterGreatherThanCredit500();
    response.json(studentsCredits);
});

app.listen(port, () => {
    console.log(`Students API in localhost:${port}`);
});