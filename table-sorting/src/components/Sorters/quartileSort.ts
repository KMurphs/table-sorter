import { swap, T, TSorter, TSortEffectCallback, sortComparator, TSortParam } from ".";
import quickSort from "./quickSort";


const sort: TSorter = (arr, start, end, params = [{key: "value", inAscending: true}], onMoveCb)=>{
  
  const low = start || 0;
  const high = end === undefined || end === null ? arr.length - 1 : end;

  quickSort(arr, low, high, params, onMoveCb);
  if(typeof(arr[0]) !== "object") return arr;
  
  markQuartiles(arr, low, high, params);
  return arr;
}


const markQuartiles = (arr: any[], start: number, end: number, params: TSortParam[])=>{
  
  if(params.length === 0) return;
  const [{key, inAscending}, ...rest] = params;

  const range = end - start; 
  if(range < 4) return;

  const q1 = start + Math.round(range * 0.25); 
  const median = start + Math.round(range * 0.5); 
  const q3 = start + Math.round(range * 0.75); 

  const marks = ["Q1", "Q2", "Q3", "Q4"];
  !inAscending && marks.reverse();

  arr.forEach((item, index) => {
    
    if((index < start) || (index > end)) return;

    !item["quartileMark"] && ( item["quartileMark"] = {} );
    if     (index <= q1)     { item["quartileMark"][key] = marks[0]; }
    else if(index <= median) { item["quartileMark"][key] = marks[1]; }
    else if(index <= q3)     { item["quartileMark"][key] = marks[2]; }
    else                     { item["quartileMark"][key] = marks[3]; }
  })

  markQuartiles(arr,      start,     q1, rest);
  markQuartiles(arr,     q1 + 1, median, rest);
  markQuartiles(arr, median + 1,     q3, rest);
  markQuartiles(arr,     q3 + 1,    end, rest);

}



export default sort;


