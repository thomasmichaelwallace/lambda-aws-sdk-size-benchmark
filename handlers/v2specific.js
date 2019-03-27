import { DynamoDB } from 'aws-sdk';

const ddb = new DynamoDB.DocumentClient({ region: 'eu-west-1' });

export async function handleV2(event) { // eslint-disable-line import/prefer-default-export
  const { TableName, Key } = event;
  const { Item } = await ddb.get({ TableName, Key }).promise();
  return Item || {};
}
