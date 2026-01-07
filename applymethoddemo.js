//apply method
const studentInfo = {
  studentdetails: function (qualification, branch) {
    return (
      this.rollno + " " + this.studentname + " " + qualification + " " + branch
    );
  },
};
const student = {
  rollno: 1234,
  studentname: "namratha",
};
console.log(studentInfo.studentdetails.apply(student, ["b.tech", "cse"]));
