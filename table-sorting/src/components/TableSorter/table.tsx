import { useEffect, useState } from 'react';
import './table.css';
// import data from "./assets/factbook.json"
type Props = {
  onDragStart: (ev: React.DragEvent<HTMLElement>) => void,
  keysToDisable: string[]
}

export default function Table({onDragStart, keysToDisable}: Props) {

  // const [data, setData] = useState<any[]>([{}])
  const [data, setData] = useState<any[]>([
    {key1: "value1",key2: "value2",key3: "value3"},
    {key1: "value1",key2: "value2",key3: "value3"},
    {key1: "value1",key2: "value2",key3: "value3"},
    {key1: "value1",key2: "value2",key3: "value3"},
  ]);
  console.log(data, keysToDisable);

  const keys = data && data[0] ? Object.keys(data[0]).filter((_,idx)=>idx<=10) : [];
  const keyToID = (key: string) => (key as string).toLowerCase().replace(" ","-");

  // useEffect(()=>{
  //   fetch("factbook.json")
  //   .then(res => res.json())
  //   .then(res => setData(res))
  // }, [])

  return (
    <section className="sortable-table__container">
      <input type="checkbox" id="sortable-table__first-column-control" className="hidden"/>
      <table className="sortable-table">
        <thead>
          <tr key={0}>
            {
              keys.map((key, idx) => 
                {
                  if(idx === 0) { return (
                    <th key={idx} id={keyToID(key)} draggable={!keysToDisable.includes(keyToID(key))} className={`sortable-table__header__item ${keysToDisable.includes(keyToID(key)) ? "disabled": ""}`} onDragStart={onDragStart}>
                      <label htmlFor="sortable-table__first-column-control" className="flex items-center justify-end">
                        <span>{key}</span>
                        <i className="fas fa-angle-double-left ml-2"></i>
                        <i className="fas fa-angle-double-right"></i>
                      </label>
                    </th>
                  )} else {
                    return (   
                    <th key={idx} id={keyToID(key)} draggable={!keysToDisable.includes(keyToID(key))} className={`sortable-table__header__item ${keysToDisable.includes(keyToID(key)) ? "disabled": ""}`} onDragStart={onDragStart}>
                      <span>{key}</span>
                    </th>
                  )}
                }
              )
            }
          </tr>

        </thead>
        <tbody>
          {
            data && data.filter((entry,idx)=>idx<=50).map((entry, idx) => {
              return (
                <tr key={idx + 1}>
                  {
                    keys.map((key, idx_) => <td key={idx_} className={keyToID(key)}><span>{ (entry as any)[key]  || "" }</span></td>)
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </section>

    
  )

}