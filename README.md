# Welcome to your CDK TypeScript project

This is Simple WooCommerce Event driven(Serverless) Application that deals with user request and response from the client side through a cloudfront to reduce low latency and help with caching through an API-gateway that invoke a lambda to GET resquest from the database and return response and send all logs to cloudwatch to easily access logs and give visibility to Invocation, concurrency, throttling and errors.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk deploy` deploy this stack to your default AWS account/region
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template

## EXCERCISE

The Application Engineering team has been developing a custom WooCommerce-based product which will need to be deployed for this initiative. As a member of the DevOps Engineering team your job will be to create the cloud-based infrastructure for supporting this deployment. You will need to create a reference architecture and implement it using modern IaC techniques with documentation for 3-tier application. You can use serverless or container technology or VMs to implement this.
