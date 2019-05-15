import React from "react";
import { Editor } from "slate-react";
import { Value } from "slate";

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            text: "A line of text in a paragraph."
          }
        ]
      }
    ]
  }
});

function CodeNode(props) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
}

export default class SlateEditor extends React.Component {
  state = {
    value: initialValue,
    isLoaded: false
  };

  componentDidMount() {
    this.setState({ isLoaded: true });
  }
  onChange = ({ value }) => {
    this.setState({ value });
  };

  onKeyDown = (event, editor, next) => {
    console.log("hey");
    if (event.key != "x" || !event.ctrlKey) return next();
    event.preventDefault();
    // Determine whether any of the currently selected blocks are code blocks.
    const isCode = editor.value.blocks.some(block => block.type == "code");
    // toggle the block type depending on `isCode`.
    editor.setBlocks(isCode ? "paragraph" : "code");
  };

  renderBlock = (props, editor, next) => {
    switch (props.node.type) {
      case "code":
        return <CodeNode {...props} />;
      case "paragraph":
        return <p {...props.attributes}> {props.children}</p>;
      default:
        return next();
    }
  };

  render() {
    const { isLoaded } = this.state;
    return (
      <React.Fragment>
        {isLoaded && (
          <Editor
            value={this.state.value}
            onKeyDown={this.onKeyDown}
            onChange={this.onChange}
            renderNode={this.renderBlock}
          />
        )}
      </React.Fragment>
    );
  }
}
