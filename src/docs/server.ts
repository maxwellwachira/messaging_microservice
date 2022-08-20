import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

export const servers = {
    servers: [
      {
        url: `http://localhost:${port}`,
        description: "Local server", 
      },
    ]
};