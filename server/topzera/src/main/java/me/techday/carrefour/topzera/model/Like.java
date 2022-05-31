package me.techday.carrefour.topzera.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
@Document("likes")
public class Like {

    @Id
    private Long id;

    private LocalDateTime date;

    @Email
    private String userEmail;
    private String productId;
}
