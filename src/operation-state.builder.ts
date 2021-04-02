import {OperationState} from "./model/workflow";
import {ActionModeType, ActionsType} from "./model/types";

export class OperationStateBuilder {

    private model: OperationState = {
        type: "operation"
    }

    withName(value: string): OperationStateBuilder {
        this.model.name = value;
        return this;

    }


    withActionMode(value: ActionModeType): OperationStateBuilder {
        this.model.actionMode = value;
        return this;

    }

    withEnd(value: boolean):OperationStateBuilder {
        this.model.end = value;
        return this;
    }

    withActions(value: ActionsType): OperationStateBuilder{
        this.model.actions = value;
        return this;
    }

    build(): OperationState{
        return this.model;
    }

}
