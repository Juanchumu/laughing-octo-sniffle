"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ message: "La api esta en /api/personas" });
    }
}
exports.indexController = new IndexController();
