# Students API

API REST para gerenciamento de alunos, construída com Node.js e Express. Permite cadastrar, listar e remover alunos, calculando automaticamente a média entre duas notas.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado

## Instalação

```bash
npm install
```

## Execução

```bash
node index.js
```

O servidor será iniciado na porta **3000**.

## Endpoints

### Listar todos os alunos

```
GET /students
```

**Resposta:**
```json
[
  {
    "id": 1,
    "name": "João Silva",
    "grade1": 8.0,
    "grade2": 7.5,
    "mean": 7.75
  }
]
```

---

### Cadastrar aluno

```
POST /students
```

**Body (JSON):**
```json
{
  "name": "João Silva",
  "grade1": 8.0,
  "grade2": 7.5
}
```

**Resposta:**
```json
{
  "id": 1,
  "name": "João Silva",
  "grade1": 8.0,
  "grade2": 7.5,
  "mean": 7.75
}
```

---

### Remover aluno

```
DELETE /students/:id
```

**Exemplo:** `DELETE /students/1`

**Resposta:**
```json
{
  "message": "Aluno removido com sucesso"
}
```

