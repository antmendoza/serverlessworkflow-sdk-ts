import {Workflow} from "./workflow";
import {FunctionsType, StatesType} from "./types";


export class WorkflowBuilder {
    private model: Workflow = {};

    constructor() {
    }

    withId(value: string): WorkflowBuilder {
        this.model.id = value;
        return this;
    }


    withVersion(value: string): WorkflowBuilder {
        this.model.version = value;
        return this;
    }


    withName(value: string): WorkflowBuilder {
        this.model.name = value;
        return this;

    }

    withDescription(value: string): WorkflowBuilder {
        this.model.description = value;
        return this;

    }

    withStart(value: string): WorkflowBuilder {
        this.model.start = value;
        return this;
    }

    withFunctions(value: FunctionsType): WorkflowBuilder {
        this.model.functions = value;
        return this;
    }


    withStates(value: StatesType): WorkflowBuilder {
        this.model.states = value;
        return this;
    }


    build(): Workflow {
        //TODO validate
        return this.model;
    }
}
