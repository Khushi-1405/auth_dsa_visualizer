export function* bubbleSortGenerator(array) {
    const getArr = [...array];
    const n = getArr.length;
    const sortedIndices = new Set();

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            // Red color when element compared
            yield {
                array: [...getArr],
                compare: [j, j + 1],
                swap: [],
                sorted: [...sortedIndices]
            };
            if (getArr[j] > getArr[j + 1]) {
                [getArr[j], getArr[j + 1]] = [getArr[j + 1], getArr[j]];
                swapped = true;
                // Orange color when element Swapped
                yield {
                    array: [...getArr],
                    compare: [],
                    swap: [j, j + 1],
                    sorted: [...sortedIndices]
                }
            }
        }

        // Green color when each element sorted
        sortedIndices.add(n - i - 1);
        yield {
            array: [...getArr],
            compare: [],
            swap: [],
            sorted: [...sortedIndices]
        };
        if (!swapped)
            break;

    }
    // final steps (all elements are sortes)
    for(let i = 0; i<n; i++){
        sortedIndices.add(i);
    }
    yield {
        array: [...getArr],
        compare: [],
        swap: [],
        sorted: [...sortedIndices]
    };
}