import {DefaultTransitionType} from "./model/types";
import {Transition} from "./model/workflow";

export class DefaultTransitionTypeBuilder {
    // @ts-ignore
    private model: DefaultTransitionType = {};

    withTransition(value: Transition): DefaultTransitionTypeBuilder {
        this.model.transition = value;
        return this;

    }

    build(): DefaultTransitionType {
        //TODO validate either transition or end
        return this.model;
    }
}
