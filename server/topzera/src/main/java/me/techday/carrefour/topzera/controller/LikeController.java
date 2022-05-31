package me.techday.carrefour.topzera.controller;

import lombok.AllArgsConstructor;
import me.techday.carrefour.topzera.model.Like;
import me.techday.carrefour.topzera.model.form.LikeForm;
import me.techday.carrefour.topzera.service.LikeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/likes")
@AllArgsConstructor
public class LikeController {
    private final LikeService service;

    @GetMapping
    public ResponseEntity<List<Like>> getAllByUserEmail(@RequestParam String email) {
        List<Like> likes = service.findByUser(email);
        return ResponseEntity.ok(likes);
    }

    @PostMapping
    public ResponseEntity<?> createLikeToProduct(@RequestBody @Valid LikeForm form) {
        Like like = form.buildLike();
        service.createNewLikeEvent(like);

        return ResponseEntity.ok().build();
    }

}
