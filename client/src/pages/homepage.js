import React, { Component } from "react";
import './Homepage.css'
class MainPage extends Component {

	constructor(props) {
		super(props);
		this.state = ({
			title: "HOME PAGE",
			datalist: [],
			_id: '',
			name: '',
			lastname: '',
			address: '',
			resp: '',
			update: false,
			clickedItem: Object
		});
		this.onEditClick = this.onEditClick.bind(this);
		this.update = this.updateData.bind(this);
		this.onListClick = this.onListClick.bind(this);
	}
	namehandler = (event) => {
		this.setState({
			name: event.target.value,
		});
	}
	lastnamehandler = (event) => {
		this.setState({
			lastname: event.target.value,
		});
	}
	addressHandler = (event) => {
		this.setState({
			address: event.target.value
		})
	}
	onEditClick = (values) => {
		console.log(values)
		this.setState({
			_id: values._id,
			name: values.name,
			lastname: values.lastname,
			address: values.address,
			update: true,
			clickedItem: values
		})
	}

	onListClick(data) {
		console.log(data._id);
		fetch("http://localhost:9000/delete",
			{
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ "item": data })
			}
		)
			.then(res => res.text())
			.then(data => {
				this.fetchData();
			})
			.catch((error) => console.log("on delete:" + error))
	}

	fetchData(context) {
		fetch("http://localhost:9000/getAPI")
			.then(res => res.json())
			.then(data => {
				// this.setState( (oldstate => ({
				// datalist :[...oldstate.datalist , data]
				// })));
				console.log(data);
				this.setState({
					datalist: data
				})
			}).catch((error) => console.log(error))
	}
	updateData = () => {
			let clickedItem = {
			_id: this.state._id,
			name: this.state.name,
			lastname : this.state.lastname,
			address: this.state.address,
			test: "test"

		};
		console.log("update data "+JSON.stringify(clickedItem));
		fetch("http://localhost:9000/update",
			{
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ "item": clickedItem })
			}
		)
			.then(res => res.text())
			.then(data => {
				this.setState({ 
					resp: data ,
					name: "",
					lastname :"",
					address: "",
					_id: "",
					clickedItem : {},
					update :false
				})
				this.fetchData();
			})
			.catch((error) => console.log("on delete:" + error))
	}

	sendData(context) {
		var usersarray = [];
		if(!context.state.name){
			context.setState({
				resp: "enter name"
			})
			return;
		}
		const namearray = context.state.name.split(",");
		const lastnamesarray = context.state.lastname.split(",");
		const addressarray = context.state.address.split(",");
		for(let index = 0; index < namearray.length; index++) {
				usersarray.push({
				name: namearray[index],
				lastname: lastnamesarray[index],
				address: addressarray[index]
			});
		}
		console.log("users:" + JSON.stringify(usersarray))
		
		fetch("http://localhost:9000/getAPI", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body:
				JSON.stringify({"items": usersarray}
					// {
					// 	name: context.state.name,
					// 	lastname: context.state.lastname,
					// 	address: context.state.address
					// }
				)
		})
			.then(res => res.text())
			.then(
				data => {
					console.log(data)
					context.setState({ resp: data })
				}
			)
			.catch((error) => console.log(error))

	}

	render() {
		return (
			<div style={{ padding: "10px" }}>
				<h1> Well Come to {this.state.title}</h1>
				<p>
					<button onClick={() => this.fetchData(this)}>GET Data</button>

				</p>
				<ul>
					<NumberList dataItems={this.state.datalist}
						handleItemClick={this.onListClick}
						handleEditClick={this.onEditClick}
					/>
				</ul>

				<p>Names
					<input
						style={{ padding: "5px", marginLeft: "40px" }}
						type="text"
						value={this.state.name}
						width="100%"
						name="username"
						onChange={this.namehandler} />

				</p>
				<p>
					LastNames
					<input
						style={{ padding: "5px", marginLeft: "10px" , width:"50%" }}
						type="text"
						width="100%"
						value={this.state.lastname}
						name="username"
						onChange={this.lastnamehandler} />

				</p>
				<p  >
					Adresses
                <input
						style={{ padding: "5px", marginLeft: "25px", width:"50%" }}
						type="text"
						width="100%"
						name="username"
						value={this.state.address}
						onChange={this.addressHandler}
					/>

				</p>
				<p>
					{
						(this.state.update)?
							<button onClick={() => this.updateData(this)}>
							Update Data</button>
							:
							<button onClick={() => this.sendData(this)}>
							SEND Data All
							</button>
					}
					<label style={{ paddingLeft: "10px" }}>{this.state.resp} </label>
				</p>
			</div>
		)
	}
}
function NumberList(props) {
	const dataList = props.dataItems;
	const listItems = dataList.map((item) =>
		<li
			id={item._id}
		>
			<p>
				Name:{item.name} {item.lastname}
				{
					item.address &&
					<label>, {item.address}</label>
				}
				<button onClick={() => props.handleItemClick(item)}>Delete</button>
				<button onClick={() => props.handleEditClick(item)}>Edit</button>
			</p>
		</li>
	);
	return (
		<ul>{listItems}</ul>
	);
}
export default MainPage;