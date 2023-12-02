package com.codinglone.livepolls.entity;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class Questions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String question;

    @Column(columnDefinition = "json", nullable = false)
    private String answers;

    @Column(columnDefinition = "json", nullable = false)
    private String userVotes;

    // Constructors, getters, and setters...
}
