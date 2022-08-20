import { Client } from 'africastalking-ts';
import dotenv from 'dotenv';

import { MessageModel } from './messageModel';

interface SingleSmsData {
    topic: string;
    message: string;
    recipientNumber: string;
    origin: string;
}

interface ManySmsData {
    topic: string;
    message: string;
    recipientNumber: Array<string>;
    origin: string;
}

dotenv.config();

const apiKey = process.env.AT_API_KEY as string;
const username = process.env.AT_USERNAME as string;
const from = process.env.AT_SHORT_CODE;

const africasTalking = new Client({ apiKey,  username });

const sendSmsService = async (to: string, message: string) => {
    return (await africasTalking.sendSms({ to, message, from })).SMSMessageData;
}

const appBalance = async () => {
    return (await africasTalking.fetchApplicationData()).UserData.balance;
}

const storeOneMessage = async (data: SingleSmsData) => {
   try {
        await MessageModel.create({ 
            topic: data.topic, 
            message: data.message, 
            recipientNumber: data.recipientNumber, 
            origin: data.origin 
        });
   } catch (error) {
        console.log(error);
   }
}

const storeManyMessage = async (data: ManySmsData) => {
    try {
        data.recipientNumber.forEach(async(number) => {
            await MessageModel.create({
                topic: data.topic,
                message: data.message, 
                recipientNumber: number, 
                origin: data.origin 
            });
        });
    } catch (error) {
        console.log(error);
    }
}

const getMessagesService = async (page: number, limit: number) => {

    const offset = (page - 1) * limit;
    const messages = await MessageModel.findAndCountAll({
        limit,
        offset
    });
    const totalPages = Math.ceil(messages.count / limit);

    return { 
        totalMessages: messages.count, 
        totalPages, 
        currentPages: page,
        messages: messages.rows   
    };
}

export { 
    appBalance, 
    getMessagesService, 
    sendSmsService,
    storeManyMessage, 
    storeOneMessage  
};
