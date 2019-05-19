import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";
import withAuth from "../components/hoc/withAuth";
import SlateEditor from "../components/slate-editor/SlateEditor";
import { saveBlog } from "../actions";

class BlogEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  saveBlog = heading => {
    const blog = {};
    blog.title = heading.title;
    blog.subtitle = heading.subtitle;
    this.setState({ isLoading: true });
    saveBlog().then(data => {
      console.log(data);
      this.setState({ isLoading: false });
    });
  };

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass="editor-wrapper" className="blog-editor-page">
          <SlateEditor save={this.saveBlog} />
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth("siteOwner")(BlogEditor);
