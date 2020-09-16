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

function check() {
  var User1 = document.getElementById("user").value;
  var Pass1 = document.getElementById("pass").value;
  for (var i = 0; i < nameAndPass.length; i++) {
    console.log(nameAndPass[i]);
    if (User1 === nameAndPass[i].name && Pass1 === nameAndPass[i].pass) {
      alert("Та амжилттай нэвтэрлээ");
      break;
    } else if (User1 === nameAndPass[1].name && Pass1 === nameAndPass[1].pass) {
      alert("Та амжилттай нэвтэрлээ");
      break;
    } else if (Pass1 !== nameAndPass[i].pass && User1 === nameAndPass[i].name) {
      alert("Wrong password");
      break;
    } else if (Pass1 !== nameAndPass[1].pass && User1 === nameAndPass[1].name) {
      alert("Wrong password");
      break;
    } else if (User1 !== nameAndPass[i].name && Pass1 === nameAndPass[i].pass) {
      alert("UserName олдохгүй байна");
      break;
    } else if (User1 !== nameAndPass[i].name && Pass1 === nameAndPass[i].pass) {
      alert("UserName олдохгүй байна");
      break;
    } else if (User1 !== nameAndPass[i].name && Pass1 !== nameAndPass[i].pass) {
      alert("UserName болон password буруу байна");
      break;
    }
  }
}

function goBack() {
  window.history.back();
}
