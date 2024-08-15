import { Router } from "express";
import Ubication from "../models/UBICATION";

const ubicationRouter  = Router();

ubicationRouter.get('/', async (req, res) => {
    try {
        const ubications = await Ubication.findAll();
        res.json(ubications);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch FAQs'});
    }
});

export default ubicationRouter;