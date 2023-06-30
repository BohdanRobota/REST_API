"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dogs_controller_1 = __importDefault(require("../../controllers/dogs.controller"));
const route_enum_1 = require("../../enum/route.enum");
const dogsRouter = (0, express_1.Router)();
dogsRouter.get(route_enum_1.dogsApiLink.GET_ALL, dogs_controller_1.default.getAll.bind(dogs_controller_1.default));
dogsRouter.get(route_enum_1.dogsApiLink.GET_ONE, dogs_controller_1.default.getById.bind(dogs_controller_1.default));
dogsRouter.post(route_enum_1.dogsApiLink.CREATE, dogs_controller_1.default.create.bind(dogs_controller_1.default));
dogsRouter.delete(route_enum_1.dogsApiLink.DELETE, dogs_controller_1.default.deleteById.bind(dogs_controller_1.default));
dogsRouter.patch(route_enum_1.dogsApiLink.UPDATE, dogs_controller_1.default.updateById.bind(dogs_controller_1.default));
exports.default = dogsRouter;
//# sourceMappingURL=dogs.route.js.map