import _map from 'lodash/map';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loader from '../components/Loader';

function PostList() {
  const { data, loading, error } = useFetch({
    method: 'GET',
    url: 'data',
  });

  return (
    <>
      <Loader
        loading={loading}
        error={error}
      />
      <ul>
        {_map(
          data,
          (id) => (
            <li key={id}>
              <Link to={id}>
                {id}
              </Link>
            </li>
          ),
        )}
      </ul>
    </>
  );
}

export default PostList;
