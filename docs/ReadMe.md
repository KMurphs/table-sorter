# Table Sorter

## Overview

- This app is an exercise involving different sorting algorithms on a table ui components written in **React**, **Typescript** and **TailwindCSS**.

- The app attempts at researching and implementing ways to **visualize** main **sorting algorithms** such as **heap sort, merge sort, quick sort, insertion sort, selection sort, bubble sort** 

- The **Drag and Drop API** is used to improve on user experience while manipulating the table and resorting it.

- A good amount of time and research was spent into ways of making a huge table somewhat **responsive** and keep a good level of overall **user experience UX**.

- Ways to mitigate lagging in busy react **UI**s were investigated. React tools like **useMemo** and **useCallback** along with **React.lazy** and **React.suspense** were studied in regard to this.

## Definition

This is small app meant to study a few concepts I was thinking about such as visualizing sorting algorithms using only **javascript/typescript** and **css** without other tools, frameworks except for **React**. Implementing the **Drag and drop API** in the context of a react app. And studying the ways to improve responsivess of lagging react uis

**Duration**: 24 hours

**Tools, Technologies, Skills**: React, React Router, Data Structures and Algorithms, TailwindCSS

**Languages**: Javascript/Typescript, Batch files, CSS, HTML

## Context

The application is meant as a study case for **React**, Visual side effects such as those necessary to **visualize the effects of main sorting algorithms**.

It also considered issues linked to rendering huge tables in React that need to be sorted. The **drag and drop API** was also something of interest.

Finally, the application considers all of the above in the **responsive** aspect.

