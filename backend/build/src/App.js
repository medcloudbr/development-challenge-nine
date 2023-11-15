"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./routes");
class App {
    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            next();
        });
        this.routes();
        this.app.get('/', (_req, res) => res.status(200).send('MedCloud API no ar!'));
    }
    //Aqui eu defino as rotas da minha aplicação pelo index da pasta routes e lá eu faço a distribuição das rotas.
    routes() {
        this.app.use(routes_1.default);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Backend no ar na porta ${PORT}!`));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map