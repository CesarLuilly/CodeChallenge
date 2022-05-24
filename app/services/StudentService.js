class StudentService {
    static get(students){
        return students.map(studentItem => studentItem);
    }

    static getEmailWithCertification(students){
        return students.filter(studentItem =>
            studentItem.haveCertification === true)
            .map(studentItem => studentItem.email);
    }

    static filterGreatherThanCredit500(students){
        return students.filter(studentItem => studentItem.credits > 500);
    }
}

module.exports = StudentService;