function Loader(props) {
  const { loading, error } = props;
  if (!loading && !error) {
    return null;
  }

  return (
    <div className="panel-block">
      {loading && <div>Wait a moment please... </div>}
      {error && (
      <div>
        There is a problem fetching the data -
        {error}
      </div>
      )}
    </div>
  );
}

export default Loader;
