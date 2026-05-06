import React from 'react';
import { Code } from 'lucide-react';

const pseudocodeData = {
    "Bubble Sort": {
        "code": `
1. What is Bubble Sort?
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

2. Advantages of Bubble Sort
✅ Simple to understand and implement.
✅ Works well for nearly sorted data.
✅ Requires no extra memory (in-place sorting).
3. Disadvantages of Bubble Sort
❌ Very slow for large datasets (O(n²)).
❌ Not efficient for real-world applications.
❌ Too many unnecessary swaps.
`,
    "timeComplexity": {
        "best": "O(n)",
        "worst": "O(n²)",
        "average": "O(n²)"
    },
    "usage": ["Small datasets", "Educational purposes"]
    },
"Selection Sort": {
    "code": `
1. What is Selection Sort?
Selection Sort is an in-place sorting algorithm that divides the list into a sorted and unsorted region. It repeatedly selects the smallest element from the unsorted region and moves it to the sorted region.

2. Advantages of Selection Sort
✅ Works well for small datasets.
✅ Requires only O(1) extra space (in-place).
✅ Fewer swaps compared to Bubble Sort.

3. Disadvantages of Selection Sort
❌ Inefficient for large datasets (O(n²)).
❌ Always takes O(n²) time regardless of initial order.
❌ Not stable (relative order of equal elements is not maintained).
`,
    "timeComplexity": {
        "best": "O(n²)",
        "worst": "O(n²)",
        "average": "O(n²)"
    },
    "usage": ["When memory write operations are costly", "Small datasets"]
    },
"Insertion Sort": {
    "code": `
1. What is Insertion Sort?
Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time.

2. Advantages of Insertion Sort
✅ Simple to implement.
✅ Efficient for small datasets.
✅ Works well when the input is nearly sorted.
✅ In-place sorting (no extra memory required).
✅ Stable sorting algorithm.

3. Disadvantages of Insertion Sort
❌ Inefficient for large datasets (O(n²)).
❌ Slower than advanced sorting algorithms like Merge Sort and Quick Sort.
`,
    "timeComplexity": {
        "best": "O(n)",
        "worst": "O(n²)",
        "average": "O(n²)"
    },
    "usage": ["Small datasets", "When input is nearly sorted", "Efficient for online sorting (inserting elements one by one)"]
    }
    ,
    "Merge Sort": {
    "code": `
1. What is Merge Sort?
Merge Sort is a divide-and-conquer algorithm that splits the array into smaller subarrays, sorts them, and merges them back together.

2. Advantages of Merge Sort
✅ Guaranteed O(n log n) performance.
✅ Stable sorting algorithm.
✅ Handles large datasets efficiently.

3. Disadvantages of Merge Sort
❌ Uses extra memory (O(n)).
❌ More complex than simple sorts like Bubble Sort.
❌ Slower for small datasets.
`,
    "timeComplexity": {
        "best": "O(n log n)",
        "worst": "O(n log n)",
        "average": "O(n log n)"
    },

    "usage": ["Sorting linked lists", "Large datasets", "External sorting (sorting large files)"]
    },
    "Quick Sort": {
    "code": `
1. What is Quick Sort?
Quick Sort is a divide-and-conquer algorithm that selects a pivot and partitions the array such that elements smaller than the pivot come before, and larger elements come after.

2. Advantages of Quick Sort
✅ Fastest sorting algorithm in practice.
✅ Works in-place (no extra memory required).
✅ O(n log n) on average.

3. Disadvantages of Quick Sort
❌ Worst case is O(n²) (if poorly implemented).
❌ Unstable sort (relative order of equal elements may change).
❌ Recursion depth can be high.
`,
    "timeComplexity": {
        "best": "O(n log n)",
        "worst": "O(n²)",
        "average": "O(n log n)"
    },
    "usage": ["Efficient for large datasets", "Used in standard libraries for sorting"]
    },
"Linear Search": {
    "code": `
1. What is Linear Search?
Linear Search is a simple search algorithm that checks each element one by one until the target is found.

2. Advantages of Linear Search
✅ Works on both sorted and unsorted arrays.
✅ Easy to implement.
✅ No extra space required (in-place).

3. Disadvantages of Linear Search
❌ Very slow for large datasets (O(n)).
❌ Inefficient compared to binary search for sorted arrays.
`,
    "timeComplexity": {
        "best": "O(1)",
        "worst": "O(n)",
        "average": "O(n)"
    },
    "usage": ["Searching in unsorted lists", "When array size is small"]
    },
"Binary Search": {
    "code": `
1. What is Binary Search?
Binary Search is an efficient search algorithm that works by repeatedly dividing the search range in half.

2. Advantages of Binary Search
✅ Fast search time (O(log n)).
✅ Works well for large datasets.
✅ Optimal for sorted data.

3. Disadvantages of Binary Search
❌ Only works on sorted arrays.
❌ Requires extra computations for dividing the search range.
❌ Not efficient for small lists.
`,
    "timeComplexity": {
        "best": "O(1)",
        "worst": "O(log n)",
        "average": "O(log n)"
    },
    "usage": ["Searching in sorted arrays", "Database indexing", "Finding elements in large datasets"]
    },

"Linked List": {
        code: `
1. What is a Linked List?
A linked list is a linear data structure where elements (nodes) are linked using pointers.

3. Advantages of Linked Lists
✅ Dynamic Size: Unlike arrays, linked lists grow and shrink dynamically.
✅ Efficient Insertions/Deletions: No shifting required like in arrays.
✅ No Memory Waste: Uses only required memory (unlike arrays which reserve extra space).

4. Disadvantages of Linked Lists
❌ More Memory: Each node stores an extra pointer, increasing memory usage.
❌ Slower Access Time: Random access is not possible (O(n) time for searching).
❌ Complex Implementation: Compared to arrays, more pointer handling is required.
    `,
        timeComplexity: {
            best: "O(1)",
            worst: "O(n)",
            average: "O(n)"
        },
        usage: ["Dynamic memory allocation", "Efficient insertions, Efficient memory management"]


    },
"Array": {
"code": `
1. What is an Array?
An array is a collection of elements stored in contiguous memory locations.

2. Advantages of Arrays
✅ Fast Random Access: Direct access using index (O(1)).
✅ Cache Friendly: Stored in contiguous memory, making access faster.
✅ Simplicity: Easy to implement and use.

3. Disadvantages of Arrays
❌ Fixed Size: Needs predefined size (except dynamic arrays).
❌ Costly Insertions/Deletions: Shifting elements is required (O(n)).
❌ Wastage of Memory: Extra space may be reserved in dynamic arrays.
`,
    "timeComplexity": {
        "best": "O(1) for access",
        "worst": "O(n) for insertion/deletion",
        "average": "O(n) for searching"
    },
    "usage": ["Fast lookups with indexing", "Static and dynamic memory storage"]
    },

"Stack": {
    "code": `
1. What is a Stack?
A stack is a linear data structure following the Last In, First Out (LIFO) principle.

2. Advantages of Stack
✅ Efficient Operations: Push and Pop operations take O(1) time.
✅ Memory Efficient: Uses only necessary memory for elements.
✅ Used in Recursion: Stack memory helps function calls.

3. Disadvantages of Stack
❌ Limited Access: Can only access the top element.
❌ Overflow Risk: Fixed size in static stacks (array-based).
❌ No Random Access: Searching takes O(n) time.
`,
    "timeComplexity": {
        "best": "O(1) for push/pop",
        "worst": "O(n) for search",
        "average": "O(n) for search"
    },
    "usage": ["Function calls (Recursion)", "Expression evaluation", "Undo/Redo operations"]
    }



};

