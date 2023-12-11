import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';

const UploadBook = () => {
  const bookCategory = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Horror",
    "Young Adult Fiction",
    "Humor",
    "Romance",
    "History",
    "Fantasy",
    "Science Fiction",
    "Programming",
    "Autobiography",
    "Bibliography",
    "Business",
    "Memoir",
    "Children Books",
    "Self-help",
    "Travel",
    "Religion",
    "Art & Design"
  ]

  const [selectedBookCategory,setSelectedBookCategory] = useState(bookCategory[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  }

  // handle book submition
  const handleBookSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfURL = form.bookPdfURL.value;

    const bookObj = {
      bookTitle,authorName,imageURL,category,bookDescription,bookPdfURL
    }

    console.log(bookObj);

    // send data to db
    fetch("http://localhost:5000/upload-book",{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj)
    })
    .then(res => res.json())
    .then(data => {
      alert("Book Uploaded Succesfully!!!");
      form.reset();
    })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" type="text" placeholder="Book Name" required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" type="text" placeholder="Author Name" required />
          </div>
        </div>
        
        {/* second row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image URL" />
            </div>
            <TextInput id="imageURL" type="text" placeholder="URL" required />
          </div>
          {/* category */}
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='inputState' value='Book Category'/>
            </div>
            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue} >
              {
                bookCategory.map((opt) => 
                  <option key={opt} value={opt}>{opt}</option>
                )
              }
            </Select>
          </div>
        </div>

        {/* Book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" name='bookDescription' type="text" placeholder="Write Your Description..." required rows={5} className='w-full' />
        </div>

        {/* Book PDF link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPdfURL" name="bookPdfURL" type="text" placeholder="PDF URL" required />
        </div>

        {/* Upload Button */}
        <Button type='submit' className='mt-5'>
            Upload Book
        </Button>
      </form>
    </div>
  )
}

export default UploadBook