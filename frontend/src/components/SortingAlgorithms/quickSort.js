export function* quickSortGenerator(array) {
    const getArr = [...array];
    const sortedIndices = new Set();

    function* quickSortHelper(low, high) {
        if (low < high) {
            let pivotIndex = yield* partition(low, high);
            yield* quickSortHelper(low, pivotIndex - 1);
            yield* quickSortHelper(pivotIndex + 1, high);
        }
    }

    function* partition(low, high) {
        let pivot = getArr[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            yield {
                array: [...getArr],
                compare: [j, high],
                swap: [],
                sorted: [...sortedIndices]
            };
            if (getArr[j] < pivot) {
                i++;
                [getArr[i], getArr[j]] = [getArr[j], getArr[i]];
                yield {
                    array: [...getArr],
                    compare: [],
                    swap: [i, j],
                    sorted: [...sortedIndices]
                };
            }
        }
        [getArr[i + 1], getArr[high]] = [getArr[high], getArr[i + 1]];
        sortedIndices.add(i + 1);
        yield {
            array: [...getArr],
            compare: [],
            swap: [i + 1, high],
            sorted: [...sortedIndices]
        };
        return i + 1;
    }

    yield* quickSortHelper(0, getArr.length - 1);

    for (let i = 0; i < getArr.length; i++) {
        sortedIndices.add(i);
    }
    yield {
        array: [...getArr],
        compare: [],
        swap: [],
        sorted: [...sortedIndices]
    };
}