The application is served as a Github Page at [https://kmurphs.github.io/table-sorter/app](https://kmurphs.github.io/table-sorter/app)

This documentation is present at [https://kmurphs.github.io/table-sorter/](https://kmurphs.github.io/table-sorter/)

## Guide

### Welcome Page

The first page demonstrate and show **vizualizations** of the inner workings of main sorting algorithms such as:
- Quick Sort
- Merge Sort
- Insertion Sort
- Heap Sort
- Selection Sort
- Bubble Sort

### Table Page

The second page displays the table components.
The table data is served by a file in this repo ``"<Current Repo>/table-sorting/public/factbook.json"``

To sort the table, drag one of the headers in the indicated zone. Once drop in that zone, the table will be resorted. The drop control can be used to change the sorting direction (from ascending to descending per column).


## Notable Issues

- Drag And Drop solution for mobile Web browser has not been integrated. Initial inclination is to use a polyfill for touch event.


- Initially, the Table was slow on sorting. Multiple possible solutions were identified to palliate to this issue.
  
  - Using ``React.useMemo`` and ``React.useCallback``:

    - Initially, the **sort** operation was assumed to be the culprit. But it happened, that sorting a table with the current dimensions is not the bottleneck. ``React.useMemo`` and ``React.useCallback`` are meant to mitigate the expensive time taken to perform some computation, using them with **sort** will not address the main issue.

    - On every render (which usually means that the table was re-sorted), each cell is re-rendered then each row. The cells that correspond to the keys used during the sort get colored. This prevents an efficient memoization of table components (table cells, rows) since most of them must be updated and re-rendered.<br> A possible approach could be to use a table where ``'<tr></tr>'`` is redefined to mean a column instead of its semantic 'horizontal' meaning. This [stackoverflow thread](https://stackoverflow.com/questions/16071864/how-to-create-tables-from-column-data-instead-of-row-data-in-html) discusses the subject. - Not applicable: Even the columns change on re-render.

  - Another solution would be to implement a similar logic to lazy loading of images.<br>
  As a refresher, to implement this strategy, a few things must be in place:

    - A Generator that will spit out batches of data.

    - An Intersection Observer, that triggers some function when some element is in view. This function can then fetch the next batch of data and cause a re-render to put the new data on the DOM.<br>
    
    In our case, since re-rendering the data that's already on the DOM is consumming, we would need to prevent them from re-rendering.<br>

  - Current solution is better, but stills lags a bit. Possible improvement might be possible by using ``Memo`` on a bunch of rows. Or Maybe using ``React.suspense`` and ``React.lazy`` 


## Github Pages

1. Note: 
    
    - ``<repoURL>``: ``https://github.com/KMurphs/table-sorter``

    - ``<gihubPageBaseURL>``: ``https://kmurphs.github.io/table-sorter/``


2. Github Pages are serving ``<repoURL>/docs``
    - ``_config.yml`` at ``<repoURL>/docs/_config.yml`` was updated with

      - **baseurl**: **"/table-sorter"**
      - **url**: **"https://kmurphs.github.io"**


    - The custom stylesheet is still under ``assets`` at ``<repoURL>/docs/assets/``
      - The ``GET`` url for the stylesheet ``https://kmurphs.github.io/table-sorter/assets/css/style.css``

2. Readme is therefore seemingly served at ``<gihubPageBaseURL>``

3. App, in the same way, is served at ``<gihubPageBaseURL>/app``
    - To have this configured in this way:

      - ``npm``'s ``package.json`` has an entry ``{"homepage": "/table-sorter/app"}``

      - To ``fetch`` the file ``factbook.json`` that lives in the react's ``public`` folder at:<br/> 
      ``https://github.com/KMurphs/table-sorter/blob/master/table-sorting/public/factbook.json``, 
      <br/> one must use <br/>
      ``fetch("/table-sorter/app/factbook.json")``  



## References

1. [https://www.linkedin.com/learning/web-portfolio-projects-sortable-table-and-arrays/node-list](https://www.linkedin.com/learning/web-portfolio-projects-sortable-table-and-arrays/node-list)
2. [https://tailwindcss.com/docs/background-color](https://tailwindcss.com/docs/background-color)
3. [https://medium.com/in-the-weeds/my-react-app-is-slow-what-should-i-do-e1fd020e69ec](https://medium.com/in-the-weeds/my-react-app-is-slow-what-should-i-do-e1fd020e69ec)
4. [https://getbootstrap.com/docs/5.0/content/tables/](https://getbootstrap.com/docs/5.0/content/tables/)
5. [https://codepen.io/lorelea/pen/WRqQyy?editors=0010](https://codepen.io/lorelea/pen/WRqQyy?editors=0010)
6. [http://bernardo-castilho.github.io/DragDropTouch/demo/](http://bernardo-castilho.github.io/DragDropTouch/demo/)
7. [https://www.codeproject.com/Articles/1091766/Add-support-for-standard-HTML-Drag-and-Drop-operat](https://www.codeproject.com/Articles/1091766/Add-support-for-standard-HTML-Drag-and-Drop-operat)
8. [https://stackoverflow.com/questions/45049873/how-to-remove-the-blue-background-of-button-on-mobile](https://stackoverflow.com/questions/45049873/how-to-remove-the-blue-background-of-button-on-mobile)
9. [https://stackoverflow.com/questions/1312236/how-do-i-create-an-html-table-with-a-fixed-frozen-left-column-and-a-scrollable-b](https://stackoverflow.com/questions/1312236/how-do-i-create-an-html-table-with-a-fixed-frozen-left-column-and-a-scrollable-b)
10. [https://www.smashingmagazine.com/2020/03/infinite-scroll-lazy-image-loading-react/](https://www.smashingmagazine.com/2020/03/infinite-scroll-lazy-image-loading-react/)
11. [https://stackoverflow.com/questions/1312236/how-do-i-create-an-html-table-with-a-fixed-frozen-left-column-and-a-scrollable-b/1312678#1312678](https://stackoverflow.com/questions/1312236/how-do-i-create-an-html-table-with-a-fixed-frozen-left-column-and-a-scrollable-b/1312678#1312678)
12. [https://stackoverflow.com/questions/16071864/how-to-create-tables-from-column-data-instead-of-row-data-in-html](https://stackoverflow.com/questions/16071864/how-to-create-tables-from-column-data-instead-of-row-data-in-html)
13. [https://stackoverflow.com/questions/20927759/html5-drag-and-drop-for-mobile](https://stackoverflow.com/questions/20927759/html5-drag-and-drop-for-mobile)
14. [https://codepen.io/kmurphs/pen/jOMYRXN](https://codepen.io/kmurphs/pen/jOMYRXN)
14. [https://codepen.io/kmurphs/pen/WNGdYGE](https://codepen.io/kmurphs/pen/WNGdYGE)
14. [https://codepen.io/kmurphs/pen/NWRXOQd](https://codepen.io/kmurphs/pen/NWRXOQd)
15. [https://stackoverflow.com/a/36623117/9034699](https://stackoverflow.com/a/36623117/9034699)
16. [https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually)
17. [https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites)