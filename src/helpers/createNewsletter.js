import React from "react";
import { elementType } from "prop-types";

export const createNewsletter = arr => {
  const htmlNodes = [];

  arr.forEach(element => {
    let tag = element.match(/(p|h[0-6])/g);
    let content = element.replace(/<(p|h[0-6])>|<\/(p|h[0-6])>/g, "");

    switch (tag[0]) {
      case "h1":
        const h1Tag = (
          <tr align="center">
            <td>
              <h1 key={content}>{content}</h1>
            </td>
          </tr>
        );
        htmlNodes.push(h1Tag);
        break;
      case "h2":
        const h2Tag = <h2 key={content}>{content}</h2>;
        htmlNodes.push(h2Tag);
        break;
      case "h3":
        const h3Tag = (
          <tr align="center">
            <td>
              <h3 key={content}>{content}</h3>
            </td>
          </tr>
        );
        htmlNodes.push(h3Tag);
        break;
      case "p":
        const pTag = (
          <tr align="left">
            <td>
              <p key={content}>{content}</p>
            </td>
          </tr>
        );
        htmlNodes.push(pTag);
        break;
      default:
        return;
    }
  });

  const noBreaks = htmlNodes.filter(node => {
    return node.props.children !== "<br>";
  });

  return noBreaks;
};
