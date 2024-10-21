

for (const headerElement of document.querySelectorAll(".header")) {
    headerElement.addEventListener('click', function () {
        const infoElement = headerElement.nextElementSibling;
        const afterSimbol = headerElement.querySelector(".plus");

        
        headerElement.classList.toggle("open");
        infoElement.classList.toggle("display");
        afterSimbol.classList.toggle("minus");





    });
}