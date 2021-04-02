import {WorkflowBuilder} from "../src/workflow.builder";
import * as fs from "fs";
import {Workflow} from "../src/model/workflow";
import {FunctionBuilder} from "../src/function.builder";
import {DatabasedswitchBuilder} from "../src/switch-state.builder";
import {TransitiondataconditionBuilder} from "../src/transitiondatacondition.builder";
import {OperationStateBuilder} from "../src/operation-state.builder";
import {SubFlowStateBuilder} from "../src/sub-flow-state.builder";
import {ActionBuilder} from "../src/action.builder";
import {FunctionRefImplBuilder} from "../src/function-ref-impl.builder";

describe("applicationrequest workflow", () => {


    it('should generate json', function () {

        const workflow = new WorkflowBuilder()
            .withId("applicantrequest")
            .withVersion("1.0")
            .withName("Applicant Request Decision Workflow")
            .withDescription("Determine if applicant request is valid")
            .withStart("CheckApplication")
            .withFunctions([new FunctionBuilder()
                .withName("sendRejectionEmailFunction")
                .withOperation("http://myapis.org/applicationapi.json#emailRejection")
                .build()])
            .withStates([
                new DatabasedswitchBuilder()
                    .withName("CheckApplication")
                    .withDataConditions(
                        [new TransitiondataconditionBuilder()
                            .withCondition("${ .applicants | .age >= 18 }")
                            .withTransition("StartApplication")
                            .build(),
                            new TransitiondataconditionBuilder()
                                .withCondition("${ .applicants | .age < 18 }")
                                .withTransition("RejectApplication")
                                .build()])
                    .build(),
                new SubFlowStateBuilder().withName("StartApplication").withWorkflowId("startApplicationWorkflowId")
                    .withEnd(true)
                    .build(),
                new OperationStateBuilder()
                    .withName("RejectApplication")
                    .withActionMode("sequential")
                    .withEnd(true)
                    .withActions([
                        new ActionBuilder().withFunctionRef(
                            new FunctionRefImplBuilder()
                                .withRefName("sendRejectionEmailFunction")
                                .withArguments({ applicant: '${ .applicant }' })
                            .build()
                        )
                            .build()
                    ])
                    .build()
            ])
            .build();


        const expected = JSON.parse(fs.readFileSync(__dirname + "/applicantrequest.json").toLocaleString()) as Workflow;
        expect(workflow).toEqual(expected);

    });


})
