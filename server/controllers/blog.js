const Blog = require("../models/blog");
const AsyncLock = require("async-lock");
const lock = new AsyncLock();
console.log("async");

exports.getBlogById = (req, res) => {
  const blogId = req.params.id;
  Blog.findById(blogId, (err, foundBlog) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json(foundBlog);
  });
};

exports.createBlog = (req, res) => {
  const lockId = req.query.lockId;

  if (!lock.isBusy()) {
    lock.acquire(
      lockId,
      function(done) {
        const blogData = req.body;

        const blog = new Blog(blogData);

        if (req.user) {
          blog.userId = req.user.sub;
          blog.author = req.user.name;
        }

        blog.save((err, createdBlog) => {
          setTimeout(() => {
            done();
          }, 5000);

          if (err) {
            return res.status(422).send(err);
          }

          return res.json(createdBlog);
        });
      },
      function(err, ret) {
        err && console.error(err);
      }
    );
  } else {
    return res.status(422).send({ message: "Blog is saving" });
  }
};

exports.updateBlog = (req, res) => {
  const blogId = req.params.id;
  const blogData = req.body;

  Blog.findById(blogId, (err, foundBlog) => {
    if (err) {
      return res.status(422).send(err);
    }
    foundBlog.set(blogData);
    foundBlog.updatedAt = new Date();
    foundBlog.save((err, foundBlog) => {
      if (err) {
        return res.status(422).send(err);
      }
      return res.json(foundBlog);
    });
  });
};
