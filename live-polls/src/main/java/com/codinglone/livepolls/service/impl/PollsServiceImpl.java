package com.codinglone.livepolls.service.impl;

import com.codinglone.livepolls.entity.Polls;
import com.codinglone.livepolls.repository.PollsRepository;
import com.codinglone.livepolls.service.PollsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class PollsServiceImpl implements PollsService {
    @Autowired
    private PollsRepository pollsRepository;

    @Override
    public void addPoll(Polls poll) {
        pollsRepository.save(poll);
    }
    @Override
    public void updatePoll(Integer id, Polls poll) {
        // Check if a user is in the database
        pollsRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid poll id " + id));
        poll.setId(Long.valueOf(id));
        pollsRepository.save(poll);
    }


    @Override
    public List<Polls> getPolls(){
        return pollsRepository.findAll();
    }

    @Override
    public Polls getPollById(Integer id) {
        Polls poll = pollsRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid poll id " + id));
        return poll;
    }

    @Override
    public void deletePoll(Integer id) {
        // Check user existence in the database or not
        Polls poll = pollsRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid poll id " + id));
        poll.setId(Long.valueOf(id));
        pollsRepository.delete(poll);
    }



}
