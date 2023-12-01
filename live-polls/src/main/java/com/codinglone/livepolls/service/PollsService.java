package com.codinglone.livepolls.service;

import com.codinglone.livepolls.entity.Polls;

import java.util.List;

public interface PollsService {
     List<Polls> getAllPolls();

    void addPoll(Polls poll);

    void updatePoll(Integer id, Polls poll);

    List<Polls> getPolls();

    Polls getPollById(Integer id);

}
