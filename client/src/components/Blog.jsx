import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import env from '../Environment/env';

function Blog() {
  const [str, setStr] = useState();
  const { blogId } = useParams();
  useEffect(() => {
    const url = `${env.apiEndpoint}/${blogId}`;
    console.log(url);
    axios.get(url).then((res) => {
      console.log(res.data.result);
      setStr(res.data.result.content);
    });
  }, []);
  return (
    <>
      <Header />
      {str ? (
        <ReactMarkdown children={str} />
      ) : (
        <ReactMarkdown children="# hello" />
      )}
      <Link rel="prev" to="/" style={{ marginRight: '20px' }}>
        ← The To Home
      </Link>
    </>
  );
}

export default Blog;
