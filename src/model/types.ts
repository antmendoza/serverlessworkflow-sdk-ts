import {
    CallbackState,
    DelayState, Enddatacondition,
    EventState, ForEachState,
    InjectState,
    OperationState,
    ParallelState,
    SubFlowState,
    SwitchState, Transitiondatacondition
} from "./workflow";

export type FunctionRefImplArguments = {
    [k: string]: unknown;
};

export type FunctionRefImpl = {
    /**
     * Name of the referenced function
     */
    refName: string;
    /**
     * Function arguments
     */
    arguments?: FunctionRefImplArguments;
};
export type FunctionRef = | string
    | FunctionRefImpl;

export  type EventRef = {
    /**
     * Reference to the unique name of a 'produced' event definition
     */
    triggerEventRef: string;
    /**
     * Reference to the unique name of a 'consumed' event definition
     */
    resultEventRef: string;
    /**
     * If string type, an expression which selects parts of the states data output to become the data (payload) of the event referenced by 'triggerEventRef'. If object type, a custom object to become the data (payload) of the event referenced by 'triggerEventRef'.
     */
    data?:
        | string
        | {
        [k: string]: unknown;
    };
    /**
     * Add additional extension context attributes to the produced event
     */
    contextAttributes?: {
        [k: string]: string;
    };
};

export type Action = {
    /**
     * Unique action definition name
     */
    name?: string;
    functionRef: FunctionRef;
    /**
     * References a 'trigger' and 'result' reusable event definitions
     */
    eventRef: EventRef;
    /**
     * Time period to wait for function execution to complete
     */
    timeout?: string;
    /**
     * Action data filter
     */
    actionDataFilter?: {
        /**
         * Workflow expression that selects state data that the state action can use
         */
        fromStateData?: string;
        /**
         * Workflow expression that filters the actions data results
         */
        results?: string;
        /**
         * Workflow expression that selects a state data element to which the action results should be added/merged into. If not specified, denote, the top-level state data element
         */
        toStateData?: string;
    };
};
export type Actions = Action[];


export type Function = {
    /**
     * Unique function name
     */
    name: string;
    /**
     * If type is `rest`, <path_to_openapi_definition>#<operation_id>. If type is `rpc`, <path_to_grpc_proto_file>#<service_name>#<service_method>. If type is `expression`, defines the workflow expression.
     */
    operation: string;
    /**
     * Defines the function type. Is either `rest`, `rpc` or `expression`. Default is `rest`
     */
    type?: "rest" | "rpc" | "expression";
};

export type Functions = | string
    | [
    Function,
    ...Function[]
];
export type States = [
    (
        | DelayState
        | EventState
        | OperationState
        | ParallelState
        | SwitchState
        | SubFlowState
        | InjectState
        | ForEachState
        | CallbackState
        ),
    ...(
        | DelayState
        | EventState
        | OperationState
        | ParallelState
        | SwitchState
        | SubFlowState
        | InjectState
        | ForEachState
        | CallbackState
        )[]
];

export type StateDataFilter = {
    /**
     * Workflow expression to filter the state data input
     */
    input?: string;
    /**
     * Workflow expression that filters the state data output
     */
    output?: string;
};

export type End = | boolean
    | {
    /**
     * If true, completes all execution flows in the given workflow instance
     */
    terminate?: boolean;
    /**
     * Defines events that should be produced
     */
    produceEvents?: {
        /**
         * References a name of a defined event
         */
        eventRef: string;
        /**
         * If String, expression which selects parts of the states data output to become the data of the produced event. If object a custom object to become the data of produced event.
         */
        data?:
            | string
            | {
            [k: string]: unknown;
        };
        /**
         * Add additional event extension context attributes
         */
        contextAttributes?: {
            [k: string]: string;
        };
    }[];
    /**
     * If set to true, triggers workflow compensation. Default is false
     */
    compensate?: boolean;
};

export type DataConditions = (Transitiondatacondition | Enddatacondition)[];

export type ActionMode = "sequential" | "parallel";
