var nameAndPass = [
  {
    name: "Bayraa",
    pass: "99334463",
  },
  {
    name: "Duluu",
    pass: "12345678",
  },
];

console.log(nameAndPass[0].name);

function check() {
  var User1 = document.getElementById("user").value;
  var Pass1 = document.getElementById("pass").value;
  for (var i = 0; i < nameAndPass.length; i++) {
    if (User1 === nameAndPass[i].name && Pass1 === nameAndPass[i].pass) {
      alert("Та амжилттай нэвтэрлээ");
    } else if (Pass1 !== nameAndPass[i].pass && User1 === nameAndPass[i].name) {
      alert("Wrong password");
    } else if (User1 !== nameAndPass[i].name && Pass1 === nameAndPass[i].pass) {
      alert("UserName олдохгүй байна");
    } else if (User1 !== nameAndPass[i].name && Pass1 !== nameAndPass[i].pass) {
      alert("UserName болон password буруу байна");
    }
  }
}

function goBack() {
  window.history.back();
}
