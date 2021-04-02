import {FunctionRefImpl, FunctionRefImplArguments} from "./model/types";

export class FunctionRefImplBuilder {
    // @ts-ignore
    private model: FunctionRefImpl = {};


    withRefName(value: string): FunctionRefImplBuilder {
        this.model.refName = value;
        return this;

    }

    withArguments(value: FunctionRefImplArguments): FunctionRefImplBuilder {
        this.model.arguments = value;
        return this;
    }

    build(): FunctionRefImpl{
        return this.model;
    }

}
