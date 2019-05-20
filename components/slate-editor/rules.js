const BLOCK_TAGS = {
  blockquote: "quote",
  p: "paragraph",
  ul: "bulleted-list",
  li: "list-item",
  ol: "numbered-list",
  h1: "heading-one",
  h2: "heading-two"
};

// Add a dictionary of mark tags.
const MARK_TAGS = {
  em: "italic",
  strong: "bold",
  u: "underline",
  code: "code"
};

const rules = [
  {
    deserialize(el, next) {
      const type = BLOCK_TAGS[el.tagName.toLowerCase()];
      if (type) {
        return {
          object: "block",
          type: type,
          nodes: next(el.childNodes)
        };
      }
    },
    serialize(obj, children) {
      if (obj.object == "block") {
        switch (obj.type) {
          case "paragraph":
            return <p className={obj.data.get("className")}>{children}</p>;
          case "quote":
            return <blockquote>{children}</blockquote>;
        }
      }
    }
  },
  // Add a new rule that handles marks...
  {
    deserialize(el, next) {
      const type = MARK_TAGS[el.tagName.toLowerCase()];
      if (type) {
        return {
          object: "mark",
          type: type,
          nodes: next(el.childNodes)
        };
      }
    },
    serialize(obj, children) {
      if (obj.object == "mark") {
        switch (obj.type) {
          case "bold":
            return <strong>{children}</strong>;
          case "italic":
            return <em>{children}</em>;
          case "underline":
            return <u>{children}</u>;
        }
      }
    }
  }
];
