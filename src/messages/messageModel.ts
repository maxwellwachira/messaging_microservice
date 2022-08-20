import { DataTypes, Model, Optional } from 'sequelize';

import db from '../config/dbconfig';

import { MessageAttributes } from './messageInterfaces';

type MessageCreationAttributes = Optional<MessageAttributes, 'id'>;

export class MessageModel extends Model<MessageAttributes, MessageCreationAttributes> {}

MessageModel.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    topic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    recipientNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "recipient_number"
    },
    origin: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: db,
    tableName: "messages",
    modelName: "Message"
});