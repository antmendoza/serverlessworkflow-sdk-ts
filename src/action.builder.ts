import {Action, FunctionRef} from "./model/workflow";

export class ActionBuilder {
    // @ts-ignore
    private model: Action = {};

    build(): Action{
        //TODO validate either functionRef or eventRef
        return this.model;
    }

    withFunctionRef(value: FunctionRef): ActionBuilder{
        this.model.functionRef = value;
        return this;
    }

}
