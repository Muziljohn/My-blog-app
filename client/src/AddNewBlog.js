import React, { useState } from "react";
import Header from "./Header";
import ReactQuill from "react-quill";
import "./App.css";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];
function AddNewBlog() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const [file, setImage] = useState();
  const handelSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);

    data.set("file", file[0]);
    data.set("content", value);
    try {
      let Data = await axios.post("blog/", data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (Data) {
        console.log(Data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Header />

      <form
        style={{ textAlign: "center", maxWidth: "100%" }}
        onSubmit={handelSubmit}
      >
        <h4>Add new Blog</h4>
        <input
          className="inputStyle"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          className="inputStyle"
          placeholder="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
        />
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
          style={{ marginTop: "4px", marginBottom: "4px" }}
        />
        <input
          className="inputStyle"
          onChange={(e) => setImage(e.target.files)}
          type="file"
        />

        <button type="submit" className="inputStyle">
          Add post
        </button>
      </form>
    </div>
  );
}

export default AddNewBlog;
