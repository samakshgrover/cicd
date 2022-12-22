import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import ListElement from './ListElement';
import env from '../Environment/env';

function BlogList() {
  const [list, setList] = useState();
  useEffect(() => {
    axios.get(`${env.apiEndpoint}`).then((res) => {
      setList(res.data.result);
      // console.log(res.data.result);
    });
  }, []);
  return (
    <>
      {list
        ? list.map((item) => <ListElement key={item.id} item={item} />)
        : ''}
    </>
  );
}

export default BlogList;
