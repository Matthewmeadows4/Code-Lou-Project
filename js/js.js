function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Hey! Email field must be filled out");
      return false;
    }
  }