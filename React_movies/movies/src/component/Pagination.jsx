import React, { Component } from 'react'
//pagenumber
//currentPage
//changeCurrentPagefunction
//UI
export default class Pagination extends Component {
    render() {
      let {numberofPage,currPage,changeCurrentPage}=this.props
      let pageNumberArr=[];
      for(let i=0;i<numberofPage;i++){
        pageNumberArr.push(i+1);
      }
      return (
        <nav aria-label="..." className='col-2'>
              <ul class="pagination">
                {
                  pageNumberArr.map((pageNumber)=> {
                    let additional=currPage===pageNumber?"page-item active":"page-item";
                  return(
                    <li className={additional} aria-current="page" onClick={()=>{changeCurrentPage(pageNumber)}}>
                    <span className="page-link">{pageNumber}</span>
                    </li>
                  )
                })
              }
              </ul>
            </nav>
      )
    }
  }