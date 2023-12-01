package com.codinglone.livepolls.repository;

import com.codinglone.livepolls.entity.Polls;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PollsRepository extends JpaRepository<Polls, Integer> {
}
