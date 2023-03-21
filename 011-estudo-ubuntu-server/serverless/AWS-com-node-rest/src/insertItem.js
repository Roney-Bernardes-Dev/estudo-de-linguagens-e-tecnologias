"use strict"

const {v4} = require("uuid")
const AWS = require("AWS-sdk")

const insertitem = async (event) => {

const {item} = JSON.parse(event.body);
const createdAT = new Date().toISOString();
const id = v4()

const dybaniDB = new AWS.DynamoDB.DocumentClient();

const newItem = {
    id,
    item,
    createdAt,
    itemStatus: false
    
    }

    await DynamoDB.put(
        {
            TableName:"ItemTableNew",
            Item: newItem
        }
    )
    return {
        statusCode: 200,
        body: Json.stringify(newItem)
    };
}
modulo.exports = {
    handler:insertItem
}
