package com.codinglone.livepolls.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Polls {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String question;

    @Column(nullable = false)
    private String pollCode;

    @Column(nullable = false)
    private Integer totalVotes;

    @Column(columnDefinition = "json", nullable = false)
    private String options;

    @Column(nullable = false)
    private String createdBy;

}
