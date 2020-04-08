"use strict";
const mon = require("./mongooseWrap");
const ToDo = require("./Time");
const dbServer = "localhost";
const dbName = "user";

exports.upsertTime = async function (req) {
    let chk = { title: req.body.title };
    let toDo = new ToDo({
        userID: "rikke@mail.com",
        title: req.body.title,
        deadline: new Date(req.body.deadline),
    });
    try { 
        let cs = await mon.upsert(dbServer, dbName, ToDo, toDo, chk);   
        return;
} catch(e) {
    console.error(e);
    }
};

exports.getTime = async function (query, sort) {
    try {
        let cs = await mon.retrieve(dbServer, dbName, ToDo, query, sort);
        return cs;
    } catch (e) {
        console.error(e);
    }
}; 

exports.delTime = async function (name) {
    try {
        let cs = await mon.remove(dbServer, dbName, ToDo, name);
        return cs;
    } catch (e) {
        console.log(e);
    }
}