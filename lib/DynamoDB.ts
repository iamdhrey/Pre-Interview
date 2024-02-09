import * as cdk from "aws-cdk-lib";
import { StackProps } from "aws-cdk-lib";
import { AttributeType, ITable, Table } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

export class DataStack extends cdk.Stack {
  public readonly newTable: ITable;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.newTable = new Table(this, "DataTable", {
      partitionKey: {
        name: "id",
        type: AttributeType.STRING,
      },
      tableName: "dynamoTable",
    });
  }
}
