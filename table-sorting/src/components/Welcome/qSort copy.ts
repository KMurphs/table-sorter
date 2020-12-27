interface T {
  value: number
}
const sort = (arr: T[], start: number, end: number, onMoveCb?: Function)=>{

  const low = start || 0;
  const high = end === undefined ? arr.length - 1 : end;

  if(low >= high) return;

  const pivot = partition(arr, low, high, onMoveCb);
  sort(arr, low, pivot - 1, onMoveCb);
  sort(arr, pivot + 1, high, onMoveCb);
}

const partition = (arr: T[], low: number, high: number, onMoveCb?: Function) => {
  const pivot = arr[high].value
  const accInitial: {lower: T[], higher: T[]} = {lower: [], higher: []}
  const partitions = arr.slice(low, high + 1)
                        .reduce((acc, curr) => ({
                            lower: [...acc.lower, ...(curr.value <= pivot ? [curr] : [])], 
                            higher: [...acc.higher, ...(curr.value > pivot ? [curr] : [])]
                          }), accInitial
                        );

  partitions.lower.concat(partitions.higher)
                  .forEach(async (curr, idx) => {
                    arr[low + idx] = curr; 
                    // onMoveCb && onMoveCb();
                  });
                  
  return low + partitions.lower.length - 1;
}


export default sort;