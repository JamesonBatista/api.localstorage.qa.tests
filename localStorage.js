const { LocalStorage } = require("node-localstorage");

const localStorage = new LocalStorage("./scratch");

function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
}

function getData(name) {
    const data = localStorage.getItem(name);
    return data ? JSON.parse(data) : [];
}

module.exports = {
    saveData,
    getData
};