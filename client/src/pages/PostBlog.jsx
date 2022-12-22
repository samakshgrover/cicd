import { useState } from 'react';
import './PostBlog.css';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import env from '../Environment/env';
import { useNavigate } from 'react-router-dom';

function PostBlog() {
  const [content, setContent] = useState();
  const [description, setDescription] = useState();
  const [title, setTitle] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fileInput = document.getElementById('file');
    fileInput.addEventListener('change', async () => {
      const text = await fileInput.files[0].text();
      setContent(text);
    });
  }, []);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title | !description | !content) {
      alert('Fill the complete form then submit');
      return;
    }
    // console.log({ title, description, content });
    const res = await axios.post(`${env.apiEndpoint}`, {
      title,
      description,
      content,
    });
    setContent('');
    setTitle('');
    setDescription('');
    navigate('/');
  }

  return (
    <div>
      <h3 style={{ marginBottom: '20px', color: 'darkolivegreen' }}>
        Preview of your markdown file submite if your satisfied
      </h3>
      <div className="form-view">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => handleTitleChange(e)}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => handleDescriptionChange(e)}
          />
          <input
            type="file"
            accept=".md"
            id="file"
            className="custom-file-input"
          />
          <input type="submit" value="submit" />
        </form>
        <hr />
        <div>
          <ReactMarkdown children={content} />
        </div>
      </div>
    </div>
  );
}

export default PostBlog;

// const openFileFromSystem = async () => {
//   const handles = await window.showOpenFilePicker({
//     types: [
//       {
//         description: 'Markdown Files',
//         accept: {
//           'text/markdown': ['.md'],
//         },
//       },
//     ],
//   });

//   // return handles;
//   const file = await handles[0].getFile();
//   const text = await file.text();
//   console.log(text);
// };

// async function handleClick() {
//   const [fileHandle] = await window.showOpenFilePicker();
//   const file = await fileHandle.getFile();
//   const text = await file.text('');
//   setContent(text);
// }
