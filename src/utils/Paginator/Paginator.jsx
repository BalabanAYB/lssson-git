import React, { useState } from 'react';
import s from './Paginator.module.css'

const Paginator = (props, {portionSize = 10}) => {
   let pages = [];
    let pageNumber = Math.ceil(props.totalItemsCount / props.pageCount)
    for (let i = 1; i <= pageNumber; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageNumber/portionSize)
    let [portionCurrentPage, setPortionCurrentPage] = useState(1)
    let leftPortionPage = (portionCurrentPage -1) * portionSize + 1;
    let rightPortionPage = portionCurrentPage * portionSize
debugger
   return <div className={s.pagesContainer}>
   {portionCurrentPage > 1 && <button onClick={() => {setPortionCurrentPage(portionCurrentPage-1)}} >Prev</button>}
   <div>
            {
                pages
                .filter(p => p >= leftPortionPage && p <= rightPortionPage )
                .map(p => {
                    return <>
                    <span className={`${s.page}  ${p === props.currentPage && s.activeCount}`} onClick={() => {
                        props.usersPageNumber(p)
                    }}>{p}</span></>
                })
            }
        </div>
        {portionCurrentPage < portionCount && <button onClick={() => {setPortionCurrentPage(portionCurrentPage+1)}} >Next</button>}
   </div>
}

export default Paginator;