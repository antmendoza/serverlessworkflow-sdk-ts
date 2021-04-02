import * as fs from "fs";
import {PathLike} from "fs";
import {Workflow} from "./model/workflow";
import * as yaml from "js-yaml";

export class BaseWorkflow {

    static fromSource(filePath: PathLike): Workflow {


        if (!this.isJSON(filePath) && !this.isYAML(filePath)) {
            throw new Error("File format not supported")
        }

        const fileAsString = fs.readFileSync(filePath).toLocaleString();
        if (this.isJSON(filePath)) {
            return JSON.parse(fileAsString) as Workflow;
        }

        return yaml.load(fileAsString) as Workflow;

    }


    static toJSON(workflow: Workflow):string {
        return JSON.stringify(workflow);
    }

    static toYaml(workflow: Workflow):string {
        return yaml.dump(workflow);
    }

    private static  isYAML(filePath: PathLike) {
        return filePath.toString().endsWith("yaml") || filePath.toString().endsWith("yml");
    }

    private static  isJSON(filePath: PathLike) {
        return filePath.toString().endsWith("json");
    }


}
