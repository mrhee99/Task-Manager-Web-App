import React, { Component } from 'react';
import './App.css';
import { Button,  Container } from 'reactstrap';
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div class="jumbotron">
                
                <Container fluid>
                <h1 class = "pos_center">Welcome to Management System!</h1>
                <h4 class="pos_center"> Manage your employees and action items in all-in-one platform!</h4>
                    <div className="d-flex justify-content-center">
                        <Button size="lg" color="primary" tag={Link} to={"/Users"}>Users</Button>
                        <Button size="lg" color="warning" tag={Link} to={"/Tasks"}>Tasks</Button>
                    </div>
               
                    
                </Container>
            </div>
        );
    }
}

export default Home

