package com.codinglone.livepolls.service.impl;

import com.codinglone.livepolls.dto.AnswerDTO;
import com.codinglone.livepolls.entity.Questions;
import com.codinglone.livepolls.repository.QuestionRepository;
import com.codinglone.livepolls.service.QuestionsService;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

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

    @Override
    public List<Questions> getQuestions() {
        return questionRepository.findAll();
    }

    @Override
    public void updateQuestionsVote(Long id, AnswerDTO answerDTO){
        Questions question = questionRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid question id " + id));

        // Get the existing user votes as a list of AnswerDTO objects
        List<AnswerDTO> userVotesList = new Gson().fromJson(question.getUserVotes(), new TypeToken<List<AnswerDTO>>() {}.getType());

        // Check if the user has already answered the question
        Optional<AnswerDTO> existingVote = userVotesList.stream()
                .filter(vote -> vote.getUsername().equals(answerDTO.getUsername()))
                .findFirst();

        // If the user has already answered, update their choice
        // If not, add a new entry for the user's vote
        if (existingVote.isPresent()) {
            existingVote.get().setChoice(answerDTO.getChoice());
        } else {
            userVotesList.add(answerDTO);
        }

        // Update the userVotes field with the modified list
        question.setUserVotes(new Gson().toJson(userVotesList));

        // Save the updated question entity back to the repository
        questionRepository.save(question);
    }

    }

