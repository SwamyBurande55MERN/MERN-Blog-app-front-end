import React, { useState } from "react";
import "./CreateBlog.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [img, setImg] = useState("");
  const [longDescription, setLongDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = localStorage.getItem("userId");
    // console.log(title, shortDescription, img, user, longDescription);
    // console.log(id);
    try {
      const response = await axios.post(
        "https://mern-blog-app-redux-toolkit.onrender.com/api/v1/blogs/create-new-blog",
        {
          title,
          shortDescription,
          img,
          longDescription,
          user: id,
        }
      );
      if (response.data.success) {
        alert(`new blog posted successfully!`);
        navigate("/home");
      }
    } catch (err) {
      console.log(`error while sending new post data, ${err}`);
    }
  };

  return (
    <>
      <div className="mainbox">
        <h1>Create blog page</h1>
        <form onSubmit={handleSubmit}>
          <div className="inpt">
            <input
              placeholder="blog - title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="inpt">
            <input
              placeholder="short-Description"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              required
            />
          </div>
          <div className="inpt">
            <input
              placeholder="blog-image-url"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              required
            />
          </div>
          <div className="inpt">
            <textarea
              placeholder="content / description"
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
              required
              rows={4} // Set the number of visible rows in the text area
              cols={50} // Set the number of visible columns in the text area
            />
            <p>Character Count: {longDescription.length}</p>
          </div>

          <button type="submit">Post new Blog</button>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
