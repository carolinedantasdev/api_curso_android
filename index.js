// Importar Express
const express = require("express");

// Criar o objeto app (responsável por gerenciar a API)
const app = express();

// Aceitar as informações 
app.use(express.json());

// Banco de dados fake e auto incremento
let students = [];
let idGenerator = 1;

// Rotas
app.get("/students", (req, res) => {
    res.json(students);
});

app.post("/students", (req, res) => {
    // Extrair as propriedades da requisição
    const { name, grade1, grade2 } = req.body;

    const student = {
        id: idGenerator++,
        name,
        grade1,
        grade2,
        mean: (grade1 + grade2) / 2
    };
    students.push(student);
    
    res.json(student);
});

app.delete("/students/:id", (req, res) => {
    // Obter o id da rota
    const id = parseInt(req.params.id);

    //Filtrar todos os alunos com o id diferente do id recebido
    students = students.filter(student => student.id !== id);

    // Retorno
    res.json({ message: "Aluno removido com sucesso" });
});

// Servidor
app.listen(3000);