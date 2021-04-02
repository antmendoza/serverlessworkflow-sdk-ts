import {ActionMode, Actions, OperationState} from "./model/workflow";

export class OperationStateBuilder {

    private model: OperationState = {
        type: "operation"
    }

    withName(value: string): OperationStateBuilder {
        this.model.name = value;
        return this;

    }


    withActionMode(value: ActionMode): OperationStateBuilder {
        this.model.actionMode = value;
        return this;

    }

    withEnd(value: boolean):OperationStateBuilder {
        this.model.end = value;
        return this;
    }

    withActions(value: Actions): OperationStateBuilder{
        this.model.actions = value;
        return this;
    }

    build(): OperationState{
        return this.model;
    }

}
