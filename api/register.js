// /api/register.js
const { Client } = require('pg');
require('dotenv').config();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, senha, score } = req.body;

    // Verifica se os campos obrigatórios estão presentes
    if (!nome || !senha) {
      return res.status(400).send('Nome e senha são obrigatórios');
    }

    // Configuração do banco de dados
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });

    try {
      await client.connect();

      const insertQuery = `
        INSERT INTO usuarios (nome, senha, score)
        VALUES ($1, $2, $3);
      `;
      await client.query(insertQuery, [nome, senha, score]);

      res.status(200).send('Usuário cadastrado com sucesso!');
    } catch (err) {
      console.error('Erro ao cadastrar o usuário:', err.stack);
      res.status(500).send('Erro ao cadastrar o usuário');
    } finally {
      await client.end();
    }
  } else {
    // Caso não seja uma requisição POST
    res.status(405).send('Método não permitido');
  }
}
