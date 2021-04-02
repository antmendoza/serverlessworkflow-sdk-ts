/*
 * Copyright 2021-Present The Serverless Workflow Specification Authors
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import {OperationState} from "./workflow";
import {ActionModeType, ActionsType} from "./types";

export class OperationStateBuilder {

    private model: OperationState = {
        type: "operation"
    }

    withName(value: string): OperationStateBuilder {
        this.model.name = value;
        return this;

    }


    withActionMode(value: ActionModeType): OperationStateBuilder {
        this.model.actionMode = value;
        return this;

    }

    withEnd(value: boolean): OperationStateBuilder {
        this.model.end = value;
        return this;
    }

    withActions(value: ActionsType): OperationStateBuilder {
        this.model.actions = value;
        return this;
    }

    build(): OperationState {
        return this.model;
    }

}
