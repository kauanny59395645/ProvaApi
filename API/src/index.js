import 'dotenv/config'

import express from 'express'
import cors from 'cors'

Const.server = express();
server.use(cors());
server.use(express.json());


server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`));

