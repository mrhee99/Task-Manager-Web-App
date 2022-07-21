/** this file is responsible for saving and editing users */

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class TaskEdit extends Component {

    emptyItem = {
        items: '',
        deadline: '',
        team: '',
        status: ''

       
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // if the user already exists and wants to edit, API call to fetch the user info
    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const task = await (await fetch(`/Tasks/${this.props.match.params.id}`)).json();
            this.setState({item: task});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/Tasks' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/Tasks');
}

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Task' : 'Add Task'}</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="items">Item</Label>
                        <Input type="text" name="items" id="items" value={item.items || ''}
                               onChange={this.handleChange} autoComplete="items"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="deadline">Deadline</Label>
                        <Input type="text" name="deadline" id="deadline" value={item.deadline || ''}
                               onChange={this.handleChange} autoComplete="deadline"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="team">Team</Label>
                        <Input type="text" name="team" id="team" value={item.team || ''}
                               onChange={this.handleChange} autoComplete="team"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="status">Status</Label>
                        <Input type="text" name="status" id="status" value={item.status || ''}
                               onChange={this.handleChange} autoComplete="status"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/Tasks">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(TaskEdit);