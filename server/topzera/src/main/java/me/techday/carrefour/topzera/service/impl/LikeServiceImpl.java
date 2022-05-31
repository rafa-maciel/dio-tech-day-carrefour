package me.techday.carrefour.topzera.service.impl;

import lombok.AllArgsConstructor;
import me.techday.carrefour.topzera.model.Like;
import me.techday.carrefour.topzera.repository.LikeRepository;
import me.techday.carrefour.topzera.service.LikeService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class LikeServiceImpl implements LikeService {

    private final LikeRepository repository;
    private final KafkaTemplate<Object, Object> template;
    private static String TOPIC = "LIKE_TOPIC";

    @Override
    public List<Like> findByUser(String email) {
        return repository.findByUserEmail(email);
    }

    @Override
    public void createNewLikeEvent(Like like) {
        template.send(TOPIC, like);
    }
}
