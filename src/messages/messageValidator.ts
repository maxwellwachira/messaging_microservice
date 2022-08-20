import { body,  query } from 'express-validator';

const checkSendSingleSms = () => {
    return [
        body('to')
            .notEmpty()
            .withMessage('Recipient Number should not be empty')
            .isString()
            .withMessage('should be a vaild number'),
        body('message')
            .notEmpty()
            .withMessage('Message should not be empty'),
        body('topic')
            .notEmpty()
            .withMessage('Topic should not be empty')
    ];
}

const checkSendManySms = () => {
    return [
        body('to')
            .notEmpty()
            .withMessage('Recipient Number should not be empty')
            .isArray()
            .withMessage('should be a vaild number array'),
        body('message')
            .notEmpty()
            .withMessage('Message should not be empty'),
        body('topic')
            .notEmpty()
            .withMessage('Topic should not be empty')
    ];
}

const checkGetUsers = () => {
    return [
        query('page')
            .optional()
            .isNumeric()
            .withMessage('Value should be a number'),
        query('limit')
            .optional()
            .isNumeric()
            .withMessage('Value should be a number')

    ];
}

export {
    checkGetUsers,
    checkSendManySms,
    checkSendSingleSms
};