const StudentService = require("./../services/StudentService")
const Reader = require ("./../utils/Reader")
class StudentsController{
    static get(){
        const studentsReader = Reader.readJsonFile("students.json");
        const studentsAll= StudentService.get(studentsReader);
        return studentsAll;
    }

    static getEmailWithCertification(){
        const students = Reader.readJsonFile("students.json");
        const studentsEmail = StudentService.getEmailWithCertification(students);
        return studentsEmail;
    }

    static getFilterGreatherThanCredit500(){
        const students = Reader.readJsonFile("students.json");
        const studentsEmail = StudentService.filterGreatherThanCredit500(students);
        return studentsEmail;
    }
}

module.exports = StudentsController