import axios from "axios";
import { Heart, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const API_URL = "http://localhost:3000/blogs";

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
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
  const storedFavorites = localStorage.getItem("favorites");
  if (storedFavorites) {
    try {
      setFavorites(JSON.parse(storedFavorites));
    } catch (err) {
      console.error("Failed to parse favorites from localStorage", err);
    }
  }
}, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirmDelete) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavorite = (id) => {
    const blogToAdd = blogs.find((blog) => blog.id === id);
    const isAlreadyFavorite = favorites.some((fav) => fav.id === id);

    let updatedFavorites;
    if (isAlreadyFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== id);
    } else {
      updatedFavorites = [...favorites, blogToAdd];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="p-4 px-16 mt-20 flex space-x-10">
      <section className="w-[60%] space-y-10">
        <article className="space-y-10">
          {blogs.length === 0 ? (
            <p className="text-center text-gray-500">No blogs available</p>
          ) : (
            blogs.map((blog) => (
              <div key={blog.id} className="p-4 bg-white shadow-md rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <div className="flex items-center space-x-4">
                    <button
                      className='cursor-pointer hover:scale-105'
                      onClick={() => addToFavorite(blog.id)}
                    >
                      <Heart className={`${
                        favorites.some((fav) => fav.id === blog.id)
                          ? "fill-red-700 text-red-700"
                          : ""
                      }`}/>
                    </button>
                    <button
                      className="cursor-pointer hover:scale-105"
                      onClick={() => handleDelete(blog.id)}
                    >
                      <Trash2 />
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <p className="text-sm text-gray-500">Author: {blog.author}</p>
              </div>
            ))
          )}
        </article>
      </section>
      <section className="w-[40%]">
        <article>
          {blogs.length === 0 ? (
            <p className="text-center text-gray-500">No blogs available</p>
          ) : (
            blogs.map((blog) => (
              <div key={blog.id}>
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <p className="text-sm text-gray-500">Author: {blog.author}</p>
              </div>
            ))
          )}
        </article>
      </section>
    </div>
  );
};

export default Blog;
