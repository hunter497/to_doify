import React from 'react';
import ToDo from '../ToDo/index';

const ToDoList = props => {
  return (
    <div className="columns is-mobile is-multiline">
      {props.toDoList.map(function(toDo) {
        return (
          <ToDo
            key={toDo.id}
            item={toDo}
            delete={() => {
              props.delete(toDo.id);
            }}
            edit={() => {
              props.edit(toDo.id);
            }}
            complete={() => {
              props.complete(toDo.id);
            }}
          />
        );
      }, this)}
    </div>
  );
};

export default ToDoList;
