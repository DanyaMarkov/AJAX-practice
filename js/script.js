
// Факты
document.getElementById("updateButton").addEventListener('click', () => {
    getFacts(onFactReceived);
});

let onFactReceived = (data) => {
    document.getElementById("get").innerHTML = `Да вот же они!: <br/> <br/> ${data.fact}`;
}

//Картинки на Jquery
document.getElementById("getImgs").addEventListener('click', () => {
    let countOfImages = document.getElementById('inputCountImages').value;
    const promise = getImages(countOfImages);
    promise
        .then(onImagesReceived)
});


let onImagesReceived = (data) => {
    data.forEach(el => {
        const img = document.createElement("img");
        img.src = el.thumbnail;
        document.querySelector(".outputImages").appendChild(img);
    });
}


//Картинки на Axios
document.getElementById("getPics").addEventListener('click', () => {
    let countOfPictures = document.getElementById('inputCountPictures').value;
    const promise = getPictures(countOfPictures);
    promise
        .then(onPicturesReceived)
});


let onPicturesReceived = (data) => {
    data.forEach(el => {
        const img = document.createElement("img");
        img.src = el.thumbnail;
        document.querySelector(".outputPictures").appendChild(img);
        //document.classSelector("dj-pictures").appendChild(img);
    });
    console.log("Запрос идет");
}

//ToDoList на Axios

getTasksButton = document.querySelector("#getTasks");

getTasksButton.addEventListener('click', () => {
    const promise = getTasks();
    promise.then(onTasksReceived)
});

let onTasksReceived = (tasks) => {
    document.querySelector(".tasks-result").innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = task.title;
        li.dataset.id = task.id;
        document.querySelector(".tasks-result").appendChild(li);
    });
    console.log("Запрос идет");
}

//postTask
postTaskButton = document.querySelector("#postTask");

postTaskButton.addEventListener('click', () => {
    let textOfTask = document.getElementById('inputTask').value;
    const promise = createTask(textOfTask);
    promise.then(onTasksReceived)
});
