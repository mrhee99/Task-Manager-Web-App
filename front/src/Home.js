import React, { Component } from 'react';
import './App.css';
import { Button, ButtonGroup, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div class="jumbotron">
                <Container fluid>
                <h1>Welcome to Management System!</h1>
                <p>Manage your employees and action items based on various parameters.</p>
                    <ButtonGroup>
                        <Button size="lg" color="primary" tag={Link} to={"/Users"}>Users</Button>
                        <Button size="lg" color="warning" tag={Link} to={"/Tasks"}>Tasks</Button>
            
                    </ButtonGroup>
                    
                </Container>
            </div>
        );
    }
}

export default Home

