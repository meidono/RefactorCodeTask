function createInputField(type, labelText) {
    let div = document.createElement("div");
    div.classList.add("form-group");

    let label = document.createElement("label");
    label.textContent = labelText;
    div.appendChild(label);

    let input = document.createElement("input");
    input.type = type;
    div.appendChild(input);

    return div;
}

function createCheckboxGroup(options, labelText) {
    let div = document.createElement("div");
    div.classList.add("form-group");

    let label = document.createElement("label");
    label.textContent = labelText;
    div.appendChild(label);

    options.forEach(option => {
        let label = document.createElement("label");
        label.textContent = ` ${option}`;
        div.appendChild(label);

        let input = document.createElement("input");
        input.type = "checkbox";
        div.appendChild(input);
    });

    return div;
}

function generateForm() {
    let form = document.createElement("form");
    let fieldset = document.createElement("fieldset");

    fieldset.appendChild(createInputField("text", "Логін:"));
    fieldset.appendChild(createInputField("text", "Пароль:"));
    fieldset.appendChild(createInputField("text", "Повторіть пароль:"));

    // Вибір статі
    let divRadio = document.createElement("div");
    let labelRadio = document.createElement("label");
    labelRadio.textContent = "Виберіть стать:";
    divRadio.appendChild(labelRadio);

    ["чоловічий", "жіночий"].forEach(gender => {
        let input = document.createElement("input");
        input.type = "radio";
        input.name = "radio";
        divRadio.appendChild(input);

        let label = document.createElement("label");
        label.textContent = gender;
        divRadio.appendChild(label);
    });

    fieldset.appendChild(divRadio);

    // Місто
    let divCity = document.createElement("div");
    divCity.classList.add("left");

    let cityLabel = document.createElement("label");
    cityLabel.textContent = "Виберіть місто:";
    divCity.appendChild(cityLabel);

    let city = document.createElement("select");
    city.size = 3;
    ["Житомир", "Київ", "Львів"].forEach(cityName => {
        let option = document.createElement("option");
        option.text = cityName;
        city.appendChild(option);
    });

    divCity.appendChild(city);
    fieldset.appendChild(divCity);

    // Інтереси
    fieldset.appendChild(createCheckboxGroup(["футбол", "шахи", "малювання", "музика"], "Інтереси:"));

    // Кнопки
    let butDiv = document.createElement("div");
    butDiv.classList.add("center");

    ["Очистити", "Відправити"].forEach(buttonText => {
        let but = document.createElement("input");
        but.type = "button";
        but.value = buttonText;
        butDiv.appendChild(but);
    });

    fieldset.appendChild(butDiv);
    form.appendChild(fieldset);
    document.body.appendChild(form);
}

generateForm();
