import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./UpdateBlog.css";
import axios from "axios";

const UpdateBlog = () => {
  const userId = localStorage.getItem("userId");

  const navigate = useNavigate();
  const { id } = useParams(); // Receiving the ID from the URL
  const location = useLocation(); // Accessing location state
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [img, setImg] = useState("");
  const [longDescription, setLongDescription] = useState("");

  useEffect(() => {
    // Pre-fill the input fields and textarea with the fetched blog details
    if (location.state) {
      setTitle(location.state.title || "");
      setShortDescription(location.state.shortDescription || "");
      setImg(location.state.img || "");
      setLongDescription(location.state.longDescription || "");
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://mern-blog-app-redux-toolkit.onrender.com/api/v1/blogs/update-blog/${id}`,
        {
          title,
          shortDescription,
          img,
          longDescription,
          user: userId,
        }
      );
      if (response.data.success) {
        alert(`blog updated successfully!`);
        navigate("/home");
      }
    } catch (err) {
      console.log(`error while sending new post data, ${err}`);
    }
  };

  return (
    <>
      <div className="mainbox">
        <h1>Update blog </h1>
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
              //   required
            />
          </div>
          <div className="inpt">
            <input
              placeholder="blog-image-url"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              //   required
            />
          </div>
          <div className="inpt">
            <textarea
              placeholder="content / description"
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
              //   required
              rows={4} // Set the number of visible rows in the text area
              cols={50} // Set the number of visible columns in the text area
            />
            <p>Character Count: {longDescription.length}</p>
          </div>

          <button type="submit">Update</button>
        </form>
      </div>
    </>
  );
};

export default UpdateBlog;
