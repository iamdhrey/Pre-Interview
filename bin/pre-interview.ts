#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { PreInterviewStack } from "../lib/pre-interview-stack";
import { ApiStack } from "../lib/Api-gateway";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";

const app = new cdk.App();
const lambdaStack = new PreInterviewStack(app, "PreInterviewStack");
new ApiStack(app, "ApiStack", {
  HandlerLambdaIntergration: lambdaStack.handlerLambdaIntegration,
});
