import React, { useState, useEffect } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [book,setBooks] = useState([]); 

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
        .then(res => res.json())
        .then(data => setBooks(data.slice(5,11)))
    },[])

  return (
    <div>
        <BookCards books={book} headline="OtherBooks"/>
    </div>
  )
}

export default OtherBooks