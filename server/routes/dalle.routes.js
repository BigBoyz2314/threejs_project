import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello From DALL.E ROUTES" });
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'url'
        });

        const imageUrl = response.data[0].url;

        res.status(200).json({ photoUrl: imageUrl });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something Went Wrong" });
    }
});

export default router;
