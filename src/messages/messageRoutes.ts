import express from 'express';

import { checkBalance, deliveryReport, sendManySms, sendOneSms } from './messageController';

const router = express.Router();

router.post('/send-one-sms', sendOneSms);

router.post('/send-many-sms', sendManySms);

router.post('/delivery-reports', deliveryReport);

router.get('/balance', checkBalance);

export default router;

