import express from 'express';

import {
    checkGetUsers,
    checkSendManySms,
    checkSendSingleSms
} from './messageValidator';

import {
    checkBalance,
    deliveryReport,
    getMessages,
    sendManySms,
    sendOneSms
} from './messageController';

import { validationMiddleware } from './messageMiddleware';

const router = express.Router();

router.post('/send-one-sms', checkSendSingleSms(), validationMiddleware, sendOneSms);

router.post('/send-many-sms', checkSendManySms(), validationMiddleware, sendManySms);

router.post('/delivery-reports', deliveryReport);

router.get('/balance', checkBalance);

router.get('/get-messages', checkGetUsers(), validationMiddleware, getMessages);

export default router;

