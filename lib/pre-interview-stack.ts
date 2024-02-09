import * as cdk from "aws-cdk-lib";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import {
  Runtime,
  Function as LambdaFunction,
  Code,
} from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import { join } from "path";

export class PreInterviewStack extends cdk.Stack {
  public readonly handlerLambdaIntegration: LambdaIntegration;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handlerLambda = new LambdaFunction(this, "Bmo-Pre-interview", {
      runtime: Runtime.NODEJS_16_X,
      memorySize: 512,
      handler: "handler.main",
      code: Code.fromAsset(join(__dirname, "../lambda")),
    });

    this.handlerLambdaIntegration = new LambdaIntegration(handlerLambda);
  }
}
