function trackFunction() {
    let invocations = 0;
    let instances = 0;

    function createInstance() {
        instances++;
        return function() {
            invocations++;
            console.log(`Function has been invoked ${invocations} times.`);
        };
    }

    return {
        createInstance,
        getInvocations: () => invocations,
        getInstances: () => instances
    };
}

const tracker = trackFunction();
const instance1 = tracker.createInstance();
const instance2 = tracker.createInstance();

instance1(); // Output: Function has been invoked 1 times.
instance1(); // Output: Function has been invoked 2 times.
instance2(); // Output: Function has been invoked 3 times.

console.log(`Total invocations: ${tracker.getInvocations()}`); // Output: Total invocations: 3
console.log(`Total instances: ${tracker.getInstances()}`); // Output: Total instances: 2
