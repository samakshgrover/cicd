import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Root from './pages/Root';
import Blog from './components/Blog';
import PostBlog from './pages/PostBlog';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} />
      <Route path="/blogs/:blogId" element={<Blog />} />
      <Route path="/create-post" element={<PostBlog />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
