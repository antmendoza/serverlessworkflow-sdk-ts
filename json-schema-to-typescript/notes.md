        /*
        Workflow workflow = new Workflow()
                .withId("test-workflow")
                .withVersion("1.0")
                .withStart(new Start().withStateName("MyDelayState"))
                .withStates(Arrays.asList(
                        new DelayState().withName("MyDelayState").withType(DefaultState.Type.DELAY)
                                .withTimeDelay("PT1M")
                                .withEnd(
                                        new End().withTerminate(true)
                                )
                ));

);

{
"id": "greeting",
"version": "1.0",
"name": "Greeting Workflow",
"description": "Greet Someone",
"start": "Greet",
"functions": [
{
"name": "greetingFunction",
"operation": "file://myapis/greetingapis.json#greeting"
}
],
"states":[
{
"name":"Greet",
"type":"operation",
"actions":[
{
"functionRef": {
"refName": "greetingFunction",
"arguments": {
"name": "${ .person.name }"
} },
"actionDataFilter": {
"dataResultsPath": "${ .greeting }"
} }
],
"end": true }
]
}
*/