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

interface MessageAttributes {
    id: Number;
    topic: string;
    message: string;
    recipientNumber: string;
    origin: string;
}

export {
    ManySmsData,
    MessageAttributes,
    SingleSmsData,
};