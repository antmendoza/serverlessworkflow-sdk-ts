import {FunctionType} from "./types";

export class FunctionBuilder {
    // @ts-ignore
    private model: FunctionType = {};

    withName(value: string): FunctionBuilder {
        this.model.name = value;
        return this;
    }

    withOperation(value: string): FunctionBuilder {
        this.model.operation = value;
        return this;
    }

    build() {
        //TODO validate
        return this.model;
    }
}
