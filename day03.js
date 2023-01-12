//question 1:

///for loop///

var student = {
  "name" : "Naveen",
  "age" : "28",
  "mail" : "naveensrpce@gmail.com",
  "address" : "tvm"
}
student.attendance = ["monday","tuesday","wednesday"]

  for(var i=0; i<student.attendance.length; i++){
    console.log(student.attendance[i]);
  }

  output:
monday
tuesday
wednesday

///for in loop///

var student = {
  "name" : "Naveen",
  "age" : "28",
  "mail" : "naveensrpce@gmail.com",
  "address" : "tvm"
}
  
  for(var i in student){
    console.log(i)
  }

  output:

name
age
mail
address

/*
till today they didn't teach about other two loop.. thats why i skit it
*/ 

//question 2:

var resume = [{
  "NAME" : "Naveen","AGE" : "28","10th" : "75%", "12th":"68%", "DEGREE" : "B.E","MAIL" : "naveensrpce@gmail.com",
  "ADDRESS" : "tvm","CONTACT" : "8610121637", "EXPERIANCE" : "-", "COURSE" : "Persuring Full Stack Developer"}]

  for(var i=0; i<resume.length; i++){
    console.log(resume[i]);
  }

  output:

  { NAME: 'Naveen',
  AGE: '28',
  '10th': '75%',
  '12th': '68%',
  DEGREE: 'B.E',
  MAIL: 'naveensrpce@gmail.com',
  ADDRESS: 'tvm',
  CONTACT: '8610121637',
  EXPERIANCE: '-',
  COURSE: 'Persuring Full Stack Developer' }