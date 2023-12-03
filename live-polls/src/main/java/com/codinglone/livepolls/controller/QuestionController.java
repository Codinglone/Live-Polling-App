package com.codinglone.livepolls.controller;

import com.codinglone.livepolls.dto.AnswerDTO;
import com.codinglone.livepolls.entity.Questions;
import com.codinglone.livepolls.service.QuestionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/questions")
public class QuestionController {

    @Autowired
    private QuestionsService questionService;
    @PostMapping("/answer/{id}")
    public ResponseEntity<Void> updateQuestionsVote(@PathVariable Long id, @RequestBody AnswerDTO answerDTO){
        questionService.updateQuestionsVote(id, answerDTO);
        return ResponseEntity.noContent().build();
    }
    @GetMapping
    public List<Questions> getQuestions() {
        return questionService.getQuestions();
    }
    @PostMapping("/add")
    public ResponseEntity<String> addQuestion(@RequestBody Questions question) {
        questionService.addQuestion(question);
        return ResponseEntity.ok("Question added successfully");
    }

    @GetMapping("/{id}")
    public ResponseEntity<Questions> getQuestion(@PathVariable Long id) {
        Questions question = questionService.getQuestionById(id);
        return ResponseEntity.ok(question);
    }



    // Add other endpoints as needed
}
