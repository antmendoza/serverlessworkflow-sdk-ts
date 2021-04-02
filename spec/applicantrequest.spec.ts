import {WorkflowBuilder} from "../src/model/workflow.builder";
import * as fs from "fs";
import {FunctionBuilder} from "../src/model/function.builder";
import {DatabasedswitchBuilder} from "../src/model/switch-state.builder";
import {TransitiondataconditionBuilder} from "../src/model/transitiondatacondition.builder";
import {OperationStateBuilder} from "../src/model/operation-state.builder";
import {SubFlowStateBuilder} from "../src/model/sub-flow-state.builder";
import {ActionBuilder} from "../src/model/action.builder";
import {FunctionRefImplBuilder} from "../src/model/function-ref-impl.builder";
import {DefaultTransitionTypeBuilder} from "../src/model/default-transition-type.builder";


describe("applicationrequest workflow", () => {


    it('should generate Workflow object', function () {

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
                    .withDefault(new DefaultTransitionTypeBuilder()
                        .withTransition(
                            "RejectApplication"
                        ).build())
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
                                .withArguments({applicant: '${ .applicant }'})
                                .build()
                        )
                            .build()
                    ])
                    .build()
            ])
            .build();


        const expected = JSON.parse(fs.readFileSync(__dirname + "/applicantrequest.json").toLocaleString()) as any;
        expect(workflow).toEqual(expected);

    });


})
