import {Builder} from "builder-pattern";
import {StartdefWorkflowState, Workflow} from "../src/workflow";

describe("", () => {


    it('should generate json', function () {


        const workflow = Builder<Workflow>()
            .id("greeting")
            .version("1.0")
            .name("Greeting Workflow")
            .description("Greet Someone")
            .start(Builder<StartdefWorkflowState>().schedule("").build())
            .functions([
                {
                    name: "greetingFunction",
                    operation: "file://myapis/greetingapis.json#greeting"
                }
            ])
            .states([
                {
                    "name": "Greet",
                    "type": "operation",
                    actions: [

                        {
                            "functionRef": {
                                "refName": "greetingFunction",
                                "arguments": {
                                    "name": "${ .person.name }"
                                }
                            },
                            "actionDataFilter": {
                                "dataResultsPath": "${ .greeting }"
                            }
                        }
                    ],
                    "end": true
                }
            ])
            .build();


        expect(JSON.stringify(workflow)).toEqual(expected);

    });


    const expected =
        JSON.stringify({
            "id": "greeting",
            "version": "1.0",
            "name": "Greeting Workflow",
            "description": "Greet Someone",
            "start": "Greet",
            "functions": [
                {
                    "name": "greetingFunction",
                    "operation": "file://myapis/greetingapis.json#greeting"
                }
            ],
            "states": [
                {
                    "name": "Greet",
                    "type": "operation",
                    "actions": [
                        {
                            "functionRef": {
                                "refName": "greetingFunction",
                                "arguments": {
                                    "name": "${ .person.name }"
                                }
                            },
                            "actionDataFilter": {
                                "dataResultsPath": "${ .greeting }"
                            }
                        }
                    ],
                    "end": true
                }
            ]
        });
})