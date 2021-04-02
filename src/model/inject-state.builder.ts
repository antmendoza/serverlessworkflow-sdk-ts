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
