import {FunctionRefImplArgumentsType, FunctionRefImplType} from "./types";

export class FunctionRefImplBuilder {
    // @ts-ignore
    private model: FunctionRefImplType = {};


    withRefName(value: string): FunctionRefImplBuilder {
        this.model.refName = value;
        return this;

    }

    withArguments(value: FunctionRefImplArgumentsType): FunctionRefImplBuilder {
        this.model.arguments = value;
        return this;
    }

    build(): FunctionRefImplType {
        return this.model;
    }

}
