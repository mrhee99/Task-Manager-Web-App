package com.portfolio.task_manager.model;

//import java.time.Instant;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "task")
public class Task {

    @Id
    @GeneratedValue
    private Long id;

    private String items;
    private String deadline;
    private String team;
    private String status;


    public Task() {

    }

    public Task(String items, String deadline, String team, String status) {
        this.items = items;
        this.deadline = deadline;
        this.team = team;
        this.status = status;
    }

    public Task(Long id, String items, String deadline, String team, String status) {
        this.id = id;
        this.items = items;
        this.deadline = deadline;
        this.team = team;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId (Long id){
        this.id= id;
    }

    public String getItems() {
        return items;
    }

    public void setItems (String items) {
        this.items = items;
    }

    public String getDeadline() {
        return deadline;
    }

    public void setDeadline(String deadline) {
        this.deadline = deadline;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam (String team) {
        this.team = team;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus (String status) {
        this.status = status;
    }




}

    
