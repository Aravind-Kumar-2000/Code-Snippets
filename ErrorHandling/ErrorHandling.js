function studentMarks() {
    const marks = document.getElementById("numb").value;
    try {
      if (marks == "") {
        throw document.getElementById("msg").innerHTML = "This field is required!";
      }
      if (marks < 100) {
        throw document.getElementById("msg").innerHTML = "Candidate Failed!";
      }
      if (marks > 100 && marks <= 449) {
        console.log(document.getElementById("msg").innerHTML = "Candidate passed");
      }
      if (marks > 500) {
        throw document.getElementById("msg").innerHTML = "Please enter a value out of 500";
      }
      if (marks >= 480 && marks <= 500) {
        console.log(document.getElementById("msg").innerHTML = "Candidate passed with First Class"); 
      }
      if (marks >= 450 && marks <= 480) {
        console.log(document.getElementById("msg").innerHTML = "Candidate passed with Distinction");
      }
      if (marks == isNaN) {
        throw document.getElementById("msg").innerHTML = "Please enter a valid input";
      }
    } catch (error) {
        console.error(error);
    }
}