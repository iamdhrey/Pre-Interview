import * as cdk from "aws-cdk-lib";
import { StackProps } from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

interface ApiStackProps extends StackProps {
  HandlerLambdaIntergration: LambdaIntegration;
}

export class ApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);

    const api = new RestApi(this, "BmoApi");
    const bmoResource = api.root.addResource("request");
    bmoResource.addMethod("GET", props.HandlerLambdaIntergration);
  }
}
