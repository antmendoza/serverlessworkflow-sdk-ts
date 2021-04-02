import {InjectState} from "./workflow";

export class InjectStateBuilder {
    private model: InjectState = {
        type: "inject"
    };



    withName(value: string): InjectStateBuilder {
        this.model.name = value;
        return this;

    }

    withData(value: any): InjectStateBuilder {
        this.model.data = value;
        return this;

    }

    withEnd(value: boolean) {
        this.model.end = value;
        return this;

    }

    build(): InjectState {
        return this.model;
    }
}
