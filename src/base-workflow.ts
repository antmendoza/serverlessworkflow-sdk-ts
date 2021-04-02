import * as fs from "fs";
import {PathLike} from "fs";
import {Workflow} from "./model/workflow";
import * as yaml from "js-yaml";

export class BaseWorkflow {

    fromSource(filePath: PathLike): Workflow {


        if (!this.isJSON(filePath) && !this.isYML(filePath)) {
            throw new Error("File format not supported")
        }

        const fileAsString = fs.readFileSync(filePath).toLocaleString();
        if (this.isJSON(filePath)) {
            return JSON.parse(fileAsString) as Workflow;
        }

        return yaml.load(fileAsString) as Workflow;

    }

    private isYML(filePath: PathLike) {
        return filePath.toString().endsWith("yaml") || filePath.toString().endsWith("yml");
    }

    private isJSON(filePath: PathLike) {
        return filePath.toString().endsWith("json");
    }
}
