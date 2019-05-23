import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";
import withAuth from "../components/hoc/withAuth";
import SlateEditor from "../components/slate-editor/SlateEditor";
import { getBlogById } from "../actions";

class BlogEditorUpdate extends React.Component {
  static async getInitialProps({ query }) {
    const blogId = query.id;
    let blog = {};
    try {
      blog = await getBlogById(blogId);
    } catch (err) {
      console.error(error);
    }
    return { blog };
  }
  constructor(props) {
    super(props);
    this.state = {
      isSaving: false
    };
  }

  render() {
    const { blog } = this.props;
    const { isSaving } = this.state;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass="editor-wrapper" className="blog-editor-page">
          <SlateEditor
            initialValue={blog.story}
            isSaving={isSaving}
            save={this.saveBlog}
          />
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth("siteOwner")(BlogEditorUpdate);