import { DynamoDB } from '@aws-sdk/client-dynamodb-v2-node';

const ddb = new DynamoDB.DocumentClient({ region: 'eu-west-1' });

export async function handleV2(event) { // eslint-disable-line import/prefer-default-export
  const { TableName, Key } = event;
  const { Item } = await ddb.get({ TableName, Key });
  return Item || {};
}
