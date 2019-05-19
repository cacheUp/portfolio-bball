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

export default class SlateEditor extends React.Component {
  state = {
    value: initialValue,
    isLoaded: false
  };
  menuRef = React.createRef();

  componentDidMount() {
    this.updateMenu();
    this.setState({ isLoaded: true });
  }

  componentDidUpdate = () => {
    this.updateMenu();
  };

  onChange = ({ value }) => {
    this.setState({ value });
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
    return {
      title: "Some Title",
      subTitle: "Some SubTitle"
    };
  }

  save() {
    const { save } = this.props;
    const headingValues = this.getTitle();
    save(headingValues);
  }

  render() {
    const { isLoaded } = this.state;
    return (
      <React.Fragment>
        {isLoaded && (
          <Editor
            {...this.props}
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
    return (
      <React.Fragment>
        <ControlMenu save={() => this.save()} />
        {children}
        <div>Bradley Ball</div>
        <HoverMenu ref={this.menuRef} editor={editor} />
      </React.Fragment>
    );
  };
}
