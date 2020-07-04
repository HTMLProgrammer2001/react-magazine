"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var API = (function () {
    function API() {
    }
    API.getProducts = function (offset) {
        return __awaiter(this, void 0, void 0, function () {
            var body, response, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = {
                            page: offset
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this.clientAPI.get('/getProducts', {
                                params: body
                            })];
                    case 2:
                        response = _a.sent();
                        return [3, 4];
                    case 3:
                        err_1 = _a.sent();
                        return [2, err_1];
                    case 4: return [2, response.data];
                }
            });
        });
    };
    API.getProductInfo = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.clientAPI.get("/products/" + slug)];
                    case 1:
                        response = _a.sent();
                        return [3, 3];
                    case 2:
                        err_2 = _a.sent();
                        return [2, err_2];
                    case 3: return [2, response.data];
                }
            });
        });
    };
    API.getComments = function (productID, offset) {
        if (offset === void 0) { offset = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var response, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.clientAPI.get("/products/" + productID + "/getComments", {
                                params: {
                                    page: offset
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        return [3, 3];
                    case 2:
                        err_3 = _a.sent();
                        return [2, err_3];
                    case 3: return [2, response.data];
                }
            });
        });
    };
    API.changeLike = function (productID) {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.clientAPI.post("/products/" + productID + "/changeLike")];
                    case 1:
                        response = _a.sent();
                        return [3, 3];
                    case 2:
                        err_4 = _a.sent();
                        return [2, err_4];
                    case 3: return [2, response.data];
                }
            });
        });
    };
    API.registerUser = function (vals) {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.clientAPI.post('/register', vals)];
                    case 1:
                        response = _a.sent();
                        return [3, 3];
                    case 2:
                        err_5 = _a.sent();
                        return [2, err_5];
                    case 3: return [2, response.data];
                }
            });
        });
    };
    API.isError = function (arg) {
        return 'response' in arg;
    };
    API.clientAPI = axios_1.default.create({
        baseURL: 'http://localhost:8000/api'
    });
    return API;
}());
exports.default = API;

//# sourceMappingURL=API.js.map
