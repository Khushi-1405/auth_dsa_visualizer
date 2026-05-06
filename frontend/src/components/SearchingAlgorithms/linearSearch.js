function* linearSearchGenerator(arr, target) {
    const steps = [];
    
    for (let i = 0; i < arr.length; i++) {
        steps.push({
            array: [...arr],
            current: i,
            found: arr[i] === target ? i : -1,
            target
        });
        yield steps[steps.length - 1];
        
        if (arr[i] === target) {
            return steps;
        }
    }
    
    steps.push({
        array: [...arr],
        current: -1,
        found: -1,
        target
    });
    return steps;
}

export { linearSearchGenerator };