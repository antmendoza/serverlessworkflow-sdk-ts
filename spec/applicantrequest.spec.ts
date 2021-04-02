import {WorkflowBuilder} from "../src/workflow-builder";
import * as fs from "fs";
import {Workflow} from "../src/model/workflow";
import {FunctionBuilder} from "../src/function-builder";
import {DatabasedswitchBuilder} from "../src/switch-state-builder";
import {TransitiondataconditionBuilder} from "../src/transitiondatacondition-builder";

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
                    .build()])
            .build();


        const expected = JSON.parse(fs.readFileSync(__dirname + "/applicantrequest.json").toLocaleString()) as Workflow;
        expect(workflow).toEqual(expected);

    });


})
