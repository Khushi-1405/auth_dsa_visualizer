import { bubbleSortGenerator } from './SortingAlgorithms/bubbleSort.js';
import { selectionSortGenerator } from './SortingAlgorithms/selectionSort.js'
import { insertionSortGenerator } from './SortingAlgorithms/insertionSort.js'
import { mergeSortGenerator } from './SortingAlgorithms/mergeSort.js'
import { quickSortGenerator } from './SortingAlgorithms/quickSort.js'
import { linearSearchGenerator } from './SearchingAlgorithms/linearSearch.js'
import { binarySearchGenerator } from './SearchingAlgorithms/binarySearch.js'

const algorithmGenerator = {
    "Bubble Sort": bubbleSortGenerator,
    "Selection Sort": selectionSortGenerator,
    "Insertion Sort": insertionSortGenerator,
    "Merge Sort": mergeSortGenerator,
    "Quick Sort": quickSortGenerator,
    "Linear Search": linearSearchGenerator,
    "Binary Search": binarySearchGenerator,
}

const handleAlgorithm = {
    initializeSteps: (parsedArray, algorithm, setSteps, setCurrentStep, setIsPlaying,searchTarget=null) => {
        if (!algorithm) return;
        setSteps([]);
        setCurrentStep(0);
        setIsPlaying(false);

        let generator = algorithmGenerator[algorithm];
        if (!generator) return; 

        const allSteps = [];
        const gen = searchTarget!==null? generator([...parsedArray],searchTarget) : generator([...parsedArray]);
        let result = gen.next();
        while (!result.done) {
            allSteps.push(result.value);
            result = gen.next();
        }
        setSteps(allSteps);
    },


    initializeRaceMode: (arr, algorithm, setRaceSteps, setRaceCurrentSteps, setIsPlaying,searchTarget=null) => {
        if (!algorithm || algorithm.length === 0) return;
        setIsPlaying(false);
        const raceSteps = {};
        const raceCurrentSteps = {};

        algorithm.forEach((algorithm) => {
            let generator = algorithmGenerator[algorithm];
            if (!generator) return;

            const allSteps = [];
            const gen = searchTarget!==null? generator([...arr],searchTarget) : generator([...arr]);
            let result = gen.next();
            while (!result.done) {
                allSteps.push(result.value);
                result = gen.next();
            }
            raceSteps[algorithm] = allSteps;
            raceCurrentSteps[algorithm] = 0;
        });
        setRaceSteps(raceSteps);
        setRaceCurrentSteps(raceCurrentSteps);
    },


    handleInput: (input, setArr, algorithm, setSteps, setCurrentStep, setIsPlaying,searchTarget=null) => {
        const parsedArray = input.split(" ").map(Number).filter((n) => !isNaN(n));
        if(algorithm.includes("Linear Search") || algorithm.includes("Binary Search")){
            const isSorted = parsedArray.every((val,i,array)=>i===0 || array[i-1]<=val);
                 if(!isSorted){
                const shouldSort = window.confirm(`The array must be sorted for ${algorithm}. Do you want to sort it now?`);
                if(shouldSort){
                    parsedArray.sort((a,b)=>a-b);
                }else{
                    alert("Please enter a sorted array for searching algorithms.");
                    return;
                }
            }

        }
        if (parsedArray.length > 0) {
            setArr(parsedArray);
            handleAlgorithm.initializeSteps(parsedArray, algorithm[0], setSteps, setCurrentStep, setIsPlaying,searchTarget);
        } else {
            alert("Please enter valid number separated by spaces like: 1 2 3");
        }
    },
};

export default handleAlgorithm;
