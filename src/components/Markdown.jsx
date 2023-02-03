import _isEmpty from 'lodash/isEmpty';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import useFetch from '../hooks/useFetch';

function Markdown({ id }) {
  const {
    data, error, loading,
  } = useFetch({
    url: `md/${id}`,
    type: 'text/markdown',
  });

  return (
    <div className="column is-three-quarters m-auto">
      {error}
      {loading && '...'}
      {!_isEmpty(data) && (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data}
        </ReactMarkdown>
      )}
    </div>
  );
}

export default Markdown;
