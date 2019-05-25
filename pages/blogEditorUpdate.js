import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";
import withAuth from "../components/hoc/withAuth";
import SlateEditor from "../components/slate-editor/SlateEditor";
import { getBlogById, updateBlog } from "../actions";

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
    this.updateBlog = this.updateBlog.bind(this);
  }

  updateBlog(story, heading) {
    const { blog } = this.props;
    const updatedBlog = {};
    updatedBlog.title = heading.title;
    updatedBlog.subtitle = heading.subtitle;
    updatedBlog.story = story;
    this.setState({ isSaving: true });
    updateBlog(updatedBlog, blog._id)
      .then(data => {
        this.setState({ isSaving: false });
      })
      .catch(err => {
        console.error(err);
        this.setState({ isSaving: false });
      });
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
            save={this.updateBlog}
          />
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth("siteOwner")(BlogEditorUpdate);
