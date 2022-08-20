import { Request, Response } from 'express';

import { 
    appBalance, 
    getMessagesService, 
    sendSmsService,
    storeManyMessage, 
    storeOneMessage  
} from './messageService';


const sendOneSms = async (req: Request, res: Response) => {
    const { to, message, topic } = req.body;
    const serverAddress = req.socket.remoteAddress as string;
    try {
        const response = await sendSmsService(to, message);
        if (response.Recipients) {
            await storeOneMessage({topic, message, recipientNumber: to, origin: serverAddress});
        }
        return res.status(200).json({message: "success", recipients: response.Recipients});
    } catch (error) {
        return res.status(500).json({message:"error", error});
    }
}

const sendManySms = async (req: Request, res: Response) => {
    const { to, message, topic } = req.body;
    const serverAddress = req.socket.remoteAddress as string;
    try {
        const response = await sendSmsService(to, message);
        if (response.Recipients){
            await storeManyMessage({topic, message, recipientNumber: to, origin: serverAddress});
        }
        return res.status(200).json({message: "success", recipients: response.Recipients});
    } catch (error) {
        return res.status(500).json({message:"error", error});
    }
}

const deliveryReport = (req: Request, res: Response) => {
    const data = req.body;
    console.log(`Received delivery report `,data);
    res.sendStatus(200);
}

const checkBalance = async (req: Request, res: Response) => {
    try {
        const balance = await appBalance();
        return res.status(200).json({balance});
    } catch (error) {
        return res.status(500).json({message:"error", error});
    }
}


const getMessages = async (req: Request, res: Response) => {
    let page = req.query?.page as number | undefined;
    let limit = req.query?.limit as number | undefined;
    
    if(!page) page = 1;
    
    if(!limit) limit = 10;

    try {
        const messages = await getMessagesService(page, limit);
        return res.status(200).json(messages);
    } catch (error) {
        return res.status(500).json({message:"error", error});
    }
}

export {
    checkBalance,
    deliveryReport,
    getMessages,
    sendManySms,
    sendOneSms,
};