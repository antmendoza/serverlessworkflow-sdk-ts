import {BaseWorkflow} from "../src/base-workflow";
import {Workflow} from "../src/model/workflow";
import {WorkflowBuilder} from "../src/model/workflow.builder";
import {InjectStateBuilder} from "../src/model/inject-state.builder";


describe("base-workflow fromSource", () => {

    const testData = [
        {
            description: "should generate workflow object from json file",
            file: "/base-workflow-hello-world.json",

        },
        {
            description: "should generate workflow object from yaml file",
            file: "/base-workflow-hello-world.yaml",

        },
        {
            description: "should generate workflow object from yml file",
            file: "/base-workflow-hello-world.yml",

        }
    ];
    testData.forEach(test => {

        it(test.description, function () {
            const workflow: Workflow = BaseWorkflow.fromSource(__dirname + test.file);

            expect(workflow.id).toBe("helloworld");
            expect(workflow.version).toBe("1.0");
            expect(workflow.name).toBe("Hello World Workflow");
            expect(workflow.description).toBe("Inject Hello World");
            expect(workflow.start).toBe("Hello State");
            expect(workflow).toEqual({
                "id": "helloworld",
                "version": "1.0",
                "name": "Hello World Workflow",
                "description": "Inject Hello World",
                "start": "Hello State",
                "states": [
                    {
                        "name": "Hello State",
                        "type": "inject",
                        "data": {
                            "result": "Hello World!"
                        },
                        "end": true
                    }
                ]
            })
        });

    })


    it('should throws error if format is not json or yaml', () => {
        expect(() => {
                BaseWorkflow.fromSource(__dirname + "/base-workflow-hello-world.xxx")
            }
        ).toThrow(new Error("File format not supported"));


    });



});


describe("base-workflow", () => {




    it('should generate JSON from workflow object', () => {
        const jsonWorkflow: string = BaseWorkflow.toJSON(new WorkflowBuilder()
            .withId("helloworld")
            .withVersion("1.0")
            .withName("Hello World Workflow")
            .withDescription("Inject Hello World")
            .withStart("Hello State")
            .withStates([new InjectStateBuilder()
                .withName("Hello State")
                .withData({
                    "result": "Hello World!"
                })
                .withEnd(true).build()])
            .build());

        expect(jsonWorkflow).toBe("{" +
            "\"id\":\"helloworld\"," +
            "\"version\":\"1.0\"," +
            "\"name\":\"Hello World Workflow\"," +
            "\"description\":\"Inject Hello World\"," +
            "\"start\":\"Hello State\"," +
            "\"states\":[" +
            "{" +
            "\"type\":\"inject\"," +
            "\"name\":\"Hello State\"," +
            "\"data\":{" +
            "\"result\":\"Hello World!\"" +
            "}," +
            "\"end\":true" +
            "}" +
            "]" +
            "}")

    });


    it('should generate YAML from workflow object', () => {
        const yamlWorkflow: string = BaseWorkflow.toYaml(new WorkflowBuilder()
            .withId("helloworld")
            .withVersion("1.0")
            .withName("Hello World Workflow")
            .withDescription("Inject Hello World")
            .withStart("Hello State")
            .withStates([new InjectStateBuilder()
                .withName("Hello State")
                .withData({
                    "result": "Hello World!"
                })
                .withEnd(true).build()])
            .build());

        expect(yamlWorkflow).toBe("id: helloworld\n" +
            "version: '1.0'\n" +
            "name: Hello World Workflow\n" +
            "description: Inject Hello World\n" +
            "start: Hello State\n" +
            "states:\n" +
            "  - type: inject\n" +
            "    name: Hello State\n" +
            "    data:\n" +
            "      result: Hello World!\n" +
            "    end: true\n")

    });
})
