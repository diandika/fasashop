import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";

const Todo = props => (
	<tr>
		<td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
		<td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
		<td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
		<td>
			<Link to={"/edit/"+props.todo._id}>Edit</Link>
		</td>
	</tr>
)

export default class TodosList extends Component{

	constructor(props){
		super(props);
		this.state = {todos: []};
	}

	componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

	todoList(){
		return this.state.todos.map(function(currentTodo, i){
			return <Todo todo={currentTodo} key={i} />;
		})
	}

	render(){
		return(
			<div>
				<div className="row">
					<div className="col-lg-3 col-md-4">
						<Sidebar/>
					</div>
					<div className="col-lg-9 col-md-8 col-sm-12">
						<ProductList />
					</div>
				</div>
			</div>
		);
	}
}