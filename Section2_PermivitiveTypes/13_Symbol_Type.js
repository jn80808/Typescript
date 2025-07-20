"use strict";
let id = Symbol();
let id2 = Symbol(123);
let id3 = Symbol("123");
let alphabeticId = Symbol("id");
let user1 = {
    [id]: "123",
    name: "Mark"
};
console.log(user1.name);
console.log(user1.id); //undefined
console.log(id);
let user2 = {
    [id]: "123",
    name: "Mark",
    getId() {
        return this[id];
    }
};
console.log(user2);
console.log(user2.getId());
