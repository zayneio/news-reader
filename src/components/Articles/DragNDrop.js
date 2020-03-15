import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Article from './Article/Article'

// Build the final data structure we need for DND.
// We can pass our entire Article object as the content for each item,
// And additionally we will set a somewhat arbitrary id for now.
const buildArticles = (articles) => {
  const result = articles.map( (article, index) => {
    return ({
      id: `article-${index}`,
      content: <Article key={index} article={article}/>
    })
  })
  
  return result
}

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the articles look a bit nicer
  userSelect: "none",
  padding: 0,
  margin: 0,

  // Note: you can switch the background color during stages of the dragging action
  // if you'd like. Ex: isDragging ? "rgba(0,0,0,0.1)" : "#fff"
  background: "#fff",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  // Note: you can switch the background color during stages of the dragging action
  // if you'd like. Ex: isDraggingOver ? "rgba(0,0,0,0.1)" : "#fff"
  background: "#fff",
  padding: 8,
  width: '100%'
});

const DragNDrop = (props) => {
  const [articles, setArticles] = useState(buildArticles(props.articles))

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const orderedArticles = reorder(
      articles,
      result.source.index,
      result.destination.index
    );

    setArticles(orderedArticles);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {articles.map((article, index) => (
              <Draggable key={article.id} draggableId={article.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    {article.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DragNDrop