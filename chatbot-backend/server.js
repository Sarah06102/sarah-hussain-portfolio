import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
import fs from 'fs';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const context = fs.readFileSync('./sarah-context.txt', 'utf-8');

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    try {
        console.log("Using model: gemini-1.5-flash");
        const response = await axios.post(
            'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent',
            {
                contents: [
                    {
                        role: 'user',
                        parts: [{ text: `${context}\n\nUser question: ${message}`}],
                    },
                ],
                generationConfig: {
                    temperature: 0.9,
                    topK: 40,
                    topP: 1,
                    maxOutputTokens: 300,
                },
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    key: process.env.GEMINI_API_KEY,
                },
            }
        );  

        const reply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || 'No reply.';
        res.json({ reply });
    } catch (err) {
        console.error('Gemini error:', err.response?.data || err.message);
        res.status(500).json({ error: 'Gemini failed' });
    }
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Gemini chatbot running at http://127.0.0.1:${PORT}`));
