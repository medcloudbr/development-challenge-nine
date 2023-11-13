import express = require('express');
import router from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.app.use(express.json());

    this.routes();

    this.app.get('/', (_req, res) => res.status(200).send('MedCloud API no ar!'));
  }

  //Aqui eu defino as rotas da minha aplicação pelo index da pasta routes e lá eu faço a distribuição das rotas.
  private routes(): void {
    this.app.use(router);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Backend no ar na porta ${PORT}!`));
  }

}

export default App;
