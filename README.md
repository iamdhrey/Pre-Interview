![A simple Event Driven Serverless 3 Tier Architecture](bmotest.png)

# BMO Pre-Interview Event Driven CDK TypeScript project

This is Simple WooCommerce Event driven(Serverless) Application that deals with user request and response from the client side through an API-gateway that invoke a lambda to GET request from the database and return response and send all logs to cloudwatch to easily access logs and give visibility to Invocation, concurrency, throttling and errors.

## DOCUMENTATION

This is a high-level documentation that explains the workflow of this mini project and while i have decide to use this frame work for this project

- This project is an event driven(serverless) application that takes a request from a user to access a database and send a back a response

And the services use for this project includes

1. API-Gateway
2. AWS Lambda
3. DynamoDB - NoSql Database
4. That sends a logs to cloudwatch for mor visibility to invocation, concurrency, throttling and errors.

Reason for this architecture/framework is to scalable infrastructure, cost optimization, availability and a fault tolerant Environment.

## Useful commands

- `cdk bootstrap` Bootstrap all the necesary toolkit, metadata for cdk deployment
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` this emits the synthesized CloudFormation template to preview all resurces before creation
- `cdk destroy` this destroys the stack from the desired account

## EXCERCISE

The Application Engineering team has been developing a custom WooCommerce-based product which will need to be deployed for this initiative. As a member of the DevOps Engineering team your job will be to create the cloud-based infrastructure for supporting this deployment. You will need to create a reference architecture and implement it using modern IaC techniques with documentation for 3-tier application. You can use serverless or container technology or VMs to implement this.
