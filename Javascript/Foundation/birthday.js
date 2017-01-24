function Bday() {

  for (var i = 60; i > 0; i--) {
    if (i > 30) {
      console.log("Its" + i + "days till my Bday");
    }
    if (i < 30 && i>5) {
      console.log("Its close. Only" + i + "till my Bday")
    }

    if (i < 5) {
      console.log("Omg its" + i + " days away!")
    }

    if (i<=1) {
      console.log("Its my bday!")
      break;
    }
  }
}
Bday()
