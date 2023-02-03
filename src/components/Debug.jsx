import { useState } from 'react';
import _slice from 'lodash/slice';

function Debug(props) {
  const {
    data,
    closed,
  } = props;

  const json = JSON.stringify(data, null, 2);
  const [isOpen, setIsOpen] = useState(!closed);

  const content = isOpen
    ? json
    : _slice(json, 0, 20);

  const style = {
    outline: '1px solid #ddd',
    backgroundColor: '#eee',
    margin: 5,
    padding: 5,
    borderRadius: 5,
  };

  return (
    // eslint-disable-next-line
    <pre onClick={() => setIsOpen(!isOpen)} style={style}>
      {content}
    </pre>
  );
}

export default Debug;
