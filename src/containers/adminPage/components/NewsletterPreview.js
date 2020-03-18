import React, { useState } from "react";
import styled from "styled-components";
import { createNewsletter } from "../../../helpers/createNewsletter";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import DownloadNewsletter from "./DownloadNewsletter";

const NewsletterPreview = ({ previewHtml, color, newsletterRef }) => {
  const organizeHtml = previewHtml.replace(/\s*(-)\s*/g, "$1");
  const newsletterSections = organizeHtml
    .replace(
      /<p>----(Header|Body|Footer|Quiz|Links|Answers|Community)----<\/p>/g,
      "*"
    )
    .split("*")
    .filter(Boolean);

  const renderNewsletter = () => {
    return (
      <table id="newsletter" width="100%">
        <thead className="header">
          <tr align="center">
            <td>{ReactHtmlParser(newsletterSections[0])}</td>
          </tr>
          <tr align="center">
            <td>
              <div className="grey-divider"></div>
            </td>
          </tr>
        </thead>
        <tbody className="body">
          <tr className="body-row-quiz">
            <td>{ReactHtmlParser(newsletterSections[1])}</td>
          </tr>
          <tr align="center">
            <td>
              <div className="grey-divider"></div>
            </td>
          </tr>
          <tr className="body-row-links">
            <td>{ReactHtmlParser(newsletterSections[2])}</td>
          </tr>
          <tr align="center">
            <td>
              <div className="grey-divider"></div>
            </td>
          </tr>
          <tr className="body-row-links">
            <td>{ReactHtmlParser(newsletterSections[3])}</td>
          </tr>
          <tr align="center">
            <td>
              <div className="grey-divider"></div>
            </td>
          </tr>
          <tr className="body-row-quiz">
            <td>{ReactHtmlParser(newsletterSections[4])}</td>
          </tr>
        </tbody>
        <tfoot className="footer">
          <tr align="center">
            <td>
              <div className="grey-divider"></div>
            </td>
          </tr>
          <tr align="center">
            <td>{ReactHtmlParser(newsletterSections[5])}</td>
          </tr>
        </tfoot>
      </table>
    );
  };
  return (
    <NewsletterContainer>
      <Newsletter color={color}>{renderNewsletter()}</Newsletter>
    </NewsletterContainer>
  );
};

export default NewsletterPreview;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewsletterContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
`;

const Newsletter = styled.div`
  table {
    font-family: monospace;
    padding: 20px 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre {
    margin: 10px 0;
    padding: 0;
    color: ${props => props.color};
  }
  p {
    margin-bottom: 10px;
    line-height: 20px;
    font-size: 16px;
  }
  pre {
    white-space: pre-line;
  }
  .body {
    border-radius: 2px;
  }
  .body-row-quiz {
    background: #2d2d2d;
  }
  .body-row-quiz td {
    padding: 20px;
  }
  .body-row-quiz p {
    color: #999999;
  }
  /* .body-row-links {
    background: #e8e8e8;
  } */
  /* .body-row-links td {
    padding: 20px;
  } */
  strong {
    color: ${props => props.color};
  }
  .footer {
    font-size: 10px;
  }
  .footer p {
    margin: 10px 0;
    font-size: 14px;
  }
  .header p {
    text-align: left;
  }
  .grey-divider {
    height: 5px;
    background: rgba(220, 220, 220, 0.5);
    border-radius: 2px;
    margin: 20px 0;
  }
`;
