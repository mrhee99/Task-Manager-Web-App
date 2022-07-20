package com.portfolio.task_manager.repository;
import com.portfolio.task_manager.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface User_repository extends JpaRepository<User, Long> {
}
