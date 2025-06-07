import axios from 'axios';
import React, { useEffect, useState } from 'react'

const HomePage = () => {
  
  const API_URL= 'http://localhost:3000/blogs';

  const [blogs, setBlogs] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(API_URL);
        setBlogs(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBlogs()
  }, [])

  return (
    <div className='p-4 px-16 mt-10 flex flex-col space-y-10'>
      {/* All blogs should go here */}
      <div>
        <div>
          <h1 className='text-2xl font-bold mb-4'>Welcome to My Blog</h1>
          <p className='text-gray-700 mb-4'>Here you can find a collection of my latest blog posts.</p>
        </div>
        <section>
      
          <article className='p-4 bg-white shadow-md rounded-md grid grid-cols-2 gap-6'>
            {blogs.length === 0 ? (
              <p>No blogs have been added yet</p>
            ) : (
              blogs.map((blog) => (
                <div key={blog.id} >
                  <h2 className='text-xl font-bold mb-2'>{blog.title}</h2>
                  <p className='text-gray-700 mb-4'>{blog.description}</p>
                  <p className='text-sm text-gray-500'>Author: {blog.author}</p>
                  
                </div>
              ))
            )}
          </article>
        </section>
      </div>
      {/* Favourite blogs should go here */}
      <div></div>
    </div>
  )
}

export default HomePage