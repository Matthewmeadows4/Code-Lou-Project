

function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
     alert("Hey! Email field must be filled out");
      return false;}
    }
    function submitForm() {
      let name = document.getElementById("fname").value;
      alert(`Thanks, ${name}! I will be getting back to you!`);
    }