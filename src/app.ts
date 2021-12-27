import express, { Application, Request, Response } from 'express';
import router from './components/routes';
const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.json({
        version: '1.0',
        app: 'Welcome to this application'
    });
});

app.use(router);

export default app;