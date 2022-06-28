function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Hey! The form must be filled out!");
      return false;
    }
  }