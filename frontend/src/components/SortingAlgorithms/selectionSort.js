export function* selectionSortGenerator(array) {
    const getArr = [...array];
    const n = getArr.length;
    const sortedIndices = new Set();

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            // Red color when element compared
            yield {
                array: [...getArr],
                compare: [minIndex, j],
                swap: [],
                sorted: [...sortedIndices]
            };
            if (getArr[j] < getArr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [getArr[i], getArr[minIndex]] = [getArr[minIndex], getArr[i]];
            // Orange color when element Swapped
            yield {
                array: [...getArr],
                compare: [],
                swap: [i, minIndex],
                sorted: [...sortedIndices]
            }
        }

        // Green color when each element sorted
        sortedIndices.add(i);
        yield {
            array: [...getArr],
            compare: [],
            swap: [],
            sorted: [...sortedIndices]
        };
    }
    // final steps (all elements are sortes)
    sortedIndices.add(n - 1);
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