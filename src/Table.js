import React from "react";
import "./Table.css";

const greetings = {
  Chinese: "你好，@。",
  "Chinese informal": "嗨，@！",
  Spanish: "Hola, @.",
  English: "Hello, @.",
  "English informal": "Hey, @!",
  Hindi: "नमस्ते, @।",
  "Hindi informal": "अरे, @!",
  Portuguese: "Olá, @.",
  "Portuguese informal": "Ei, @!",
  Russian: "Привет, @.",
  Japanese: "こんにちは、 @。",
  "Japanese informal": "ねえ、@！",
  Korean: "안녕, @.",
  French: "Bonjour, @.",
  "French informal": "Salut, @!",
  German: "Hallo, @."
};

export default ({ name }) => (
  <table>
    <thead>
      <tr>
        <th>Language</th>
        <th>Greeting</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(greetings).map(([lang, greeting]) => (
        <tr key={lang}>
          <td>{lang}</td>
          <td>{greeting.replace("@", name)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
