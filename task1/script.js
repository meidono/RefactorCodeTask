// Константи
const MAX_RANDOM = 100;
const MIN_RANDOM = 1;
const MIN_TABLE_SIZE = 1;
const MAX_TABLE_SIZE = 10;
const DEFAULT_SELECT_SIZE = 3;

// Дані
const CITIES = ["Житомир", "Київ", "Львів"];
const INTERESTS = ["Футбол", "Шахи", "Малювання", "Музика"];

// Функція для створення таблиці
function generateTable(rows, col) {
    let table = createTable(rows, col);
    document.body.appendChild(table);
}

// Функція для створення таблиці
function createTable(rows, col) {
    let table = document.createElement("table");
    table.classList.add("my-table");

    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < col; j++) {
            row.appendChild(createTableCell());
        }

        table.appendChild(row);
    }

    return table;
}

// Функція для створення комірки таблиці
function createTableCell() {
    let cell = document.createElement("td");
    cell.textContent = Math.floor(Math.random() * MAX_RANDOM) + MIN_RANDOM;
    return cell;
}

// Визначаємо розмір таблиці
let m = Math.floor(Math.random() * MAX_TABLE_SIZE) + MIN_TABLE_SIZE;
let n = Math.floor(Math.random() * MAX_TABLE_SIZE) + MIN_TABLE_SIZE;
generateTable(m, n);

// Функція для створення форми
function generateForm() {
    let form = document.createElement("form");
    let fieldset = document.createElement("fieldset");
    form.appendChild(fieldset);

    addFormFields(fieldset);
    document.body.appendChild(form);
}

// Функція для додавання полів у форму
function addFormFields(fieldset) {
    fieldset.appendChild(createInputField("text", "Логін:"));
    fieldset.appendChild(createInputField("text", "Пароль:"));
    fieldset.appendChild(createInputField("text", "Повторіть пароль:"));
    fieldset.appendChild(createRadioGroup("radio", ["Чоловічий", "Жіночий"], "Виберіть стать:"));
    fieldset.appendChild(createDropdown(CITIES, "Виберіть місто:", DEFAULT_SELECT_SIZE));
    fieldset.appendChild(createCheckboxGroup(INTERESTS, "Інтереси:"));
    fieldset.appendChild(createButtonGroup(["Очистити", "Відправити"]));
}

// Функція для створення текстового поля
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

// Функція для створення групи радіокнопок
function createRadioGroup(name, options, labelText) {
    let div = document.createElement("div");

    let label = document.createElement("label");
    label.textContent = labelText;
    div.appendChild(label);

    options.forEach(option => {
        div.appendChild(createRadioButton(name, option));
    });

    return div;
}

// Функція для створення окремої радіокнопки
function createRadioButton(name, labelText) {
    let input = document.createElement("input");
    input.type = "radio";
    input.name = name;

    let label = document.createElement("label");
    label.textContent = labelText;

    let container = document.createElement("span");
    container.appendChild(input);
    container.appendChild(label);

    return container;
}

// Функція для створення випадаючого списку
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

// Функція для створення групи чекбоксів
function createCheckboxGroup(options, labelText) {
    let div = document.createElement("div");
    div.classList.add("form-group");

    let label = document.createElement("label");
    label.textContent = labelText;
    div.appendChild(label);

    options.forEach(option => {
        div.appendChild(createCheckbox(option));
    });

    return div;
}

// Функція для створення окремого чекбоксу
function createCheckbox(labelText) {
    let label = document.createElement("label");
    label.textContent = ` ${labelText}`;

    let input = document.createElement("input");
    input.type = "checkbox";

    let container = document.createElement("span");
    container.appendChild(input);
    container.appendChild(label);

    return container;
}

// Функція для створення групи кнопок
function createButtonGroup(buttonTexts) {
    let butDiv = document.createElement("div");
    butDiv.classList.add("center");

    buttonTexts.forEach(text => {
        butDiv.appendChild(createButton(text));
    });

    return butDiv;
}

// Функція для створення кнопки
function createButton(value) {
    let but = document.createElement("input");
    but.type = "button";
    but.value = value;
    return but;
}

// Викликаємо функцію для генерації форми
generateForm();
