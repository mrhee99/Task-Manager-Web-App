import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {tasks: []};
        this.remove = this.remove.bind(this);
    }
      // calling API to load the list of tasks
    componentDidMount() {
        fetch('/Tasks')
            .then(response => response.json())
            .then(data => this.setState({tasks:data}));
    }

    // calling DELETE call to API to remove tasks
    async remove(id) {
        await fetch(`/Tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedTasks = [...this.state.tasks].filter(i => i.id !== id);
            this.setState({tasks: updatedTasks});
        });
    }

    render() {
        const {tasks} = this.state;

        const taskList = tasks.map(task => {
            return <tr key={task.id}>
                <td style={{whiteSpace: 'nowrap'}}>{task.items}</td>
                <td>{task.deadline}</td>
                <td>{task.team}</td>
                <td>{task.status}</td>
               
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/Tasks/" + task.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(task.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        
                        <Button color="success" tag={Link} to="/Tasks/new">Add Item</Button>
                    </div>
                    <h3>Tasks</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Item</th>
                            <th width="30%">Deadline</th>
                            <th width="30%">Team</th>
                            <th width="40%">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {taskList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default TaskList;