import {ActionType, FunctionRefType} from "./types";

export class ActionBuilder {
    // @ts-ignore
    private model: ActionType = {};

    build(): ActionType{
        //TODO validate either functionRef or eventRef
        return this.model;
    }

    withFunctionRef(value: FunctionRefType): ActionBuilder{
        this.model.functionRef = value;
        return this;
    }

}
