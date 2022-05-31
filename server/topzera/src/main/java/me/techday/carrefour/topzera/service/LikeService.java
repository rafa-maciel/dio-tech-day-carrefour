package me.techday.carrefour.topzera.service;

import me.techday.carrefour.topzera.model.Like;

import java.util.List;

public interface LikeService {
    List<Like> findByUser(String email);
    void createNewLikeEvent(Like like);
}
