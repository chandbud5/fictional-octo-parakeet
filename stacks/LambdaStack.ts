import { Function, StackContext } from "sst/constructs";

export function Lambda({stack}: StackContext) {
    new Function(stack, 'FirstLambda', {
        handler: 'packages/functions/src/lambda.handler',
        runtime: 'nodejs20.x'
    })
}