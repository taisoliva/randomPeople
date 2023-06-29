"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var random_people_controller_1 = __importDefault(require("../controllers/random-people-controller"));
var randomPeople = (0, express_1.Router)();
randomPeople.get("/person", random_people_controller_1.default.getRandomPeople);
exports.default = randomPeople;
