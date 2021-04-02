import {Databasedswitch, DataConditions} from "./model/workflow";


export class DatabasedswitchBuilder {


    // @ts-ignore
    private model: Databasedswitch = {
        type: "switch"
    }


    withName(value: string): DatabasedswitchBuilder {
        this.model.name = value;
        return this;
    }

    withDataConditions(value: DataConditions): DatabasedswitchBuilder {
        this.model.dataConditions = value;
        return this;
    }

    build() {
        return this.model;
    }

}

