import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";
import { getBlogBySlug } from "../actions";

class BlogDetail extends React.Component {
  static getInitialProps({query}) {
    let blogs = {};
    const slug = query.slug
      try {
        blogs = await getBlogBySlug(slug);
      } catch (err) {
        console.error(err);
      }
      return { blogs };
    }
  
  render() {
    const {blogs} =this.props
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage title="I am Blog Detail Page"> </BasePage>
      </BaseLayout>
    );
  }
}

export default BlogDetail;
