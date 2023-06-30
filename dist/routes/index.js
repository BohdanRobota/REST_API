"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dogs_route_1 = __importDefault(require("./api/dogs.route"));
const route_enum_1 = require("../enum/route.enum");
class AppRouter {
    constructor(app) {
        this.app = app;
    }
    init() {
        this.app.get(route_enum_1.pingApi.PING, (_req, res) => {
            res.send('Dogshouseservice.Version1.0.1');
        });
        this.app.use(route_enum_1.apiRoot.ROOT, dogs_route_1.default);
    }
}
exports.default = AppRouter;
//# sourceMappingURL=index.js.map