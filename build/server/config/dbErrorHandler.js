"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
function dbErrorHandler(res, err) {
    console.log("Ocorreu no banco de dados: " + err);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
        code: 'ERR-001',
        message: 'Ocorreu um erro no banco de dados'
    });
}
exports.dbErrorHandler = dbErrorHandler;
