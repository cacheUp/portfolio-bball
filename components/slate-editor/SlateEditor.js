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
function BoldMark(props) {
  return <strong>{props.children}</strong>;
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
    if (!event.ctrlKey) return next();
    // Decide what to do based on the key code...
    switch (event.key) {
      // When "B" is pressed, add a "bold" mark to the text.
      case "b": {
        event.preventDefault();
        editor.toggleMark("bold");
        break;
      }
      // When "`" is pressed, keep our existing code block logic.
      case "`": {
        const isCode = editor.value.blocks.some(block => block.type == "code");
        event.preventDefault();
        editor.setBlocks(isCode ? "paragraph" : "code");
        break;
      }
      // Otherwise, let other plugins handle it.
      default: {
        return next();
      }
    }
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

  renderMark = (props, editor, next) => {
    switch (props.mark.type) {
      case "bold":
        return <BoldMark {...props} />;
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
            renderMark={this.renderMark}
          />
        )}
      </React.Fragment>
    );
  }
}
