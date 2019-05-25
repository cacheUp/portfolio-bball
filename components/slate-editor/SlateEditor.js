import React from "react";
import { Editor } from "slate-react";
import { initialValue } from "./initial-value";
import {
  renderMark,
  renderBlockButton,
  renderNode
} from "../slate-editor/renderers";
import { HoverMenu } from "../slate-editor/HoverMenu";
import { ControlMenu } from "./ControlMenu";
import Html from "slate-html-serializer";
import { rules } from "./rules";
import { Value } from "slate";

const html = new Html({ rules });

export default class SlateEditor extends React.Component {
  state = {
    value: Value.create(),
    isLoaded: false
  };
  menuRef = React.createRef();

  componentDidMount() {
    const valueFromProps = this.props.initialValue;
    const value = valueFromProps
      ? Value.fromJSON(html.deserialize(valueFromProps))
      : Value.fromJSON(initialValue);
    this.updateMenu();
    this.setState({ isLoaded: true, value });
  }

  componentDidUpdate = () => {
    this.updateMenu();
  };

  onChange = ({ value }) => {
    this.setState({ value });
  };

  onKeyDown = (event, change, next) => {
    const { isLoading } = this.props;
    if (!isLoading && event.which === 83 && (event.ctrKey || event.metaKey)) {
      event.preventDefault();
      this.save();
      return;
    }
    next();
  };

  updateMenu = () => {
    const menu = this.menuRef.current;
    if (!menu) return;

    const { value } = this.state;
    const { fragment, selection } = value;

    if (selection.isBlurred || selection.isCollapsed || fragment.text === "") {
      menu.removeAttribute("style");
      return;
    }

    const native = window.getSelection();
    const range = native.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    menu.style.opacity = 1;
    menu.style.top = `${rect.top + window.pageYOffset - menu.offsetHeight}px`;

    menu.style.left = `${rect.left +
      window.pageXOffset -
      menu.offsetWidth / 2 +
      rect.width / 2}px`;
  };

  getTitle() {
    const { value } = this.state;
    const firstBlock = value.document.getBlocks().get(0);
    const secondBlock = value.document.getBlocks().get(1);
    const title = firstBlock && firstBlock.text ? firstBlock.text : "No Title";
    const subtitle =
      secondBlock && secondBlock.text ? secondBlock.text : "No Title";
    return {
      title: title,
      subtitle: subtitle
    };
  }

  save() {
    const { value } = this.state;
    const { save, isSaving } = this.props;
    const headingValues = this.getTitle();
    const text = html.serialize(value);

    !isSaving && save(text, headingValues);
  }

  render() {
    const { isLoaded } = this.state;
    return (
      <React.Fragment>
        {isLoaded && (
          <Editor
            {...this.props}
            onKeyDown={this.onKeyDown}
            value={this.state.value}
            onChange={this.onChange}
            renderEditor={this.renderEditor}
            renderMark={renderMark}
            renderNode={renderNode}
            placeholder="Place some text..."
          />
        )}
      </React.Fragment>
    );
  }

  renderEditor = (props, editor, next) => {
    const children = next();
    const { isSaving } = props;
    return (
      <React.Fragment>
        <ControlMenu isSaving={isSaving} save={() => this.save()} />
        {children}
        <div>Bradley Ball</div>
        <HoverMenu ref={this.menuRef} editor={editor} />
      </React.Fragment>
    );
  };
}
