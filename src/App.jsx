import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from './routes/Layout';
import Post from './routes/Post';
import PostList from './routes/PostList';
import Authenticate from './routes/Authenticate';
import Logout from './routes/Logout';
import NotFound from './routes/NotFound';
import init from './i18n';

init();

function App() {
  return (
    <Routes>
      <Route path="app" element={<Layout />}>
        <Route index element={<PostList />} />
        <Route path=":postId" element={<Post />} />
      </Route>
      <Route path="auth" element={<Authenticate />} />
      <Route path="logout" element={<Logout />} />
      <Route path="/" element={<Navigate to="/app" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
