import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";
import "./App.css";

export default function App() {
  const [name, setName] = useState("Steve");
  useEffect(() => {
    document.title = `Hey, ${name}!`;
  }, [name]);
  return (
    <section>
      <header>
        <h1>The Ultimate Greeting App</h1>
      </header>
      <Form name={name} setName={setName} />
      <hr />
      <Table name={name} />
    </section>
  );
}
