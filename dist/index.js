"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var random_people_router_1 = __importDefault(require("./routers/random-people-router"));
var app = (0, express_1.default)();
app.get("/health", function (req, res) {
    res.status(200).send("to de boa");
});
app.use(random_people_router_1.default);
app.listen(5000, function () {
    console.log("Server is running");
});