function PseudocodeCard({ algorithm, data }) {
    return (
        <div className="shadow-md p-4 pt-2 shadow-green-400 font-semibold text-sm pl-4 m-auto h-full  rounded-lg mb-2  text-white">
            <h3 className="text-2xl font-bold text-green-400 flex items-center">
                <Code className='inline-block mr-2 text-purple-500' /> {algorithm}
            </h3>
            <pre className="text-green-300 text-[12px] font-mono whitespace-pre-wrap overflow-x-auto">
                {data.code}
            </pre>
            <div className="mt-3 mb-3 space-y-2">
                <h4 className="text-lg font-semibold text-purple-400">Time Complexity:</h4>
                <ul className="list-disc space-y-1 pl-5">
                    <li>Best Case: {data.timeComplexity.best}</li>
                    <li>Worst Case: {data.timeComplexity.worst}</li>
                    <li>Average Case: {data.timeComplexity.average}</li>
                </ul>
            </div>
            <div className="space-y-2">
                <h4 className="text-lg font-semibold text-red-400">When to Use:</h4>
                <ul className="list-disc space-y-1 pl-5">
                    {data.usage.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function Pseudocodecopy({ algorithm }) {
    if (!algorithm || !pseudocodeData[algorithm]) return null;

    return <PseudocodeCard algorithm={algorithm} data={pseudocodeData[algorithm]} />;
}

export default Pseudocodecopy;  
