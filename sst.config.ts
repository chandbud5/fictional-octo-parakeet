import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";
import { Lambda } from "./stacks/LambdaStack";

export default {
  config(_input) {
    return {
      name: "my-sst-app",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(API);
    app.stack(Lambda);
  }
} satisfies SSTConfig;
