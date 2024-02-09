import * as cdk from "aws-cdk-lib";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import { ITable } from "aws-cdk-lib/aws-dynamodb";
import {
  Runtime,
  Function as LambdaFunction,
  Code,
} from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import { join } from "path";

interface PreInterviewStackProps extends cdk.StackProps {
  newTable: ITable;
}

export class PreInterviewStack extends cdk.Stack {
  public readonly handlerLambdaIntegration: LambdaIntegration;

  constructor(scope: Construct, id: string, props: PreInterviewStackProps) {
    super(scope, id, props);

    const handlerLambda = new LambdaFunction(this, "Bmo-Pre-interview", {
      runtime: Runtime.NODEJS_16_X,
      memorySize: 512,
      handler: "handler.main",
      code: Code.fromAsset(join(__dirname, "./")),
      environment: {
        TABLE_NAME: props.newTable.tableName,
      },
    });

    this.handlerLambdaIntegration = new LambdaIntegration(handlerLambda);
  }
}
