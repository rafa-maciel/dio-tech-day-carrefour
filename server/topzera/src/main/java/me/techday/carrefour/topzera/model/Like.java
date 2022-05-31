package me.techday.carrefour.topzera.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.time.LocalDateTime;

@Entity
@Table(name = "product_likes")
@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime date;

    @Email
    private String userEmail;
    private String productId;
}
