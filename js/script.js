function getFacts() {
    $.ajax("https://catfact.ninja/fact", {
        success: function (data) {
            document.getElementById("get").innerHTML = "Вау, прикольный факт:" + "<br/> <br/>" + data.fact;
        }
    });
}

getFacts();

document.getElementById("updateButton").addEventListener('click', () => { getFacts() });


function getPictures() {

    let countOfImages = document.getElementById('inputCountImages').value;
    let randomPages = Math.floor(Math.random() * 3) + 1;

    $.ajax(`https://repetitora.net/api/JS/Images?page=${randomPages}&count=${countOfImages}`, {
        success: function (data) {
            data.forEach(el => {
                const img = document.createElement("img");
                img.src = el.thumbnail;
                document.querySelector("body").appendChild(img);
                //document.classSelector("dj-pictures").appendChild(img);
            });
            console.log("Запрос идет")
        }
    });
    console.log("Функция")
}


getPictures();

document.getElementById("getPics").addEventListener('click', () => { getPictures() });


