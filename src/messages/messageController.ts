import { Request, Response } from 'express';

import { sendSmsService, appBalance, storeOneMessage, storeManyMessage } from './messageService';


export const sendOneSms = async (req: Request, res: Response) => {
    const { to, message, topic } = req.body;
    const serverAddress = req.socket.remoteAddress as string;
    try {
        const response = await sendSmsService(to, message);
        if (response) {
            await storeOneMessage({topic, message, recipientNumber: to, origin: serverAddress});
        }
        return res.status(200).json({message: "success", response});
    } catch (error) {
        return res.status(500).json({message:"error"});
    }
}

export const sendManySms = async (req: Request, res: Response) => {
    const { to, message, topic } = req.body;
    const serverAddress = req.socket.remoteAddress as string;
    try {
        const response = await sendSmsService(to, message);
        if (response){
            await storeManyMessage({topic, message, recipientNumber: to, origin: serverAddress});
        }
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