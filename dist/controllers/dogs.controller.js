"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogsController = void 0;
class DogsController {
    constructor() { }
    async getAll(req, res) {
        const { query } = req;
        res.send('dogs');
    }
    async getById(req, res) {
        const { id } = req.params;
        res.json('dog');
    }
    async deleteById(req, res) {
        const { id } = req.params;
        res.json('delete dog');
    }
    async updateById(req, res) {
        const { id } = req.params;
        res.json('update dog');
    }
    async create(req, res) {
        res.json('create dog');
    }
}
exports.DogsController = DogsController;
const dogsController = new DogsController();
exports.default = dogsController;
//# sourceMappingURL=dogs.controller.js.map