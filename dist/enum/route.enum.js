"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pingApi = exports.apiRoot = exports.dogsApiLink = void 0;
var dogsApiLink;
(function (dogsApiLink) {
    dogsApiLink["GET_ALL"] = "/dogs";
    dogsApiLink["GET_ONE"] = "/dog/:id";
    dogsApiLink["CREATE"] = "/dog";
    dogsApiLink["DELETE"] = "/dog/:id";
    dogsApiLink["UPDATE"] = "/dog/:id";
})(dogsApiLink || (exports.dogsApiLink = dogsApiLink = {}));
var apiRoot;
(function (apiRoot) {
    apiRoot["ROOT"] = "/api";
})(apiRoot || (exports.apiRoot = apiRoot = {}));
var pingApi;
(function (pingApi) {
    pingApi["PING"] = "/ping";
})(pingApi || (exports.pingApi = pingApi = {}));
//# sourceMappingURL=route.enum.js.map