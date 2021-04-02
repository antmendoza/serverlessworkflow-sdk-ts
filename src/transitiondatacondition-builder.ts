import {Transitiondatacondition} from "./model/workflow";

export class TransitiondataconditionBuilder {

    // @ts-ignore
    private model: Transitiondatacondition = {};

    withCondition(condition: string): TransitiondataconditionBuilder {
        this.model.condition = condition;
        return this;

    }

    build(): Transitiondatacondition {
        //TODO validate
        return this.model;
    }

    withTransition(value: string): TransitiondataconditionBuilder {

        this.model.transition = value;
        return this;
    }
}
