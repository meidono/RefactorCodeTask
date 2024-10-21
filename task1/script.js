

function generateTable(rows, col) {
    
    
    let table = document.createElement("table");
    table.classList.add("my-table");
    
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr"); 

        for (let j = 0; j < col; j++) {
            let cell = document.createElement("td"); 
            cell.textContent = Math.floor(Math.random() * 100) + 1; 
            row.appendChild(cell); 
        }
        
        table.appendChild(row); 
    }

    document.body.appendChild(table); 
}

let m = Math.floor(Math.random() * 10) + 1;  
let n = Math.floor(Math.random() * 10) + 1;  
generateTable(m, n);


function generateForm() {
    let form = document.createElement("form");

    let fieldset = document.createElement("fieldset");
    form.appendChild(fieldset);

    // Логін
    let divLogin = document.createElement("div");
    divLogin.classList.add("form-group");

    let labelLogin = document.createElement("label");
    labelLogin.textContent = "Логін: ";
    divLogin.appendChild(labelLogin);

    let textLogin = document.createElement("input");
    textLogin.type = "text";
    divLogin.appendChild(textLogin);

    // Пароль
    let divPassword = document.createElement("div");
    divPassword.classList.add("form-group");

    let labelPassword = document.createElement("label");
    labelPassword.textContent = "Пароль:";
    divPassword.appendChild(labelPassword);

    let textPassword = document.createElement("input");
    textPassword.type = "text";
    divPassword.appendChild(textPassword);


    // Повторити пароль

    let divPassRep = document.createElement("div");
    divPassRep.classList.add("form-group");

    let labelRepPassword = document.createElement("label");
    labelRepPassword.textContent = "Повторіть Пароль:";
    divPassRep.appendChild(labelRepPassword);

    let textRepPassword = document.createElement("input");
    textRepPassword.type = "text";
    divPassRep.appendChild(textRepPassword);


    //вибір статі


    let divRadio = document.createElement("div");


    let labelRadio = document.createElement("label");
    labelRadio.textContent = "Виберіть стать:";

    divRadio.appendChild(labelRadio);


    let radioMan = document.createElement("input");
    radioMan.type = "radio";
    radioMan.name = "radio";
    divRadio.appendChild(radioMan);
    let labelRadioMan = document.createElement("label");
    labelRadioMan.textContent = "чоловічий";
    divRadio.appendChild(labelRadioMan);



    let radioWoman = document.createElement("input");
    radioWoman.type = "radio";
    radioWoman.name = "radio";
    divRadio.appendChild(radioWoman);
    let labelRadioWoman = document.createElement("label");
    labelRadioWoman.textContent = "жіночий";
    divRadio.appendChild(labelRadioWoman);

    //Місто

    let divCity = document.createElement("div");
    divCity.classList.add("left");

    let cityLabel = document.createElement("label");
    cityLabel.textContent = "виберіть місто:";
    divCity.appendChild(cityLabel);

    let city = document.createElement("select");
    city.size = 3;

    let option1 = document.createElement("option");
    option1.text = "Житомир";

    let option2 = document.createElement("option");
    option2.text = "Київ";

    let option3 = document.createElement("option");
    option3.text = "Львів";

    city.appendChild(option1);
    city.appendChild(option2);
    city.appendChild(option3);


    divCity.appendChild(city);

    //інтереси

    let intDiv = document.createElement("div");
    intDiv.classList.add("form-group");

    let intLabel = document.createElement("label");
    intLabel.textContent = "інтереси: ";
    intDiv.appendChild(intLabel);


    intLabel = document.createElement("label");
    intLabel.textContent= " футбол"
    intDiv.appendChild(intLabel);

    intInput1 = document.createElement("input");
    intInput1.type = "checkbox";
    intDiv.appendChild(intInput1);

    intLabel = document.createElement("label");
    intLabel.textContent= "шахи"
    intDiv.appendChild(intLabel);

    intInput1 = document.createElement("input");
    intInput1.type = "checkbox";
    intDiv.appendChild(intInput1);

    intLabel = document.createElement("label");
    intLabel.textContent= "малювання"
    intDiv.appendChild(intLabel);
    

    intInput1 = document.createElement("input");
    intInput1.type = "checkbox";
    intDiv.appendChild(intInput1);

    intLabel = document.createElement("label");
    intLabel.textContent= "музика"
    intDiv.appendChild(intLabel);

    intInput1 = document.createElement("input");
    intInput1.type = "checkbox";
    intDiv.appendChild(intInput1);
    
    
    


    let butDiv = document.createElement("div");
    butDiv.classList.add("center")
    let but= document.createElement("input");
    but.type= "button";
    but.value="Очистити";
    butDiv.appendChild(but);
     
     but= document.createElement("input");
    but.type= "button";
    but.value="Відправити";
    butDiv.appendChild(but);

    fieldset.appendChild(divLogin);
    fieldset.appendChild(divPassword);
    fieldset.appendChild(divPassRep);
    fieldset.appendChild(divRadio);
    fieldset.appendChild(divCity);
    fieldset.appendChild(intDiv);
    fieldset.appendChild(butDiv);
    document.body.appendChild(form);
}

generateForm();

function generatelabel(){

}