import { swap, TSorter, sortComparator } from ".";




const sort: TSorter = (arr, start, end, params=[{key: "value", inAscending: true}], onMoveCb)=>{


  for(let position = 1; position < arr.length; position++){
    
    let currVal = arr[position];
    let runner = position;
    while((runner !== 0) && sortComparator(arr[runner - 1], currVal, params)) {
      // arr[runner] = arr[runner - 1];
      swap(arr, runner, runner - 1);
      onMoveCb && onMoveCb(runner, runner - 1, [position, runner - 1], [], true);
      runner--;
    }
    arr[runner] = currVal;

  }



}






export default sort;

