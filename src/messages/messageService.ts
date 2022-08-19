import { Client } from 'africastalking-ts';
import dotenv from 'dotenv';

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