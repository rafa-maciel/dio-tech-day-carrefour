package me.techday.carrefour.topzera.model.form;

import lombok.AllArgsConstructor;
import lombok.Getter;
import me.techday.carrefour.topzera.model.Like;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
public class LikeForm {
    @Email(message = "O Email informado não é um email valido")
    private String email;
    @NotBlank(message = "O ID do produto deve ser preenchido")
    private String productId;

    public Like buildLike() {
        return Like.builder()
                .date(LocalDateTime.now())
                .productId(productId)
                .userEmail(email.isBlank() ? "anonymous@topzera.com" : email)
                .build();
    }
}
