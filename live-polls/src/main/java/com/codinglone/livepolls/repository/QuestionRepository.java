package com.codinglone.livepolls.repository;

import com.codinglone.livepolls.entity.Questions;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Questions, Long> {
    // Add custom queries if needed
}
