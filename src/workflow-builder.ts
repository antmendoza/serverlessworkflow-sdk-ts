import {
    Functions,
    States,
    Workflow
} from "./workflow";


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

    withFunctions(functions: Functions): WorkflowBuilder {
        this.model.functions = functions;
        return this;
    }

    build(): Workflow {
        //TODO validate
        return this.model;
    }


    withStates(value: States): WorkflowBuilder {
        this.model.states = value;
        return this;
    }
}
