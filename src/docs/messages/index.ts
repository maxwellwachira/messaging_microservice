import { getBalance } from "./getBalance";
import { getMessages } from "./getMessages";
import { sendManySms } from "./sendManySms";
import { sendSingleSms } from "./sendSingleSms";

export const messagePaths = {
    '/sms/send-one-sms': {
        ...sendSingleSms
    },
    '/sms/send-many-sms': {
        ...sendManySms
    },
    '/sms/balance': {
        ...getBalance
    },
    '/sms/get-messages': {
        ...getMessages
    }
}