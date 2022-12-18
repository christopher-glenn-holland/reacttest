import React from "react";

export default function H1bar(props) {
  return (
    <div>
      <h1>{props.greeting}</h1>
      <h2>{props.another}</h2>
    </div>
  );
}
