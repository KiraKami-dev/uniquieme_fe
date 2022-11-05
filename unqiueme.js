function showsocial() {
    var x = document.getElementById("socialextra1");
    var y = document.getElementById("socialextra2");
    var name = document.getElementById("socialbutton")
    if (x.style.display === "none" && y.style.display === "none") {
      x.style.display = "block";
      y.style.display = "block";
      name.innerHTML = "Show less";
    } else {
      x.style.display = "none";
      y.style.display = "none";
      name.innerHTML = "Show more";
    }
  }