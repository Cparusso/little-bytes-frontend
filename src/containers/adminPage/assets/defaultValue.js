export const defaultValue = num => {
  const question = i => `
  <p>Question ${i + 1}: Here is the first Question</p>
  <p><code>function shuffleArray() {</code></p>
  <p><code>hi</code></p>
  <code>}</code>
  <p>A =></p>
  <p>B =></p>
  <p>C =></p>
  <p>D =></p>
  <br>`;

  const answer = i =>
    `<p><strong>Answer ${i +
      1}:</strong> A — This is why this is the answer</p>`;

  let quiz = "";
  let answers = "";

  for (let i = 0; i < num; i++) {
    answers += answer(i);
    quiz += question(i);
  }

  return `
  ----Header----
  <h1>LittleBytes.js</h1>
  <h3>March 02, 2020</h3>
  <p><strong>Happy Monday Morning:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  ----Header----
  <br>
  ----Body----
  <h2><strong>Daily Quiz</strong></h2>
  ----Quiz----
 ${quiz}
  ----Quiz----
  <br>
  ----Links----
  <h2><strong>Morning Reads</strong></h2>
  <p><strong>📖 READ:</strong> Here is some text to add a link to. And here is anothere sentence about that link.</p>
  <p><strong>👀 WATCH:</strong> Here is some text to add a link to. And here is anothere sentence about that link.</p>
  <p><strong>🧠 LEARN:</strong> Here is some text to add a link to. And here is anothere sentence about that link.</p>
  <p><strong>🧠 LEARN:</strong> Here is some text to add a link to. And here is anothere sentence about that link.</p>
  <p><strong>🧠 LEARN:</strong> Here is some text to add a link to. And here is anothere sentence about that link.</p>
  <p><strong>🧠 LEARN:</strong> Here is some text to add a link to. And here is anothere sentence about that link.</p>
  ----Links----
  <h2><strong>Quiz Answers</strong></h2>
  ----Answers----
  ${answers}
  ----Answers----
  <br>
  ----Body----
  <br>
  ----Footer----
  <p>LittleBytes.js 3100 Clarendon Blvd, Suite 1300, Arlington VA 22201</p>
  <p>You received this email because you signed up for newsletters from LittleBytes.js</p>
  <p>change you preferences or unsubscribe here</p>
  ----Footer----
  `;
};
