import './TaskList.css';
import React from 'react';
import Task from './Task.js';
import NewTask from './NewTask.js';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let todos = [];
        for (let todo of this.props.todos) {
            todos.push(<Task todo={todo} key={todo.id} token={this.props.token} delete={this.props.delete}/>)
        }

        return (
            <div className="task_list">
                <div className="task_list_header">My tasks</div>
                <div className="task_list_tile">
                    <NewTask addTodo={this.props.addTodo} loggedIn={this.props.loggedIn}/>
                    {todos}
                </div>
            </div>
        )
    }
}

export default TaskList;