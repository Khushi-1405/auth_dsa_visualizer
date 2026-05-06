function* binarySearchGenerator(arr, target) {
    const steps = [];
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        steps.push({
            array: [...arr],
            left,
            right,
            mid,
            found: arr[mid] === target ? mid : -1,
            target
        });
        yield steps[steps.length - 1];
        
        if (arr[mid] === target) {
            return steps;
        }
        
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    steps.push({
        array: [...arr],
        left: -1,
        right: -1,
        mid: -1,
        found: -1,
        target
    });
    return steps;
}

export { binarySearchGenerator };