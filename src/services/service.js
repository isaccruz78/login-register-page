import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "accounts",
});

app.listen(3001, () => {
    console.log("Servidor iniciado na porta 3001.");
});

app.get('/', (req, res) => {
    res.send('Rota de login.');
});

app.get('/register', (req, res) => {
    res.send('Rota de registro.');
});

app.post("/", (req, res) => {

    const { EmailLogin, PasswordLogin } = req.body;
    const SQL = 'SELECT * FROM users WHERE email = ? AND password = ?';

    db.query(SQL, [EmailLogin, PasswordLogin], (error, result) => {
        if (error) {
            console.log("\nHouve um erro desconhecido ao usuário realizar o login:\n\n", error);
            return res.status(500).send({ message: "Houve um erro desconhecido ao usuário realizar o login." });
        }
        if (result.length > 0) {
            console.log("\nUsuário logado com sucesso:\n\n", result);
            return res.status(200).send({ message: "Usuário logado com sucesso!" });

        } else {
            console.log("\nErro ao usuário realizar o login: email ou senha incorretos:\n\n", result, error);
            return res.status(401).send({ message: "Erro ao usuário realizar o login: email ou senha incorretos." });
        }
    });

});

app.post("/register", (req, res) => {

    const { UsernameRegister, EmailRegister, PasswordRegister } = req.body;
    const SQL = 'INSERT INTO users (username, email, password ) VALUES (?, ?, ?)';

    db.query(SQL, [UsernameRegister, EmailRegister, PasswordRegister], (error, result) => {
        if (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                console.log("\nErro ao usuário realizar o cadastro: o email já está cadastrado.\n\n", result, error);
                return res.status(409).send({ message: "Erro ao usuário realizar o cadastro: o email já está cadastrado." });
            }
            console.log("\nHouve um erro desconhecido ao usuário realizar o cadastro:\n\n", error);
            return res.status(500).send({ message: "Houve um erro desconhecido ao usuário realizar o cadastro." });
        }
        console.log("\nUsuário cadastrado com sucesso:\n\n", result);
        return res.status(201).send({ message: "Usuário cadastrado com sucesso!" });
    });

});