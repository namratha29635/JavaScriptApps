function validate() {
  let uname = document.getElementById("username").value;
  let pswd = document.getElementById("pswd").value;
  let confpswd = document.getElementById("confirm_pswd").value;
  let mobile = document.getElementById("mobile_no").value;
  let mailid = document.getElementById("email").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let dob = document.getElementById("dob").value;
  let address = document.getElementById("address").value;
  let qualification = document.getElementById("qualification").value;
  let skills = document.getElementById("skills").value;
  let shift = document.querySelectorAll('input[name="shift"]:checked');
  let resume = document.getElementById("resume").value;

  let regexp = /^(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
  let mobileRegex = /^[0-9]{10}$/;

  if (uname === "") return alert("Please enter username"), false;
  if (!regexp.test(pswd))
    return alert("Password must be 8–12 chars with upper & lower case"), false;
  if (pswd !== confpswd) return alert("Passwords do not match"), false;
  if (!gender) return alert("Please select gender"), false;
  if (!mobileRegex.test(mobile))
    return alert("Mobile number must be 10 digits"), false;
  if (!mailid.includes("@") || !mailid.includes("."))
    return alert("Enter valid email"), false;
  if (dob === "") return alert("Select DOB"), false;
  if (address === "") return alert("Enter address"), false;
  if (qualification === "") return alert("Select qualification"), false;
  if (skills === "") return alert("Select skill"), false;
  if (shift.length === 0) return alert("Select preferred shift"), false;
  if (resume === "") return alert("Upload resume"), false;

  return true;
}
