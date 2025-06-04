import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const AddNew = () => {

  const API_URL = 'http://localhost:3000/blogs'

  const navigate = useNavigate();
  
  const [blogs, setBlogs] = useState([])
  const [formData, setFormData] = useState({
      title: '',
      description: '',
      author: ''
    })

    const handleSubmit = async (e) => {
      e.preventDefault()
      const response = await axios.post(API_URL, formData)
      try {
          setBlogs((prev) => [...prev, response.data])
          setFormData({
            title: '',
            description: '',
            author: ''
          })
        navigate('/blog')
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div className='w-[100vh] mx-auto p-4 bg-white shadow-md rounded-lg mt-20'>
      <h1 className="text-2xl font-bold mb-4">Add New Post</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <input type="text" className="w-full p-2 border rounded" placeholder='Enter title...' value={formData.title} onChange={(e) => setFormData(prev => ({...prev, title: e.target.value}))} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea className="w-full p-2 border rounded" rows="5" placeholder='Enter blog content...' value={formData.description} onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))} ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Author</label>
          <input className="w-full p-2 border rounded" placeholder='Enter your name...' value={formData.author} onChange={(e) => setFormData(prev => ({...prev, author: e.target.value}))} />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded"  >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddNew