import React, { CSSProperties, useEffect, useRef, useState } from "react";
import sort, { swap } from "./qSort";
import "./index.css"

type BarProxy = {
  value: number; 
  handleNo: number; 
}
type BarProps = {
  height: number,
  id: number,
  position: number
}
type Props = {
  nBars?: number
}
export default function SortVizualizer({nBars}: Props) {

  const getRandomHeight = () => 5 + Math.round(Math.random() * 20) * 5;
  // The height and position of the bars being vizualized are contained in bars
  const bars = useRef<BarProxy[]>(Array(nBars).fill(0).map((_, idx)=> ({value: getRandomHeight(), handleNo: idx})))




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
        sort(
          bars.current.map(curr=>curr.value), 
          0, 
          bars.current.length - 1, 
          (initial: number, final: number)=>barEffects.current.push({f: ()=>swap(bars.current, initial, final), timeout: barEffects.current.length === 0 ? 1500 : 300})
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
  }, [counter])












  return (
    <div id="sort-vizualizer" style={{"--count": bars.current.length * 2} as CSSProperties}>
      {
          bars
          .current
          // Adjust Height and position of bar
          .map((_, idx) => {
            const position = bars.current.findIndex(bar => bar.handleNo === idx); 
            const height = bars.current[position].value;
            return <div key={idx} style={{height: height + "%", left: `calc(${position} * 2 * var(--width))`}} id={`sort-vizualizer-bar-${idx}`} />
          })
          // Insert a dummy div between each bar, to space them
          .reduce(
            (acc, curr, idx) => [...acc, curr, <div key={bars.current.length + idx}/>], 
            [<div/>]
          )
          // Remove the initial value of acc
          .slice(1)
      }
    </div>
  )
}



(SortVizualizer as React.FC).defaultProps = {
  nBars: 15
}

