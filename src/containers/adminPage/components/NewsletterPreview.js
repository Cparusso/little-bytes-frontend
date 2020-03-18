import React from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import logo from "../../../assets/logo.png";

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
            <td>
              <img src={logo} alt="logo" />
              {ReactHtmlParser(newsletterSections[0])}
            </td>
          </tr>
          <tr align="center">
            <td>
              <div className="grey-divider"></div>
            </td>
          </tr>
        </thead>
        <tbody className="body">
          <tr>
            <td>{ReactHtmlParser(newsletterSections[1])}</td>
          </tr>
          <tr className="body-row-quiz">
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
          <tr>
            <td>{ReactHtmlParser(newsletterSections[4])}</td>
          </tr>
          <tr className="body-row-quiz">
            <td>{ReactHtmlParser(newsletterSections[5])}</td>
          </tr>
        </tbody>
        <tfoot className="footer">
          <tr align="center">
            <td>
              <div className="grey-divider"></div>
            </td>
          </tr>
          <tr align="center">
            <td>{ReactHtmlParser(newsletterSections[6])}</td>
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

const NewsletterContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
`;

const Newsletter = styled.div`
  table {
    padding: 20px 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #2d2d2d;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    margin: 10px 0;
    padding: 0;
  }
  h1 {
    font-size: 26px;
  }
  p {
    line-height: 22px;
    font-size: 14px;
  }
  code {
    display: block;
    color: ${props => props.color};
    margin: 0;
    padding: 0;
  }
  .header p {
    text-align: left;
    line-height: 30px;
  }
  .header img {
    width: 45px;
    margin-bottom: -5px;
  }
  .header h3 {
    background: #2d2d2d;
    font-family: monospace;
    padding: 5px;
    width: 200px;
    border-radius: 2px;
    color: ${props => props.color};
  }
  .body-row-quiz {
    background: #2d2d2d;
    font-family: monospace;
  }
  .body-row-quiz td {
    padding: 20px;
    border-radius: 2px;
  }
  .body-row-quiz p {
    color: #fff;
    line-height: 22px;
    font-size: 16px;
  }
  .body-row-quiz strong {
    color: ${props => props.color};
  }
  .footer p {
    font-size: 10px;
  }
  .grey-divider {
    height: 5px;
    background: rgba(220, 220, 220, 0.5);
    border-radius: 2px;
    margin: 20px 0;
  }
`;
