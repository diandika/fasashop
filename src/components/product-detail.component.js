import React, {Component} from "react";
import axios from 'axios';
import rose from "./img/rose.svg";
import "./product-detail.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Helmet} from "react-helmet";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default class EditTodo extends Component{
	constructor(props) {
		super(props);

		this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
		this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
		this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
		this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			todo_description: '',
			todo_responsible: '',
			todo_priority: '',
			todo_completed: false
		}
	}

	componentDidMount() {
		axios.get('http://localhost:4000/todos/' + this.props.match.params.id)
			.then(response => {
				this.setState({
					todo_description: response.data.todo_description,
					todo_responsible: response.data.todo_responsible,
					todo_priority: response.data.todo_priority,
					todo_completed: response.data.todo_completed
				})
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	onChangeTodoDescription(e){
		this.setState({
			todo_description: e.target.value
		});
	}

	onChangeTodoResponsible(e){
		this.setState({
			todo_responsible: e.target.value
		});
	}

	onChangeTodoPriority(e){
		this.setState({
			todo_priority: e.target.value
		});
	}

	onChangeTodoCompleted(e){
		this.setState({
			todo_completed: e.target.value
		});
	}

	onSubmit(e){
		e.preventDefault();
		const obj = {
			todo_description: this.state.todo_description,
			todo_responsible: this.state.todo_responsible,
			todo_priority: this.state.todo_priority,
			todo_completed: this.state.todo_completed
		};
		console.log(obj);
		axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, obj)
			.then(res => console.log(res.data));

		this.props.history.push('/');
	}

	render() {
		return(
			<div className="container detail-container">
				<Helmet>
					<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
				</Helmet>
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12">
						<div className="image image-detail">
							<img className="product-img" src={rose} alt="rose" />
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12">
						<div className="product-description">
							<div className="name-detail">
								<span className="name-title">Roselia</span>
							</div>
							<hr/>
							<div className="price-detail">
								<span className="price">Rp 120.000</span>
							</div>
							<div className="button-container">
								<div className="shopee-button-container">
									<a href="https://shopee.co.id" target="_blank">
										<span className="shopee-button"><FontAwesomeIcon icon={faShoppingCart}/> Belanja di Shopee</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}