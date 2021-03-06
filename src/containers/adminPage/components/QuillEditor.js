import React, { useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import NewsletterPreview from "./NewsletterPreview";
import CustomizeNewsletter from "./CustomizeNewsletter";
import DownloadNewsletter from "./DownloadNewsletter";
import ColorPicker from "./ColorPicker";
import { defaultValue } from "../assets/defaultValue";

const QuillEditor = () => {
  const [text, setText] = useState("");
  const [numOfQuestions, setNumOfQuestions] = useState(false);
  const [color, setColor] = useState("#ffe644");

  const handleChange = (content, delta, source, editor) => {
    setText(content);
  };

  return (
    <>
      <QuillEditorWrapper>
        <Selectors>
          {!numOfQuestions && (
            <CustomizeNewsletter
              numOfQuestions={numOfQuestions}
              setNumOfQuestions={setNumOfQuestions}
            />
          )}
        </Selectors>
        <ColorPicker color={color} setColor={setColor} />
        {numOfQuestions && <DownloadNewsletter color={color} />}
      </QuillEditorWrapper>
      <Wrapper>
        {numOfQuestions && (
          <Container>
            <ReactQuill
              className="quill-editor"
              onChange={handleChange}
              defaultValue={defaultValue(numOfQuestions)}
              placeholder={"hi there"}
            />
            {text !== "" && (
              <NewsletterPreview previewHtml={text} color={color} />
            )}
          </Container>
        )}
      </Wrapper>
    </>
  );
};

export default QuillEditor;

// Component Specific Styled Components

const Container = styled.div`
  display: flex;
  padding: 20px;
  .quill-editor {
    width: 100%;
  }
`;

const QuillEditorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Selectors = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Wrapper = styled.div`
  select {
    width: 200px;
  }
  #color-1 {
    color: #f2777a;
  }
  #color-2 {
    color: #6699cc;
  }
`;
