"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./routes"));
const database_1 = __importDefault(require("./config/database"));
const app = (0, express_1.default)();
const router = new routes_1.default(app);
const corsConfig = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    optionsSuccessStatus: 200
};
(0, database_1.default)();
app.set('port', process.env.API_PORT || 4200);
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)(corsConfig));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
router.init();
const port = app.get('port');
const server = app.listen(port, () => console.log(`Server started on port ${port}`));
exports.default = server;
//# sourceMappingURL=server.js.map