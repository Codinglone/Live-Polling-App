package com.codinglone.livepolls.service;

import com.codinglone.livepolls.dto.AnswerDTO;
import com.codinglone.livepolls.entity.Questions;

import java.util.List;

public interface QuestionsService {
    void addQuestion(Questions question);
    Questions getQuestionById(Long id);

    List<Questions> getQuestions();


    void updateQuestionsVote(Long id, AnswerDTO answerDTO);
    // Add other methods as needed
}
