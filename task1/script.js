// Константи
const MAX_RANDOM = 100;
const MIN_RANDOM = 1;
const MIN_TABLE_SIZE = 1;
const MAX_TABLE_SIZE = 10;
const DEFAULT_SELECT_SIZE = 3;

// Дані
const CITIES = ["Житомир", "Київ", "Львів"];
const INTERESTS = ["Футбол", "Шахи", "Малювання", "Музика"];

function generateTable(rows, col) {
    let table = document.createElement("table");
    table.classList.add("my-table");

    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < col; j++) {
            let cell = document.createElement("td");
            cell.textContent = Math.floor(Math.random() * MAX_RANDOM) + MIN_RANDOM;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    document.body.appendChild(table);
}

let m = Math.floor(Math.random() * MAX_TABLE_SIZE) + MIN_TABLE_SIZE;
let n = Math.floor(Math.random() * MAX_TABLE_SIZE) + MIN_TABLE_SIZE;
generateTable(m, n);

function generateForm() {
    let form = document.createElement("form");
    let fieldset = document.createElement("fieldset");
    form.appendChild(fieldset);

    // Логін
    fieldset.appendChild(createInputField("text", "Логін:"));
    fieldset.appendChild(createInputField("text", "Пароль:"));
    fieldset.appendChild(createInputField("text", "Повторіть пароль:"));

    // Вибір статі
    fieldset.appendChild(createRadioGroup("radio", ["Чоловічий", "Жіночий"], "Виберіть стать:"));

    // Місто
    fieldset.appendChild(createDropdown(CITIES, "Виберіть місто:", DEFAULT_SELECT_SIZE));

    // Інтереси
    fieldset.appendChild(createCheckboxGroup(INTERESTS, "Інтереси:"));

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
    document.body.appendChild(form);
}

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

function createRadioGroup(name, options, labelText) {
    let div = document.createElement("div");

    let label = document.createElement("label");
    label.textContent = labelText;
    div.appendChild(label);

    options.forEach(option => {
        let input = document.createElement("input");
        input.type = "radio";
        input.name = name;
        div.appendChild(input);

        let label = document.createElement("label");
        label.textContent = option;
        div.appendChild(label);
    });

    return div;
}

function createDropdown(options, labelText, size) {
    let div = document.createElement("div");

    let label = document.createElement("label");
    label.textContent = labelText;
    div.appendChild(label);

    let select = document.createElement("select");
    select.size = size;

    options.forEach(optionText => {
        let option = document.createElement("option");
        option.text = optionText;
        select.appendChild(option);
    });

    div.appendChild(select);
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

generateForm();
