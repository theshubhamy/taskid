"use client";
import React, { useEffect } from "react";
import { useBoardStore } from "@/store/BoardStore";

// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const Board = () => {
  const getBoard = useBoardStore((state) => state.getBoard);
  useEffect(() => {
    getBoard();
    return () => {};
  }, []);

  return (
    <div>hello Board</div>
    // <DragDropContext onDragEnd={() => {}}>
    //   <Droppable droppableId="board" type="column">
    //     {(provided: any) => <div>Trello dnd</div>}
    //   </Droppable>
    // </DragDropContext>
  );
};

export default Board;
