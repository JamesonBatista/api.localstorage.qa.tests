const { products, users, projects, events, approval, challengers } = require("../data/data.js");
const { saveData } = require("../localStorage.js");



//
saveData("users", users);
saveData("products", products);
saveData("approval", approval);
saveData("projects", projects);
saveData("events", events);

//
saveData("lv1", challengers.lv1);
saveData("lv2", challengers.lv2);
saveData("lv3", challengers.lv3);
saveData("lv4", challengers.lv4);
saveData("lv5", challengers.lv5);
saveData("lv6", challengers.lv6);
saveData("lv7", challengers.lv7);
saveData("lv8", challengers.lv8);
saveData("lv9", challengers.lv9);
saveData("lv10", challengers.lv10);
