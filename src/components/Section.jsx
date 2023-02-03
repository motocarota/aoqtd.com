import SectionText from './SectionText';
import SectionImages from './SectionImages';

function Section(props) {
  const {
    type,
    content,
  } = props;

  switch (type) {
    case 'text':
      return <SectionText content={content} />;

    case 'images':
      return <SectionImages content={content} />;

    default:
      return (
        <>
          unknown type:
          {type}
          ;
          <pre>{JSON.stringify(content, 0, 2)}</pre>
        </>
      );
  }
}

export default Section;
