import * as cdk from 'aws-cdk-lib';
import { CodePipeline } from 'aws-cdk-lib/aws-events-targets';
import { Construct } from 'constructs';


export class CicdPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'Mypipeline', {
      pipelineName: 'Mypipeline',
    })


  }
}
