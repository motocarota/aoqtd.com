import { useParams, useNavigate } from 'react-router-dom';
import Debug from '../components/Debug';
import useFetch from '../hooks/useFetch';
import Loader from '../components/Loader';
import Section from '../components/Section';

function Post() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const { loading, error, data = {} } = useFetch({
    method: 'GET',
    url: `data/${postId}`,
  });
  const { sections = [] } = data;

  return (
    <>
      <Loader
        loading={loading}
        error={error}
      />
      <div>
        <button type="button" onClick={goBack}>
          Go back
        </button>
        <Debug data={data} />
        {sections.map(
          (s, i) => (<Section key={i} type={s.type} content={s.content} />),
        )}
      </div>
    </>
  );
}

export default Post;
