import { css } from "emotion";
import React from "react";
import ReactDOM from "react-dom";
import { Menu } from "./components";
import { MarkButton, renderBlocksButton } from "./renderers/index";

export const HoverMenu = React.forwardRef(({ editor }, ref) => {
  const root = window.document.getElementById("__next");

  const renderBlockButton = (type, icon) => {
    return renderBlocksButton(type, icon, editor);
  };

  return ReactDOM.createPortal(
    <Menu
      ref={ref}
      className={css`
        padding: 8px 7px 6px;
        position: absolute;
        z-index: 1;
        top: -10000px;
        left: -10000px;
        margin-top: -6px;
        opacity: 0;
        background-color: #222;
        border-radius: 4px;
        transition: opacity 0.75s;
      `}
    >
      <MarkButton editor={editor} type="bold" icon="format_bold" />
      <MarkButton editor={editor} type="italic" icon="format_italic" />
      <MarkButton editor={editor} type="underlined" icon="format_underlined" />
      <MarkButton editor={editor} type="code" icon="code" />
      {renderBlockButton("heading-one", "looks_one")}
      {renderBlockButton("heading-two", "looks_two")}
      {renderBlockButton("block-quote", "format_quote")}
      {renderBlockButton("numbered-list", "format_list_numbered")}
      {renderBlockButton("bulleted-list", "format_list_bulleted")}
    </Menu>,
    root
  );
});
