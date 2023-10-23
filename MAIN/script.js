function nextpage() {
  document.getElementById("RESUME").addEventListener("click", function () {
    document.querySelector(".container2").style.display = "none";
    document.getElementById("ResumeGen").style.display = "block";
  });
}
function addNewWeField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");
  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAqField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");
  aqOb.insertBefore(newNode, aqAddButtonOb);
}

//generating cv
function generateCV() {
  let nameField = document.getElementById("nameField").value;

  let nameT = document.getElementById("nameT");

  nameT.innerHTML = nameField;

  document.getElementById("nameT2").innerHTML = nameField;

  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  document.getElementById("fbT").innerHTML =
    document.getElementById("fbField").value;

  document.getElementById("instaT").innerHTML =
    document.getElementById("instaField").value;

  document.getElementById("linkedT").innerHTML =
    document.getElementById("inkedField").value;

  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  let wes = document.getElementsByClassName("weField");

  let str = "";

  for (let e of wes) {
    str = str + `<li>${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str;

  let aqs = document.getElementsByClassName("eqField");

  let str1 = "";

  for (let e of aqs) {
    str1 = str1 + `<li> ${e.value}</li>`;
  }
  document.getElementById("eqT").innerHTML = str1;

  let file = document.getElementById("imgfield").files[0];

  console.log(file);

  let reader = new FileReader();

  reader.readAsDataURL(file);

  console.log(reader.result);

  reader.onload = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

function printCV() {
  window.print();
}

function nextpage2() {
  document.querySelector(".container2").style.display = "none";
  document.getElementById("ResumeGen2").style.display = "block";
}

function generateCV2() {
  document.getElementById("nameT4").innerHTML =
    document.getElementById("nameField4").value;

  document.getElementById("nameT3").innerHTML =
    document.getElementById("nameField4").value;

  document.getElementById("contactT2").innerHTML =
    document.getElementById("contactField2").value;

  document.getElementById("addressT2").innerHTML =
    document.getElementById("addressField2").value;

  document.getElementById("fbT2").innerHTML =
    document.getElementById("fbField2").value;

  document.getElementById("instaT2").innerHTML =
    document.getElementById("instaField2").value;

  document.getElementById("inkedT2").innerHTML =
    document.getElementById("inkedField2").value;

  document.getElementById("objectiveT2").innerHTML =
    document.getElementById("objectiveField2").value;

  let wes = document.getElementsByClassName("weField2");

  let str = "";

  for (let e of wes) {
    str = str + `<li>${e.value}</li>`;
  }
  document.getElementById("weT2").innerHTML = str;

  let aqs = document.getElementsByClassName("eqField2");

  let str1 = "";

  for (let e of aqs) {
    str1 = str1 + `<li> ${e.value}</li>`;
  }
  document.getElementById("eqT2").innerHTML = str1;

  let file = document.getElementById("imgfield2").files[0];

  console.log(file);

  let reader = new FileReader();

  reader.readAsDataURL(file);

  console.log(reader.result);

  reader.onload = function () {
    document.getElementById("imgTemplate2").src = reader.result;
  };

  document.getElementById("cv-form2").style.display = "none";
  document.getElementById("cv-template2").style.display = "block";
}

function addNewWeField2() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField2");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we2");
  let weAddButtonOb = document.getElementById("weAddButton2");
  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAqField2() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField2");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq2");
  let aqAddButtonOb = document.getElementById("aqAddButton2");
  aqOb.insertBefore(newNode, aqAddButtonOb);
}

function nextpage3() {
  document.querySelector(".container2").style.display = "none";
  document.getElementById("ResumeGen3").style.display = "block";
}

function generateCV3() {
  document.getElementById("nameT5").innerHTML =
    document.getElementById("nameField5").value;

  document.getElementById("nameT4").innerHTML =
    document.getElementById("nameField5").value;

  document.getElementById("contactT3").innerHTML =
    document.getElementById("contactField3").value;

  document.getElementById("addressT3").innerHTML =
    document.getElementById("addressField3").value;

  document.getElementById("fbT3").innerHTML =
    document.getElementById("fbField3").value;

  document.getElementById("instaT3").innerHTML =
    document.getElementById("instaField3").value;

  document.getElementById("linkedT3").innerHTML =
    document.getElementById("inkedField3").value;

  document.getElementById("objectiveT3").innerHTML =
    document.getElementById("objectiveField3").value;

  let wes = document.getElementsByClassName("weField3");

  let str = "";

  for (let e of wes) {
    str = str + `<li>${e.value}</li>`;
  }
  document.getElementById("weT3").innerHTML = str;

  let aqs = document.getElementsByClassName("eqField3");

  let str1 = "";

  for (let e of aqs) {
    str1 = str1 + `<li> ${e.value}</li>`;
  }
  document.getElementById("eqT3").innerHTML = str1;

  let file = document.getElementById("imgfield3").files[0];

  console.log(file);

  let reader = new FileReader();

  reader.readAsDataURL(file);

  console.log(reader.result);

  reader.onload = function () {
    document.getElementById("imgTemplate3").src = reader.result;
  };

  document.getElementById("cv-form3").style.display = "none";
  document.getElementById("cv-template4").style.display = "block";
}

function addNewWeField3() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField3");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we3");
  let weAddButtonOb = document.getElementById("weAddButton3");
  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAqField3() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField3");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq3");
  let aqAddButtonOb = document.getElementById("aqAddButton3");
  aqOb.insertBefore(newNode, aqAddButtonOb);
}

function nextpage4() {
  document.querySelector(".container2").style.display = "none";
  document.getElementById("ResumeGen4").style.display = "block";
}

function generateCV4() {
  document.getElementById("nameT6").innerHTML =
    document.getElementById("nameField6").value;

  document.getElementById("nameT7").innerHTML =
    document.getElementById("nameField6").value;

  document.getElementById("contactT4").innerHTML =
    document.getElementById("contactField4").value;

  document.getElementById("addressT4").innerHTML =
    document.getElementById("addressField4").value;

  document.getElementById("fbT4").innerHTML =
    document.getElementById("fbField4").value;

  document.getElementById("instaT4").innerHTML =
    document.getElementById("instaField4").value;

  document.getElementById("linkedT4").innerHTML =
    document.getElementById("inkedField4").value;

  document.getElementById("objectiveT4").innerHTML =
    document.getElementById("objectiveField4").value;

  let wes = document.getElementsByClassName("weField4");

  let str = "";

  for (let e of wes) {
    str = str + `<li>${e.value}</li>`;
  }
  document.getElementById("weT4").innerHTML = str;

  let aqs = document.getElementsByClassName("eqField4");

  let str1 = "";

  for (let e of aqs) {
    str1 = str1 + `<li> ${e.value}</li>`;
  }
  document.getElementById("eqT4").innerHTML = str1;

  let file = document.getElementById("imgfield4").files[0];

  console.log(file);

  let reader = new FileReader();

  reader.readAsDataURL(file);

  console.log(reader.result);

  reader.onload = function () {
    document.getElementById("imgTemplate4").src = reader.result;
  };

  document.getElementById("cv-form4").style.display = "none";
  document.getElementById("cv-template5").style.display = "block";
}
function addNewWeField4() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField4");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we4");
  let weAddButtonOb = document.getElementById("weAddButton4");
  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAqField4() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField4");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq4");
  let aqAddButtonOb = document.getElementById("aqAddButton4");
  aqOb.insertBefore(newNode, aqAddButtonOb);
}
