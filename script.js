import Citizen from "./citizen.js";
import Adress from "./adress.js";

document.getElementById("buttonClick").onclick = () => {
  document.getElementById("funcDrop").classList.toggle("show");
};


// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    let iDropdown = document.getElementById("funcDrop");
    if (iDropdown.classList.contains('show')) {
      iDropdown.classList.remove('show');
    }
  }
}

let divMain = document.createElement('main');
let divHeader = document.querySelector("header");
divHeader.after(divMain);

let divButton = document.createElement('button');
divButton.type = "button";
divButton.innerHTML = "Create";
divButton.addEventListener("click", clickCreate);
divButton.id = "butCreate";
divMain.append(divButton);


function clickCreate() {
  document.getElementById("butCreate").style.display = 'none';
  const markupForm1 = () => {
    return `<input type="text" class="person" id="fnid" name="firstName" placeholder="First Name" required pattern="[A-Za-z]+" title="Only letters"><span class="validity"></span><br><br>
    <input type="text" class="person" id="lnid" name="lastName" placeholder="Last Name" required pattern="[A-Za-z]+" title="Only letters"><span class="validity"></span><br><br>
    <input type="number" min="1" max="120" class="person" id="ageid" name="age" placeholder="Age" required><span class="validity"></span><br><br>
    `;
  };
  let tempDiv = document.createElement("form");
  tempDiv.innerHTML = markupForm1();
  divMain.append(tempDiv);

  let divButton2 = document.createElement('button');
  divButton2.type = "submit";
  divButton2.innerHTML = "Create citizen";
  divButton2.addEventListener("click", clickCreateCitizen);
  divButton2.id = "butCreateCitizen";
  document.querySelector("form").append(divButton2);
};

function clickCreateCitizen() {
  //  if (!(document.getElementById("fnid").checkValidity() & document.getElementById("lnid").checkValidity() & document.getElementById("ageid").checkValidity())) {
  if (document.querySelector("form").checkValidity() == false) {
    return;
  }
  const citizen1 = new Citizen(document.getElementById("fnid").value, document.getElementById("lnid").value, document.getElementById("ageid").value, false);
  let divp = document.createElement('p');
  divp.innerHTML = `Citizen: ${citizen1.firstName} ${citizen1.lastName}`;
  divp.id = "infoCitizen";
  divMain.append(divp);
  const markupForm2 = () => {
    return `<input type="text" class="adr" id="countryid" name="country" placeholder="Country" required pattern="[A-Za-z]+" title="Only letters"><span class="validity"></span><br><br>
    <input type="text" class="adr" id="cityid" name="city" placeholder="City" required pattern="[A-Za-z]+" title="Only letters"><span class="validity"></span><br><br>
    <input type="text" class="adr" id="streetid" name="street" placeholder="Street" required pattern="[A-Za-z]+" title="Only letters"><span class="validity"></span><br><br>
    <input type="text" class="adr" id="hnid" name="hn" placeholder="House nm" required><br><br>`;
  };
  let tempDiv = document.querySelector("form");
  tempDiv.innerHTML = markupForm2();
  divMain.append(tempDiv);

  const butReg = () => {
    if (citizen1.registered == false) {
      let divButton3 = document.createElement('button');
      divButton3.innerHTML = `<button type="submit" id="butRegister">Register</button>`;
      divButton3.addEventListener("click", function () {
        if (document.querySelector("form").checkValidity() == true) {
          const adress1 = new Adress(document.getElementById("countryid").value, document.getElementById("cityid").value, document.getElementById("streetid").value, document.getElementById("hnid").value);
          citizen1.register(adress1);
          divp.innerHTML += `<br> registered at: ${citizen1.adress.country} ${citizen1.adress.city}  ${citizen1.adress.street} ${citizen1.adress.hn}`;
          console.log(citizen1);
          document.querySelector('form').remove();
          document.getElementById("butCreate").style.display = 'block';
        }
      });
      document.querySelector("form").append(divButton3);
    }
  }
  butReg();
};