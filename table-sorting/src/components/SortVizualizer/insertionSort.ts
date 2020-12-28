import { swap, getValue, T, TSorter } from "./utilsSort";




const sort: TSorter = (arr, start, end, onMoveCb)=>{


  for(let position = 1; position < arr.length; position++){
    
    let currVal = arr[position];
    let runner = position;
    while((runner !== 0) && getValue(arr[runner - 1]) > getValue(currVal)) {
      // arr[runner] = arr[runner - 1];
      swap(arr, runner, runner - 1);
      onMoveCb && onMoveCb(runner, runner - 1, [position, runner - 1], [], true);
      runner--;
    }
    arr[runner] = currVal;

  }



}






export default sort;

