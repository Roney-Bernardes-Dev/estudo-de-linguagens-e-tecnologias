"use strict"

const AWS = require("aws-sdk");

const updateItem = async (event) => {
    const {itemStatus} = JSON.parse(event.body);
    const {id} = event.pathParameters
    
    const dynamodb = AWS.Dynamodb.DocumentClient();

    await dynamodb.update({
        TableName: "ItemTableNew",
        key: {id},
        updateExpression: 'set itemStatus = itemStatus',
        ExpressionAttributeValues: {
            ':itemSatus': itemStatus
        },
        ReturnValues: "ALL_NEW"
    }).promise()
  
    return {
        statusCode: 200,
        body: JSON.stringify(
            { msg: 'Item updated'}
        ),
    };

    };
module.exports = {
    handler: updateItem,
}