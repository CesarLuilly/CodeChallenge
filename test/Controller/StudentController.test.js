const StudentsController = require("./../../app/controllers/StudentController")

test("Prueba unitaria para primer requerimiento, metodo que trae todos los estudiantes controller", () =>{
  const getStudents= StudentsController.get();
  expect(getStudents).not.toBeUndefined();
});

  test("Prueba unitaria segundo requrimiento getStudentsFilterEmail, controller ", () =>{
    const students = [{ email: "Cesar@visualpartnership.xyz",haveCertification: true}];
    const getStudents= StudentsController.getEmailWithCertification();
    expect(getStudents).not.toBeUndefined();
  });

  test("Prueba unitaria para 3er requerimiento endpoint para consultar todos los estudiantes con todos sus campos, controller ", ()=>{
    const students= [{ email: "Cesar@visualpartnership.xyz",haveCertification: true}];
    const getStudents = StudentsController.getFilterGreatherThanCredit500();
    expect(getStudents.length).not.toBeUndefined();
});