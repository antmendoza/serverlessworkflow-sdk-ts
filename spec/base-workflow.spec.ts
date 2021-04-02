import {BaseWorkflow} from "./base.workflow";
import {Workflow} from "../src/model/workflow";


describe("base-workflow", () => {


    it('should generate Workflow object', function () {
        const workflow: Workflow = new BaseWorkflow().fromSource(__dirname + "/base-workflow-hello-world.json");

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
