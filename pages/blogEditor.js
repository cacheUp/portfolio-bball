import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";
import withAuth from "../components/hoc/withAuth";
import SlateEditor from "../components/slate-editor/SlateEditor";
import { createBlog } from "../actions";

class BlogEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaving: false
    };
  }

  saveBlog = (story, heading) => {
    const blog = {};
    blog.title = heading.title;
    blog.subtitle = heading.subtitle;
    blog.story = story;
    this.setState({ isSaving: true });
    createBlog().then(data => {
      console.log(data, blog);
      this.setState({ isSaving: false });
    });
  };

  render() {
    const { isSaving } = this.state;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass="editor-wrapper" className="blog-editor-page">
          <SlateEditor isSaving={isSaving} save={this.saveBlog} />
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth("siteOwner")(BlogEditor);
