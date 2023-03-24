"use strict"

const AWS = require("aws-sdk");

const fetchItem = async (event) => {
    const dynamodb = AWS.Dynamodb.DocumentClient();
    const {id} = event.pathParameters

    let item;

    try {
        const results = await dynamodb.get({
            TableName: "ItemTableNew",
            key: {id}
        }).promise();
    
        item = results.Item;
    } catch (error) {
        console.log(error);
    }
    return {
        statusCode: 200,
        body: JSON.stringify(item),
    };

    };
module.exports = {
    handler: fetchItem,
}