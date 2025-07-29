import React from "react";
import { useParams } from "react-router-dom";

function Chat() {
  const { id } = useParams();

  return (
    <div className="flex-1 p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Chat ID: {id}</h2>
      <p>This is where messages would appear for chat #{id}.</p>
    </div>
  );
}

export default Chat;
