import {BaseWorkflow} from "../src/base-workflow";
import {Workflow} from "../src/model/workflow";


describe("base-workflow", () => {


    it('should generate workflow object from json file', function () {
        const workflow: Workflow = new BaseWorkflow().fromSource(__dirname + "/base-workflow-hello-world.json");

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




    xit('should generate workflow object from yaml file', function () {
        const workflow: Workflow = new BaseWorkflow().fromSource(__dirname + "/base-workflow-hello-world.yaml");

        expect(workflow.id).toBe("helloworld");
        expect(workflow.version).toBe("1.0");
        expect(workflow.name).toBe("Hello World Workflow");
        expect(workflow.description).toBe("Inject Hello World");
        expect(workflow.start).toBe("Hello State");

    });


})
