#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { PreInterviewStack } from "../lib/pre-interview-stack";

const app = new cdk.App();
new PreInterviewStack(app, "PreInterviewStack");
