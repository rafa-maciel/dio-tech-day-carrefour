package me.techday.carrefour.topzera.service.impl;

import lombok.AllArgsConstructor;
import me.techday.carrefour.topzera.model.Like;
import me.techday.carrefour.topzera.repository.LikeRepository;
import me.techday.carrefour.topzera.service.LikeService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class LikeServiceImpl implements LikeService {

    private final LikeRepository repository;

    @Override
    public List<Like> findByUser(String email) {
        return repository.findByUserEmail(email);
    }

    @Override
    public void createNewLikeEvent(Like like) {
        // TODO
    }
}
