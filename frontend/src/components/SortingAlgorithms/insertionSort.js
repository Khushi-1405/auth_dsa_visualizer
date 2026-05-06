export function* insertionSortGenerator(array) {
    const getArr = [...array];
    const sortedIndices = new Set();

    for (let i = 1; i < getArr.length; i++) {
        let key = getArr[i];
        let j = i - 1;

        while (j >= 0 && getArr[j] > key) {
            yield {
                array: [...getArr],
                compare: [j, j + 1],
                swap: [j, j + 1],
                sorted: [...sortedIndices]
            };
            getArr[j + 1] = getArr[j];
            j--;
        }
        getArr[j + 1] = key;

        yield {
            array: [...getArr],
            compare: [],
            swap: [j + 1],
            sorted: [...sortedIndices]
        };

        sortedIndices.add(i);
    }

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
