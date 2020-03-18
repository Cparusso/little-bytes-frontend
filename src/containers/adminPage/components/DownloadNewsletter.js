import React from "react";
import styled from "styled-components";
import { newsletters } from "../assets/newsletter";
const inlineCss = require("inline-css");

const DownloadNewsletter = ({ newsletter, setNewsletter, color }) => {
  const handleDownload = () => {
    const table = document.getElementById("newsletter").outerHTML;
    const options = { url: " " };
    var html = `<style>
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
                pre,
                strong {
                  margin: 10px 0;
                  padding: 0;
                }
                p {
                  margin-bottom: 10px;
                  line-height: 22px;
                  font-size: 14px;
                }
                h1 {
                  font-size: 26px;
                }
                code {
                  display: block;
                  color: ${color};
                  margin: 0;
                  padding: 0;
                }
                .body {
                  border-radius: 2px;
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
                  color: ${color};
                }
                .footer {
                  font-size: 10px;
                }
                .footer p {
                  margin: 10px 0;
                  font-size: 10px;
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
                  color: ${color};
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
      console.log(htmlFileText);
      const file = new File([htmlFileText], "newsletter.html", {
        type: "text/html"
      });
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
