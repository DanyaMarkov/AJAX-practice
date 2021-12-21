
//DLA - Data Access Layer

function getFacts(succesCallback) {
    $.ajax("https://catfact.ninja/fact", {
        success: succesCallback
    });
}

function getImages(countOfImages) {
    let randomPages = Math.floor(Math.random() * 3) + 1;

    const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${randomPages}&count=${countOfImages}`);
    return promise;
}

function getPictures(countOfImages) {
    let randomPages = Math.floor(Math.random() * 3) + 1;

    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${randomPages}&count=${countOfImages}`);
    return promise.then((response) => {
        return response.data;
    });
}

//Todo-list
function getTasks() {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=4555&count=30`);
    return promise.then((response) => {
        return response.data;
    });
}

function createTask(title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 4555,
        title: title
    });
    return promise.then((response) => {
        return response.data;
    });
}

changeTask("Domaska 111", "c2c38bee-fec9-4d4f-8a7b-7aaac487aaf3", true);
function changeTask(title, id, done) {
    const promise = axios.put(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 4555,
        title: title,
        taskId: id,
        done: done
    });
    return promise.then((response) => {
        return response.data;
    });
}

deleteTask("f6f8dc04-c6ed-4565-a693-6ed4a571bf81");
function deleteTask(id) {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=4555&taskId=${id}`);
    return promise.then((response) => {
        return response.data;
    });
}