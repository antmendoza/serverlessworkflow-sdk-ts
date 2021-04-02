import {SubFlowState} from "./workflow";

export class SubFlowStateBuilder {
    private model: SubFlowState = {
        type: "subflow"
    };




    withName(value: string): SubFlowStateBuilder {
        this.model.name = value;
        return this;
    }

    withWorkflowId(value: string): SubFlowStateBuilder {
        this.model.workflowId = value;
        return this;
    }

    withEnd(value: boolean): SubFlowStateBuilder {
        this.model.end = value;
        return this;

    }

    build(): SubFlowState {
        return this.model;
    }

}
