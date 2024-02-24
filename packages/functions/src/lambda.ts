import { ApiHandler } from "sst/node/api";

export const handler = async () => {
  console.log("Hello World")
  return {
    statusCode: 200,
    body: `Hello world. The time is ${new Date().toISOString()}`,
  };
};
