"use client";
import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const Board = () => {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="board" type="column">
        {(provided: any) => <div>alll</div>}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
