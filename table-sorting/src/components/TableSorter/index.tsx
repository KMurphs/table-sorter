import React, { useEffect, useRef, useState } from 'react';
import Checkbox from '../CustomFormsControls/checkbox';
import './index.css';
import Table from './table';


type TSortKey = {id: string, key: string, isDirectionUp: boolean}
export default function TableSorter() {

  const [checkbox, setCheckbox] = useState<boolean>(true);
  const [sortKeys, _setSortKeys] = useState<TSortKey[]>([]);
  const addToSortKeys = (newKey: TSortKey)=>{
    _setSortKeys(keys => {
      const existingKey = sortKeys.find(item => item.id === newKey.id)
      return existingKey ? keys : [...keys, {...newKey}]
    })
  }
  const removeFromSortKeys = (keyID: string) => _setSortKeys(keys => keys.filter(key => key.id !== keyID))
  const changeSortKeyDirection = (keyID: string, isUp: boolean) => _setSortKeys(keys => keys.map(key => { (key.id === keyID) && (key.isDirectionUp = isUp); return key; }))

  const handleDragStart = (ev: React.DragEvent<HTMLElement>) => {
    ev.dataTransfer.setData("text", JSON.stringify({
      id: ev.currentTarget.id,
      key: ev.currentTarget.querySelector("span")?.innerText,
      isDirectionUp: (ev.currentTarget.querySelector("input[type=checkbox]") as HTMLInputElement).checked,
    }));
  }
  const allowDrop = (ev: React.DragEvent<HTMLElement>)=>{
		ev.preventDefault();
		ev.stopPropagation();
  }
  const handleDrop = (ev: React.DragEvent<HTMLElement>)=>{
    addToSortKeys(JSON.parse(ev.dataTransfer.getData("text")) as TSortKey);
  }



  return (
    <div className="table-sorter">
      <header className="table-sorter__header grid p-4 lg:flex lg:justify-between lg:flex-row lg:items-end">

        <section className="flex justify-between items-center lg:inline-block relative z-10">
          <h1 className="text-2xl lg:text-4xl">Table Sorter</h1>
          <label htmlFor="app-menu-control--hidden" id="app-menu-control" className="text-2xl flex lg:hidden rounded-full hover:bg-gray-100 w-10 h-10 justify-center items-center">
            <i className="fas fa-bars"></i>
          </label>
        </section>


        <input type="checkbox" id="app-menu-control--hidden" className="hidden"/>
        <section className="app-menu pt-4 lg:pt-0 flex text-lg flex-col lg:flex-row ">
          <div className="flex items-center lg:mr-8 flex-col lg:flex-row">
            <button className=" py-2 btn btn--link">Reset</button>
            <span className="p-4 py-2"><Checkbox type={1} value={checkbox} onChange={setCheckbox} constantText={"Direction: "} onText={"Reverse"} offText={"Normal"} extraClasses={"with-muted-p"}/></span>
          </div>
          <ul className="sort-algorithms flex items-stretch flex-col lg:flex-row rounded overflow-hidden">
            <li><input className="hidden sort-algorithm" type="radio" name="sort-algorithm" value="regular-sort" id="regular-sort" /><label className="p-4 py-2 text-center" htmlFor="regular-sort">Regular Sort</label></li>
            <li><input className="hidden sort-algorithm" type="radio" name="sort-algorithm" value="bubble-sort" id="bubble-sort" /><label className="p-4 py-2 text-center" htmlFor="bubble-sort">Bubble Sort</label></li>
            <li><input className="hidden sort-algorithm" type="radio" name="sort-algorithm" value="merge-sort" id="merge-sort" /><label className="p-4 py-2 text-center" htmlFor="merge-sort">Merge Sort</label></li>
            <li><input className="hidden sort-algorithm" type="radio" name="sort-algorithm" value="insertion-sort" id="insertion-sort" /><label className="p-4 py-2 text-center" htmlFor="insertion-sort">Insertion Sort</label></li>
            <li><input className="hidden sort-algorithm" type="radio" name="sort-algorithm" value="quartile-sort" id="quartile-sort" /><label className="p-4 py-2 text-center" htmlFor="quartile-sort">Quartile Sort</label></li>
          </ul>
        </section>
      </header>

      <main className="overflow-hidden">
        <section className="px-4 py-2 lg:py-6 text-md md:text-lg border-t border-b bg-gray-50" onDragOver={allowDrop} onDrop={handleDrop}>
          <span className="text-sm lg:text-md">Drag headers here to sort: </span>
          {
            sortKeys.map((item, idx) => (
              <span onClick={()=>{}} key={idx} id={`${item.id}--cloned`} className="sort-key">
                <label htmlFor={`${item.id}--cloned-checkbox`}>
                  {item.key}
                  <input type="checkbox" id={`${item.id}--cloned-checkbox`} className="hidden" checked={item.isDirectionUp} onChange={e=>{changeSortKeyDirection(item.id, e.target.checked)}}/>
                  <i className="fas fa-caret-up"></i>
                  <i className="fas fa-caret-down"></i>
                </label>
                <span className="remove" onClick={()=>removeFromSortKeys(item.id)}>
                  <i className="fas fa-times"></i>
                </span>
              </span>
            ))
          }
        </section>
        <Table onDragStart={handleDragStart} keysToDisable={sortKeys.map(item=>item.id)}/>
      </main>
    </div>
    
  )

}