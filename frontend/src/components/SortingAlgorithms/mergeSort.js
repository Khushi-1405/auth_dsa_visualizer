export function* mergeSortGenerator(array) {
    const getArr = [...array];
    const sortedIndices = new Set();

    function* mergeSortHelper(left, right) {
        if (left >= right) return;
        let mid = Math.floor((left + right) / 2);
        yield* mergeSortHelper(left, mid);
        yield* mergeSortHelper(mid + 1, right);
        yield* merge(left, mid, right);
    }

    function* merge(left, mid, right) {
        let temp = [];
        let i = left, j = mid + 1;

        while (i <= mid && j <= right) {
            yield {
                array: [...getArr],
                compare: [i, j],
                swap: [],
                sorted: [...sortedIndices]
            };
            if (getArr[i] <= getArr[j]) {
                temp.push(getArr[i++]);
            } else {
                temp.push(getArr[j++]);
            }
        }

        while (i <= mid) temp.push(getArr[i++]);
        while (j <= right) temp.push(getArr[j++]);

        for (let k = left; k <= right; k++) {
            getArr[k] = temp[k - left];
            yield {
                array: [...getArr],
                compare: [],
                swap: [k],
                sorted: [...sortedIndices]
            };
        }

        for (let k = left; k <= right; k++) {
            sortedIndices.add(k);
        }
    }

    yield* mergeSortHelper(0, getArr.length - 1);

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