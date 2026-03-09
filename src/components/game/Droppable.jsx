import { useDroppable } from "@dnd-kit/react";
import React from "react";

const Droppable = ({ id, children }) => {
  const { ref } = useDroppable({ id });

  return <div ref={ref}>{children}</div>;
};

export default Droppable;
