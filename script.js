/*jshint esversion: 6 */ 


function idCard() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let address = document.getElementById("address").value;

  document.getElementById("postFullName").innerHTML =  firstName + " " + lastName;
  document.getElementById("postAddress").innerHTML = address;

  let age = parseInt(document.getElementById("age").value);
  let phoneNumber = parseInt(document.getElementById("phoneNumber").value);

  let numberArray = [];
  numberArray.push(age);
  numberArray.push(phoneNumber);

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] <= 100) {
      document.getElementById("postAge").innerHTML = "Age: " + age;
    } else if (numberArray[i] > 100) {
      document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
    }
  }
}

