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

export const sendSmsService = async (to: string, message: string) => {
    return (await africasTalking.sendSms({ to, message, from })).SMSMessageData;
}

export const appBalance = async () => {
    return (await africasTalking.fetchApplicationData()).UserData.balance;
}

export const storeOneMessage = async (data: SingleSmsData) => {
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

export const storeManyMessage = async (data: ManySmsData) => {
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