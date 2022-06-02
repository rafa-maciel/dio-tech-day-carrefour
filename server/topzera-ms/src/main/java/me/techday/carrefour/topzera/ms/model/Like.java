package me.techday.carrefour.topzera.ms.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
@Document("likes")
public class Like {

    @Id
    private String id;

    private LocalDateTime date;
    private String userEmail;
    private String productId;
}
