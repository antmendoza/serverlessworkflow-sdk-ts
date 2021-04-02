import {Databasedswitch, DataConditionsDef} from "./workflow";


export class DatabasedswitchBuilder {


    // @ts-ignore
    private model: Databasedswitch = {
        type: "switch"
    }


    withName(value: string): DatabasedswitchBuilder {
        this.model.name = value;
        return this;
    }

    withDataConditions(value: DataConditionsDef): DatabasedswitchBuilder {
        this.model.dataConditions = value;
        return this;
    }

    build() {
        return this.model;
    }

    withDefault(value: { [p: string]: unknown } = value) {
        this.model.default = value;
        return this;
    }
}

