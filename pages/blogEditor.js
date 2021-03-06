import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";
import withAuth from "../components/hoc/withAuth";
import SlateEditor from "../components/slate-editor/SlateEditor";
import { createBlog } from "../actions";
import { Router } from "../routes";
import { toast } from "react-toastify";

class BlogEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaving: false,
      lockId: Math.floor(1000 + Math.random() * 9000)
    };
  }

  saveBlog = (story, heading) => {
    const { lockId } = this.state;
    const blog = {};
    blog.title = heading.title;
    blog.subtitle = heading.subtitle;
    blog.story = story;
    this.setState({ isSaving: true });
    createBlog(blog, lockId)
      .then(data => {
        toast.success("Blog Saved Successfully");
        this.setState({ isSaving: false });
        Router.pushRoute(`/blogs/${data._id}/edit`);
      })
      .catch(err => {
        console.error(err);
        toast.error("Error Saving Blog, try again ...");
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
