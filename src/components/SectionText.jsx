function SectionText(props) {
  const { content } = props;

  return (
    <>
      <h1>SectionText</h1>
      <p style={{ margin: 10, fontFamily: 'fantasy' }}>
        {content}
      </p>
    </>
  );
}

export default SectionText;
