import React, { Component } from "react";
import Hero from "../Components/Hero/ToDoHero/index";
import ToDoList from "../Components/List/index";

class ToDoApp extends Component {
  state = {
    toDoList: [
      {
        id: 1,
        title: "Add inspirational quotes",
        topic: "Website",
        category: "Urgent",
        desc: "Add an inspirational quote generator for the to do list page",
        dateCreated: "1/5/2018",
        completed: true,
        dateFinished: "2/11/2018"
      },
      {
        id: 2,
        title: "Move completed items to a separate section",
        topic: "Website",
        category: "Urgent",
        desc:
          "Add a section under the to do items to list out the completed items",
        dateCreated: "1/7/2018",
        completed: true,
        dateFinished: "1/15/2018"
      },
      {
        id: 3,
        title: "Handle item sorting",
        topic: "Website",
        category: "Urgent",
        desc:
          "Sort completed list by date completed, sort to do list by date added",
        dateCreated: "1/5/2018",
        completed: false,
        dateFinished: "1/20/2018"
      },
      {
        id: 4,
        title: "ID Generation",
        topic: "Website",
        category: "Urgent",
        desc: "Add in ID generation for new elements to manage duplication",
        dateCreated: "1/5/2018",
        completed: true,
        dateFinished: "1/20/2018"
      },
      {
        id: 5,
        title: "Edit functionality",
        topic: "Website",
        category: "Urgent",
        desc: "Add in edit funcitonality to the to do items",
        dateCreated: "1/5/2018",
        completed: false,
        dateFinished: null
      },
      {
        id: 6,
        title: "AWS Connection",
        topic: "Website",
        category: "Urgent",
        desc: "Add in a backend using serverless tech through AWS",
        dateCreated: "1/5/2018",
        completed: false,
        dateFinished: "2/2/2018"
      },
      {
        id: 7,
        title: "Completion Date",
        topic: "Website",
        category: "Urgent",
        desc:
          "Handle updating the item with the completion date when the complete action is taken",
        dateCreated: "2/11/2018",
        completed: true,
        dateFinished: "2/12/2018"
      }
    ]
  };

  getIndex = (id, array, prop) => {
    for (var i = 0; i < array.length; i++) {
      if (array[i][prop] === id) {
        return i;
      }
    }
    return -1;
  };

  addNewItem = item => {
    var items = this.state.toDoList;
    items.push(item);
    this.setState({ toDoList: items });
  };

  delete = id => {
    var items = this.state.toDoList.slice();
    var index = this.getIndex(id, this.state.toDoList, "id");
    items.splice(index, 1);
    this.setState({ toDoList: items });
  };

  editItem = id => {
    var items = this.state.toDoList.slice();
    var index = this.getIndex(id, this.state.toDoList, "id");
    items[index].title = "Edited Item";
    this.setState({ toDoList: items });
  };

  completeItem = id => {
    var items = this.state.toDoList.slice();
    var index = this.getIndex(id, this.state.toDoList, "id");
    items[index].completed = true;
    items[index].dateFinished = this.getCurrentDate();
    this.setState({ toDoList: items });
  };

  getIncompleteItems = () => {
    var incompleteItems = this.state.toDoList.filter(
      item => item.completed === false
    );
    return incompleteItems;
  };

  getCategorizedItems = category => {
    var incompleteItems = this.getIncompleteItems();
    var uncategorizedItems = incompleteItems.filter(
      item => item.category === category
    );
    return uncategorizedItems;
  };

  getCompletedItems = () => {
    var completeItems = this.state.toDoList.filter(
      item => item.completed === true
    );
    return completeItems;
  };

  render() {
    return (
      <React.Fragment>
        <Hero addNewItem={this.addNewItem} />
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-two-thirds is-left">
                  <p className="title">Urgent!</p>
                  <p className="subtitle">Do these IMMEDIATELY!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section">
          <div className="container">
            <ToDoList
              toDoList={this.getCategorizedItems("Urgent")}
              delete={this.delete}
              edit={this.editItem}
              complete={this.completeItem}
            />
          </div>
        </div>
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-two-thirds is-left">
                  <p className="title">Uncategorized Items</p>
                  <p className="subtitle">Categorize your items today!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section">
          <div className="container">
            <ToDoList
              toDoList={this.getCategorizedItems("Uncategorized")}
              delete={this.delete}
              edit={this.editItem}
              complete={this.completeItem}
            />
          </div>
        </div>
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-two-thirds is-left">
                  <p className="title">Actionable</p>
                  <p className="subtitle">
                    Create action items from these immediately!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section">
          <div className="container">
            <ToDoList
              toDoList={this.getCategorizedItems("Actionable")}
              delete={this.delete}
              edit={this.editItem}
              complete={this.completeItem}
            />
          </div>
        </div>
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-two-thirds is-left">
                  <p className="title">Actions</p>
                  <p className="subtitle">
                    Good luck completing your actions today!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section">
          <div className="container">
            <ToDoList
              toDoList={this.getCategorizedItems("Actions")}
              delete={this.delete}
              edit={this.editItem}
              complete={this.completeItem}
            />
          </div>
        </div>
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-two-thirds is-left">
                  <p className="title">Big Picture</p>
                  <p className="subtitle">
                    Future goals for yourself are just as important to track!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section">
          <div className="container">
            <ToDoList
              toDoList={this.getCategorizedItems("Big Picture")}
              delete={this.delete}
              edit={this.editItem}
              complete={this.completeItem}
            />
          </div>
        </div>
        <section className="hero is-info">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-two-thirds is-left">
                  <p className="title">Completed Items</p>
                  <p className="subtitle">You did it!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section">
          <div className="container">
            <ToDoList
              toDoList={this.getCompletedItems()}
              delete={this.delete}
              edit={this.editItem}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ToDoApp;
