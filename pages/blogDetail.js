import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";
import { getBlogBySlug } from "../actions";
import { Row, Col } from "reactstrap";

class BlogDetail extends React.Component {
  static async getInitialProps({ query }) {
    let blogs = {};
    const slug = query.slug;
    try {
      blogs = await getBlogBySlug(slug);
    } catch (err) {
      console.error(err);
    }
    return { blogs };
  }

  render() {
    const { blogs } = this.props;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="blog-detail-page">
          <Row>
            <Col md={{ size: 8, offset: 3 }} offset="2" className="offset-md-2">
              <div dangerouslySetInnerHTML={{ __html: blogs.story }} />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default BlogDetail;
