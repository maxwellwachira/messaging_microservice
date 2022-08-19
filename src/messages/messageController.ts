import { Request, Response } from 'express';

import { sendSmsService, appBalance } from './messageService';


export const sendOneSms = async (req: Request, res: Response) => {
    const { to, message } = req.body;
    try {
        const response = await sendSmsService(to, message);
        return res.status(200).json({message: "success", response});
    } catch (error) {
        return res.status(500).json({message:"error"});
    }
}

export const sendManySms = async (req: Request, res: Response) => {
    const { to, message } = req.body;
    try {
        const response = await sendSmsService(to, message);
        return res.status(200).json({message: "success", response});
    } catch (error) {
        return res.status(500).json({message:"error"});
    }
}

export const deliveryReport = (req: Request, res: Response) => {
    const data = req.body;
    console.log(`Received delivery report `,data);
    res.sendStatus(200);
}

export const checkBalance = async (req: Request, res: Response) => {
    try {
        const balance = await appBalance();
        console.log(balance);
        return res.status(200).json({balance});
    } catch (error) {
        return res.status(500).json({message:"error"});
    }
}