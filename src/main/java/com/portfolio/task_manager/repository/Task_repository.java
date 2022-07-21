package com.portfolio.task_manager.repository;
import com.portfolio.task_manager.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Task_repository extends JpaRepository<Task, Long> {
}
