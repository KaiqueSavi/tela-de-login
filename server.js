import express from 'express'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'

import auth from './middlewares/auth.js';

const app = express();
app.use(express.json());

app.use('/', publicRoutes)
app.use('/', auth, privateRoutes)

app.listen(3000, () => console.log("servidor rodando"));


//kaique
//Zan185gKPI1997pX
//mongodb+srv://kaique:<db_password>@users.dtjnj.mongodb.net/?retryWrites=true&w=majority&appName=Users