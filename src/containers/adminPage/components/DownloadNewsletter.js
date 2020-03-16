import React, { useState } from "react";
import styled from "styled-components";
import path from "path";
import { newsletters } from "../assets/newsletter";
const inlineCss = require("inline-css");

const DownloadNewsletter = ({ newsletter, setNewsletter, color }) => {
  const [htmlContent, setHtmlContent] = useState("");
  const handleDownload = () => {
    const table = document.getElementById("newsletter").outerHTML;
    const options = { url: " " };
    var html = `<style>
                table {
                  font-family: monospace;
                  padding: 20px 0
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
                  color: ${color};
                }
                h2 {
                  margin: 0;
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
                strong {
                  color: ${color};
                }
                .footer {
                  font-size: 10px;
                }
                .footer p {
                  margin: 10px 0;
                  font-size: 12px;
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
                </style><body>${table}</body>`;

    inlineCss(html, options).then(function(html) {
      const htmlFileText = newsletters(html);
      const blob = new Blob([htmlFileText], {
        name: "newsletter",
        type: "text/html"
      });
      const file = new File([htmlFileText], "newsletter.html", {
        type: "text/html"
      });
      console.log(file);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      const url = window.URL.createObjectURL(file);
      a.href = url;
      a.download = "newsletter.html";
      a.click();
      window.URL.revokeObjectURL(url);
    });
  };

  return (
    <Button background={color} onClick={handleDownload}>
      Download
    </Button>
  );
};

export default DownloadNewsletter;

const Button = styled.button`
  padding: 15px 20px;
  border-radius: 2px;
  background: ${props => props.background};
  border: 1px solid ${props => props.background};
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  font-weight: 900;
  letter-spacing: 2px;
  margin: 20px;
  cursor: pointer;
`;
