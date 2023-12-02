package com.codinglone.livepolls.service;

import com.codinglone.livepolls.entity.Questions;

import java.util.List;

public interface QuestionsService {
    void addQuestion(Questions question);
    Questions getQuestionById(Long id);

    List<Questions> getQuestions();
    // Add other methods as needed
}
