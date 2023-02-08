/* eslint-disable react/no-danger */
import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const {
    frontmatter,
    html,
  } = markdownRemark;
  const featuredImg = getImage(
    frontmatter.featuredImage?.childImageSharp?.gatsbyImageData,
  );

  return (
    <div>
      <div>
        <h1>{frontmatter.title}</h1>
        <h3>{frontmatter.date}</h3>
        <GatsbyImage image={featuredImg} alt={frontmatter.title} />
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`;
