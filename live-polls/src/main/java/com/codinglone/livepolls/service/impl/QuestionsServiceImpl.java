package com.codinglone.livepolls.service.impl;

import com.codinglone.livepolls.entity.Questions;
import com.codinglone.livepolls.repository.QuestionRepository;
import com.codinglone.livepolls.service.QuestionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionsServiceImpl implements QuestionsService {

    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public void addQuestion(Questions question) {
        questionRepository.save(question);
    }


    @Override
    public Questions getQuestionById(Long id) {
        return questionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Question not found with id: " + id));
    }

    // Add other methods as needed
}
