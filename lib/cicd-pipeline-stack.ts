import * as cdk from 'aws-cdk-lib';
import { Pipeline } from 'aws-cdk-lib/aws-codepipeline';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import {  Construct } from 'constructs';
import { PipelineStage } from './pipelineStage';


export class CicdPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Mypipeline', {
      pipelineName: 'Mypipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('Ntenguh1/MyCi-Cd-Pipeline', 'main'),
        commands: [
          'pwd',
//'cd MyCi-Cd-Pipeline',
          'npm ci',
          'npx cdk synth'
        ],
 //       primaryOutputDirectory: 'MyCi-Cd-Pipeline/cdk.out'
    })
      });

    const testStage = pipeline.addStage (new PipelineStage(this, 'PipelineTestStage',{
      stageName: 'test'
    }))
    

  }
}
