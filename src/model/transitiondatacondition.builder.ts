import {Transitiondatacondition} from "./workflow";

export class TransitiondataconditionBuilder {

    // @ts-ignore
    private model: Transitiondatacondition = {};

    withCondition(condition: string): TransitiondataconditionBuilder {
        this.model.condition = condition;
        return this;

    }


    withTransition(value: string): TransitiondataconditionBuilder {
        this.model.transition = value;
        return this;
    }

    build(): Transitiondatacondition {
        //TODO validate
        return this.model;
    }
}
