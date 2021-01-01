
import heapSort from "./heapSort";
import quickSort from "./quickSort";
import bubbleSort from "./bubbleSort";
import mergeSort from "./mergeSort";
import selectionSort from "./selectionSort";
import insertionSort from "./insertionSort";
import quartileSort from "./quartileSort";

// import quickSort, {  swap } from "./qSort";
// import { default as quickSort } from "./quickSort";
// import { default as bubbleSort } from "./bubbleSort";

export interface T {
  value: number
}
export type TSortEffectCallback = (startPosition: number, endPosition: number, emphasis1?: number[], emphasis2?: number[], isSwapEffect?: boolean)=>void
export type TSorter = (arr: T[] | number[] | any[], start: number | null, end: number | null, params: TSortParam[], onMoveCb?: TSortEffectCallback)=>T[] | number[] | any[]
export type TSorterNames = "quick-sort" | "bubble-sort" | "heap-sort" | "merge-sort" | "selection-sort" | "insertion-sort" | "quartile-sort"
export type TComparator = (a: any, b: any, param: TSortParam[]) => boolean
export type TSortParam = {key: string, inAscending: boolean}

/**
 * Returns 1 if a is "greater" than b.
 * The function does the comparison by using keys on a and b
 * 
 * @param  {any} a: First JS Object in comparison
 * @param  {any} b: Second JS Object in comparison
 * @param  {TSortParams[]} keys: Keys to index a and b for comparison
 */
const sortComparator: TComparator = (a: any, b: any, params: TSortParam[] = [{key: "value", inAscending: true}]) => {
  const [param, ...rest] = params;
  const aVal = getValue(a, param.key);
  const bVal = getValue(b, param.key);
  if(aVal === bVal) return rest.length === 0 ? true : sortComparator(a, b, rest);
  return (aVal > bVal) === param.inAscending; //Must work with number and strings
}

/**
 * Return a supported sorter corresponding to the input "algorithmName".
 * If the input is not recognized "quickSort" is returned
 * 
 * @param  {string} algorithmName
 */
const getSorter = function(algorithmName: string){
  if(algorithmName === "bubble-sort") return bubbleSort;
  if(algorithmName === "heap-sort") return heapSort;
  if(algorithmName === "merge-sort") return mergeSort;
  if(algorithmName === "selection-sort") return selectionSort;
  if(algorithmName === "insertion-sort") return insertionSort;
  if(algorithmName === "quartile-sort") return quartileSort;
  return quickSort;
}
export default getSorter;



/**
 * Swaps two array elements given their indices "low" and "high".
 * 
 * @param  {T[]|number[]} arr
 * @param  {number} low: First Index
 * @param  {number} high: Second Index
 */
const swap = (arr: T[] | number[], low: number, high: number) => { 
  const tmp = arr[high]; 
  arr[high] = arr[low]; 
  arr[low] = tmp; 
}

/**
 * Given an input entity "el", return a value.
 * 
 * If el is a number, el is returned.
 * 
 * Else, el is an object and el[key] is returned.
 * 
 * @param  {T|number|any} el
 * @param  {string="value"} key
 */
const getValue = (el: T | number | any, key: string = "value") => typeof(el) === "number" ? el as number : (el as any)[key];
export { getValue, swap, sortComparator }