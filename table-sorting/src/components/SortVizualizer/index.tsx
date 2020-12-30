import React, { CSSProperties, useEffect, useRef, useState } from "react";

import getSorter, { swap, TSorterNames } from "../Sorters";
import "./index.css"

type BarProxy = {
  value: number; 
  handleNo: number; 
  class: string;
}
// type BarProps = {
//   height: number,
//   id: number,
//   position: number
// }
type Props = {
  nBars?: number
}

export default function SortVizualizer({nBars}: Props) {

  const [currentSortingAlsorithm, _setCurrentSortingAlsorithm] = useState<TSorterNames>("merge-sort");
  const setCurrentSortingAlsorithm = (algName: TSorterNames)=>{
    // On new alg, execute side effect to reset vizualizer
    barEffects.current = [];
    _setCurrentSortingAlsorithm(algName);
  }



  const getRandomHeight = () => 5 + Math.round(Math.random() * 20) * 5;
  // The height and position of the bars being vizualized are contained in bars
  const bars = useRef<BarProxy[]>(Array(nBars).fill(0).map((_, idx)=> ({value: getRandomHeight(), handleNo: idx, class: ""})))




  // Vizualizer Effects
  // Structure that will record all swap movement that happened during the sorting
  // These movement will become the effects seen on the ui
  const barEffects = useRef<{f: Function, timeout: number}[]>([])
  const [counter, setCounter] = useState<number>(0); // Dummy variable used to force rerenders
  const renderBarEffect = ()=>setCounter(c => c + 1);
  useEffect(()=>{
    
    // Effects are empty, we need to start a new sorting cycle
    if(barEffects.current.length === 0) {
      new Promise((resolve) => setTimeout(resolve, 1500)).then(()=>{

        // Adjust heights for new sorting cycle
        bars.current.forEach(bar=> bar.value = getRandomHeight());

        // Pause just afer adjusting
        barEffects.current.push({f: ()=>{}, timeout: 1500});

        // Presort array and record swap movements that need to happen in order to get eventually to a sorted set bars
        getSorter(currentSortingAlsorithm)(
          bars.current.map(curr=>curr.value), 
          0, 
          bars.current.length - 1, 
          [{key: "value", inAscending: false}],
          (initial, final, level1, level2, isSwapEffect)=>barEffects.current.push({
            f: ()=>{ 
              if(isSwapEffect) swap(bars.current, initial, final); 
              if(!isSwapEffect) { bars.current[initial].value = final; } 
              // console.log(level1)
              bars.current.forEach(bar => bar.class = "");
              level1?.forEach(idx => bars.current[idx].class = "emphasis-1");
              level2?.forEach(idx => bars.current[idx].class = "emphasis-2");
            }, 
            timeout: barEffects.current.length === 0 ? 1500 : 300
          })
        );

        // Schedule the recorded effects to be run one by one
        renderBarEffect();
      })


    }else{

      // Extract first of our bar effects
      const [first, ...rest] = barEffects.current;
      
      // If it's not undefined, wait for timeout, then run the effect and force and re-render
      first && new Promise((resolve) => setTimeout(resolve, first.timeout)).then(()=>{
        first.f();
        // Decrease the amount of effects that are still to be run for this sorting cycle
        barEffects.current = rest;
        renderBarEffect();
      })

    }

    // This effect is run everytime counter is changed
  }, [counter/*, currentSortingAlsorithm*/])












  return (
    <div id="sort-vizualizer" style={{"--count": bars.current.length * 2} as CSSProperties}>
      {
          bars
          .current
          // Adjust Height and position of bar
          .map((_, idx) => {
            const position = bars.current.findIndex(bar => bar.handleNo === idx); 
            const height = bars.current[position].value;
            const className = bars.current[position].class;
            return <div key={idx} style={{height: height + "%", left: `calc(${position} * 2 * var(--width))`}} className={className} id={`sort-vizualizer-bar-${idx}`} />
          })
          // Insert a dummy div between each bar, to space them
          .reduce(
            (acc, curr, idx) => [...acc, curr, <div key={bars.current.length + idx}/>], 
            [<div/>]
          )
          // Remove the initial value of acc
          .slice(1)
      }



      <div className="sort-vizualizer__settings">
        <i className="fa fa-info-circle" aria-hidden="true"></i>
        <select id="sort-vizualizer__algorithm" name="sort-vizualizer__algorithm" value={currentSortingAlsorithm} onChange={evt=>setCurrentSortingAlsorithm(evt.target.value as TSorterNames)}>
          <option value="quick-sort">Quick Sort</option>
          <option value="bubble-sort">Bubble Sort</option>
          <option value="heap-sort">Heap Sort</option>
          <option value="merge-sort">Merge Sort</option>
          <option value="selection-sort">Selection Sort</option>
          <option value="insertion-sort">Insertion Sort</option>
        </select>
      </div>

      
    </div>
  )
}



(SortVizualizer as React.FC).defaultProps = {
  nBars: 15
}

