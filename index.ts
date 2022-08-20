import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';

//Sequelize Database Connector
import db from './src/config/dbconfig';
//Messages Routes
import messagesRoutes from './src/messages/messageRoutes';
//DDOS prevention
import limiter from './src/security/ddosMiddleware';
//Swagger Options
import { swaggerOptions } from './src/docs';

dotenv.config();

const app: Application = express();
const port = process.env.PORT;

//Database Authentication
const dbAuthenticate = async () => {
    try {
      await db.authenticate();
      console.log('Connection has been established successfully.');
      //create Tables
      await db.sync();
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}

dbAuthenticate();

app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));

//whitelist origin in production
app.use(cors({
  origin: '*'
}));

app.use('/sms', messagesRoutes);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

