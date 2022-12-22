import axios from 'axios';
import { useState } from 'react';

function Form() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [content, setContent] = useState('');

  async function handleClick() {
    const [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const content = await file.text();
    setContent(content);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:5000/blog', {
      title,
      desc,
      content,
    });
    setContent('');
    setDesc('');
    setTitle('');
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          required
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Description"
          onChange={(e) => setDesc(e.target.value)}
        />
        <input type="button" value="markdown file" onClick={handleClick} />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Form;
