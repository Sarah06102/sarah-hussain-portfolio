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
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent',
            {
                contents: [
                    {
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
        console.error("Gemini error:", JSON.stringify(err.response?.data || err.message, null, 2));
        res.status(500).json({ error: err.response?.data || err.message || "Gemini failed" });
    }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Gemini chatbot running at http://127.0.0.1:${PORT}`));
