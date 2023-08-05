import React, { useState, useEffect } from "react";
import "./UserBlogDetails.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import deleteimg from "../../assets/delete.png";
import editimg from "../../assets/edit.png";
import { useNavigate } from "react-router-dom";

function UserBlogDetails() {
  const [fetchedBlog, setFetchedBlog] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://mern-blog-app-redux-toolkit.onrender.com/api/v1/blogs/get-one-blog/${id}`
        );
        setFetchedBlog(response.data.blog);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBlog();
    // console.log(fetchedBlog);
  }, [id]);

  const handleDelete = async (e) => {
    e.preventDefault();
    //     console.log(`deleted deleted`);

    try {
      const blogId = fetchedBlog._id;
      const response = await axios.delete(
        `https://mern-blog-app-redux-toolkit.onrender.com/api/v1/blogs/delete-blog/${blogId}`
      );
      if (response.data.success) {
        console.log(`blog deleted successfully`);
        alert(`blog deleted successfully`);
        navigate("/home");
      }
    } catch (err) {
      console.log(`error while deleting blog`);
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    navigate(`/updateblog/${fetchedBlog._id}`, {
      state: {
        title: fetchedBlog.title,
        shortDescription: fetchedBlog.shortDescription,
        img: fetchedBlog.img,
        longDescription: fetchedBlog.longDescription,
      },
    });
  };

  return (
    <>
      <div className="mainbox">
        <h1 className="headin">{fetchedBlog.title}</h1>
        <div className="leftcontainer">
          <img className="detailsImg" src={fetchedBlog.img} alt="blogImg" />
        </div>

        <div className="details">
          <div className="deleteIcon">
            <img
              src={deleteimg}
              alt="delete"
              onClick={handleDelete}
              className="deleteimg"
            />
            <img
              src={editimg}
              alt="edit"
              onClick={handleEdit}
              style={{ marginLeft: "1%" }}
              className="editimg"
            />
          </div>
          <p>
            <b style={{ fontSize: "1.5rem", color: "red" }}>Introduction :</b>
            <br />
            {fetchedBlog.shortDescription}
          </p>
        </div>

        <div className="longDescription">
          <b style={{ fontSize: "1.5rem", color: "red" }}>Description :</b>
          <br />
          {fetchedBlog.longDescription}
        </div>
      </div>
    </>
  );
}

export default UserBlogDetails;
