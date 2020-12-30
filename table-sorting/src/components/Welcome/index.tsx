import './index.css';
import hero from './assets/bg.svg';
import SortVizualizer from "../SortVizualizer"

export type Props = {
  onStartExploring: ()=>void
}

export default function Welcome({onStartExploring}: Props) {


  return (
    <main id="welcome">

      <header className="welcome__header">
        <h1 className="text-4xl mb-4 lg:text-6xl lg:mb-8">Table Sorter</h1>
        <h2 className="text-1xl-m lg:text-3xl">Application that demonstrate sorting algorithms on tabular data</h2>
      </header>

      <section className="welcome__hero flex align-center">
        <img src={hero} alt="Sorting Algorithm"/>
      </section>

      <section className="welcome__subtext">
        <h3>
          <p className="text-1xl-m mb-4 lg:text-2xl">Supported Sorters: </p>
          <ul>
            <li className="lg:text-1xl-m"><i className="far fa-check-circle mr-4 ml-4 mb-2"></i><span>Quick Sort</span> </li>
            <li className="lg:text-1xl-m"><i className="far fa-check-circle mr-4 ml-4 mb-2"></i><span>Merge Sort</span> </li>
            <li className="lg:text-1xl-m"><i className="far fa-check-circle mr-4 ml-4 mb-2"></i><span>Heap Sort</span> </li>
            <li className="lg:text-1xl-m"><i className="far fa-check-circle mr-4 ml-4 mb-2"></i><span>Bubble Sort</span> </li>
            <li className="lg:text-1xl-m"><i className="far fa-check-circle mr-4 ml-4 mb-2"></i><span>Insertion Sort</span> </li>
            <li className="lg:text-1xl-m"><i className="far fa-check-circle mr-4 ml-4 mb-2"></i><span>Selection Sort</span> </li>
            
          </ul>
        </h3>
      </section>

      <footer className="w-full welcome__footer ">
        <button className="btn w-full " onClick={onStartExploring}>Start Exploring</button>
      </footer>


      <div className="welcome__design-element flex hidden- md:flex- md:absolute">
        <SortVizualizer/>
      </div>
      

    </main>
    
  )

}