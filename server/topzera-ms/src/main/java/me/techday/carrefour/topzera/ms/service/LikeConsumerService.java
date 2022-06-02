package me.techday.carrefour.topzera.ms.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.techday.carrefour.topzera.ms.model.Like;
import me.techday.carrefour.topzera.ms.repository.LikeRepository;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@AllArgsConstructor
public class LikeConsumerService {

    private final LikeRepository repository;

    @KafkaListener(topics = "LIKE_TOPIC", groupId = "MSTopzera")
    private void run(ConsumerRecord<String, String> register) {
        String likeStr = register.value();
        Like like = convertStrToLike(likeStr);
        log.info("Novo like registrado {}", like);

        if (like != null) repository.save(like);
    }

    private Like convertStrToLike(String likeStr) {
        Like like = null;
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());
        mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);

        try {
            return mapper.readValue(likeStr, Like.class);
        } catch (JsonProcessingException ex) {
            log.error("Falha ao converter like [{}]", likeStr, ex);
            return null;
        }
    }
}
