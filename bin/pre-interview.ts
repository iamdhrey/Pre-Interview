#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { PreInterviewStack } from "../lib/pre-interview-stack";
import { ApiStack } from "../lib/Api-gateway";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import { DataStack } from "../lib/DynamoDB";

const app = new cdk.App();
const dataStack = new DataStack(app, "DataStack");
const lambdaStack = new PreInterviewStack(app, "PreInterviewStack", {
  newTable: dataStack.newTable,
});
new ApiStack(app, "ApiStack", {
  HandlerLambdaIntergration: lambdaStack.handlerLambdaIntegration,
});
