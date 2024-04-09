import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import  {Topic} from "aws-cdk-lib/aws-sns";

export class CdkTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkTestQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    new Topic(this, "test", {});
  }
}
