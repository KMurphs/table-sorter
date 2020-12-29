import React, { useState } from 'react';
import Checkbox from '../CustomFormsControls/checkbox';
import './index.css';
import Table from './table';



export default function TableSorter() {

  const [checkbox, setCheckbox] = useState<boolean>(true)

  return (
    <div className="table-sorter">
      <header className="table-sorter__header grid p-4 lg:flex lg:justify-between lg:flex-row lg:items-end">

        <section className="flex justify-between items-center md:inline-block relative z-10">
          <h1 className="text-2xl lg:text-4xl">Table Sorter</h1>
          <label htmlFor="app-menu-control--hidden" id="app-menu-control" className="text-2xl flex md:hidden">
            <i className="fas fa-bars"></i>
          </label>
        </section>


        <input type="checkbox" id="app-menu-control--hidden" className="hidden"/>
        <section className="app-menu pt-4 lg:pt-0 flex text-lg flex-col md:flex-row ">
          <div className="flex items-center lg:mr-8 flex-col md:flex-row">
            <button className=" py-2 btn btn--link">Reset</button>
            <span className="p-4 py-2"><Checkbox type={1} value={checkbox} onChange={setCheckbox} constantText={"Direction: "} onText={"Reverse"} offText={"Normal"} extraClasses={"with-muted-p"}/></span>
          </div>
          <ul className="sort-algorithms flex items-stretch flex-col md:flex-row rounded overflow-hidden">
            <li><input className="hidden sort-algorithm" type="radio" name="sort-algorithm" value="regular-sort" id="regular-sort" /><label className="p-4 py-2 text-center" htmlFor="regular-sort">Regular Sort</label></li>
            <li><input className="hidden sort-algorithm" type="radio" name="sort-algorithm" value="bubble-sort" id="bubble-sort" /><label className="p-4 py-2 text-center" htmlFor="bubble-sort">Bubble Sort</label></li>
            <li><input className="hidden sort-algorithm" type="radio" name="sort-algorithm" value="merge-sort" id="merge-sort" /><label className="p-4 py-2 text-center" htmlFor="merge-sort">Merge Sort</label></li>
            <li><input className="hidden sort-algorithm" type="radio" name="sort-algorithm" value="insertion-sort" id="insertion-sort" /><label className="p-4 py-2 text-center" htmlFor="insertion-sort">Insertion Sort</label></li>
            <li><input className="hidden sort-algorithm" type="radio" name="sort-algorithm" value="quartile-sort" id="quartile-sort" /><label className="p-4 py-2 text-center" htmlFor="quartile-sort">Quartile Sort</label></li>
          </ul>
        </section>
      </header>

      <main>
        <section className="px-4 py-6 text-lg border-t border-b bg-gray-50"><span>Drag headers here to sort: </span></section>
        <Table/>
      </main>
    </div>
    
  )

}