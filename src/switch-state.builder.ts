import {Databasedswitch} from "./model/workflow";
import {DataConditionsType} from "./model/types";


export class DatabasedswitchBuilder {


    // @ts-ignore
    private model: Databasedswitch = {
        type: "switch"
    }


    withName(value: string): DatabasedswitchBuilder {
        this.model.name = value;
        return this;
    }

    withDataConditions(value: DataConditionsType): DatabasedswitchBuilder {
        this.model.dataConditions = value;
        return this;
    }

    build() {
        return this.model;
    }

}

