import React from "react";

import BookComponent from "./BookComponent";

const BookShelfComponent  = (props) =>{
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">
                {props.headLine}
            </h2>
            <div className="bookshelf-books">
                {props.books.length >0 ? 
                <ul className="books-grid">
                    <BookComponent books ={props.books} handleChangeShelve = {props.handleChangeShelve} />
                </ul> : h4{props.message}}
            </div>
        </div>
    )
}

export default BookShelfComponent