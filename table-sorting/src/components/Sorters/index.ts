
import heapSort from "./heapSort";
import quickSort from "./quickSort";
import bubbleSort from "./bubbleSort";
import mergeSort from "./mergeSort";
import selectionSort from "./selectionSort";
import insertionSort from "./insertionSort";

// import quickSort, {  swap } from "./qSort";
// import { default as quickSort } from "./quickSort";
// import { default as bubbleSort } from "./bubbleSort";

export interface T {
  value: number
}
export type TSortEffectCallback = (startPosition: number, endPosition: number, emphasis1?: number[], emphasis2?: number[], isSwapEffect?: boolean)=>void
export type TSorter = (arr: T[] | number[], start: number | null, end: number | null, onMoveCb?: TSortEffectCallback)=>void
export type TSorterNames = "quick-sort" | "bubble-sort" | "heap-sort" | "merge-sort" | "selection-sort" | "insertion-sort"





const getSorter = function(algorithmName: string){
  if(algorithmName === "bubble-sort") return bubbleSort;
  if(algorithmName === "heap-sort") return heapSort;
  if(algorithmName === "merge-sort") return mergeSort;
  if(algorithmName === "selection-sort") return selectionSort;
  if(algorithmName === "insertion-sort") return insertionSort;
  return quickSort;
}
export default getSorter;




const swap = (arr: T[] | number[], low: number, high: number) => { 
  const tmp = arr[high]; 
  arr[high] = arr[low]; 
  arr[low] = tmp; 
}

const getValue = (el: T | number) => typeof(el) === "number" ? el as number : (el as T).value;
export { getValue, swap }