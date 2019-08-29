import { graphql } from "gatsby";
import * as React from "react";
import Img from "gatsby-image";
import { IndexQueryQuery } from "../graphqlTypes";

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }

    file(relativePath: { eq: "example.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default class IndexPage extends React.Component<
  { data: IndexQueryQuery },
  {}
> {
  readonly hello = `Hello`;
  public render() {
    const { siteName } = this.props.data.site!.siteMetadata!;
    return (
      <div>
        <h1>{this.hello} TypeScript world!</h1>
        <p>
          This site is named <strong>{siteName}</strong>
        </p>

        <Img fixed={this.props.data.file!.childImageSharp!.fixed} />
      </div>
    );
  }
}
