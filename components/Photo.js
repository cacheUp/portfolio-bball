import React, { useState } from "react";
import axios from "axios";

export const Photo = () => {
  const [file, setFile] = useState(null);

  const submitBlog = async (values, file) => {
    const {
      data: { key, url }
    } = await axios.get("/api/v1/photo/signed");
    console.log(url);
    try {
      await axios.put(url, file, {
        headers: {
          ContentType: file.type
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = event => {
    submitBlog(file);
  };
  const onFileChange = event => {
    setFile(event.target.files[0]);
  };

  return (
    <form onSubmit={onSubmit}>
      <input onChange={onFileChange} type="file" accept="image/*" />
      <button type="submit">Submit</button>
    </form>
  );
};
