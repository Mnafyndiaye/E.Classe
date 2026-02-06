import { Router } from 'express';
const router = Router();
import Users from '../app/models/Users.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Route d'inscription
router.post('inscription', async (req, res) => {
    const { nom, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await Users.create({nom,email, password: hashedPassword, role });
        res.status(201).json({message :'Utilisateur créé avec succès', user: newUser});
    } catch (error) {
        res.status(500).json({message :'Erreur lors de la création de l\'utilisateur', error: error.message});
    }
}
)