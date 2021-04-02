import {
    Workflow
} from "./model/workflow";
import {FunctionsType, StatesType} from "./model/types";


export class WorkflowBuilder {
    private model: Workflow = {};

    constructor() {
    }

    withId(id: string): WorkflowBuilder {
        this.model.id = id;
        return this;
    }


    withVersion(version: string): WorkflowBuilder {
        this.model.version = version;
        return this;
    }


    withName(name: string): WorkflowBuilder {
        this.model.name = name;
        return this;

    }

    withDescription(description: string): WorkflowBuilder {
        this.model.description = description;
        return this;

    }

    withStart(start: string): WorkflowBuilder {
        this.model.start = start;
        return this;
    }

    withFunctions(functions: FunctionsType): WorkflowBuilder {
        this.model.functions = functions;
        return this;
    }

    build(): Workflow {
        //TODO validate
        return this.model;
    }


    withStates(value: StatesType): WorkflowBuilder {
        this.model.states = value;
        return this;
    }
}
