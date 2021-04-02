import {PathLike} from "fs";
import {Workflow} from "./model/workflow";
import * as fs from "fs";

export class BaseWorkflow {
    fromSource(path: PathLike): Workflow {
        return JSON.parse(fs.readFileSync(path).toLocaleString()) as Workflow;
    }
}
