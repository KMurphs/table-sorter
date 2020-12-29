import { swap, getValue, TSorter } from ".";




const sort: TSorter = (arr, start, end, onMoveCb)=>{


  for(let position = arr.length - 1; position > 0; position--){
    for(let mover = 0; mover < position; mover++){
      if(getValue(arr[mover]) > getValue(arr[mover + 1])){
        swap(arr, mover, mover + 1);
        onMoveCb && onMoveCb(mover, mover + 1, [position], [], true);
      }
    }
  }

}






export default sort;

