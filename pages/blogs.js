import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";
import { Container, Row, Col } from "reactstrap";
import moment from "moment";
import { Link } from "../routes";
import { getBlogs } from "../actions";
import { shortenText } from "../helpers/utils";

class Blogs extends React.Component {
  static async getInitialProps({ req }) {
    let blogs = [];
    try {
      blogs = await getBlogs(req);
    } catch (err) {
      console.error(err);
    }
    return { blogs };
  }
  renderBlogs = blogs =>
    blogs.map((blog, index) => (
      <div key={index} className="post-preview">
        <Link route={`/blogs/${blog.slug}`}>
          <a>
            <h2 className="post-title">{blog.title}</h2>
            <h3 className="post-subtitle">{shortenText(blog.subtitle)}</h3>
          </a>
        </Link>
        <p className="post-meta">
          Posted by
          <a href="#"> {blog.author} </a>
          {moment(blog.createdAt).format("LLLL")}
        </p>
      </div>
    ));
  render() {
    const { blogs } = this.props;

    return (
      <BaseLayout
        title="Bradley Ball - Newest Blogs to Read"
        {...this.props.auth}
        headerType={"landing"}
        className="blog-listing-page"
      >
        <div
          className="masthead"
          style={{ backgroundImage: "url('/static/images/home-bg.jpg')" }}
        >
          <div className="overlay" />
          <Container>
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Fresh Blogs</h1>
                  <span className="subheading">Programming, travelling...</span>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <BasePage className="blog-body">
          <Row>
            <Col md="10" lg="8" className="mx-auto">
              {this.renderBlogs(blogs)}
              <div className="clearfix">
                <a className="btn btn-primary float-right" href="#">
                  Older Posts &rarr;
                </a>
              </div>
            </Col>
          </Row>

          <footer>
            <Container>
              <Row>
                <div className="col-lg-8 col-md-10 mx-auto">
                  <ul className="list-inline text-center">
                    <li className="list-inline-item">
                      <a
                        style={{ color: "black" }}
                        className="index-icon"
                        target="_blank"
                        href="https://stackoverflow.com/users/11483018/brad-ball"
                      >
                        <span
                          className="fa-stack fa-lg"
                          style={{ color: "black" }}
                        >
                          <i
                            className="fas fa-circle fa-stack-2x"
                            style={{ color: "black" }}
                          />
                          <i className="fab fa-stack-overflow fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a target="_blank" href="https://github.com/cacheUp">
                        <span className="fa-stack fa-lg">
                          <i className="fas fa-circle fa-stack-2x" />
                          <i className="fab fa-github fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p className="copyright text-muted">
                    Copyright &copy; Bradley Ball 2019
                  </p>
                </div>
              </Row>
            </Container>
          </footer>
        </BasePage>
        <style jsx>
          {`
            @import url("https://use.fontawesome.com/releases/v5.5.0/css/all.css");
          `}
        </style>
      </BaseLayout>
    );
  }
}

export default Blogs;
