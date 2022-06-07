package me.techday.carrefour.topzera.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import me.techday.carrefour.topzera.model.dto.wrappers.Image;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ImageDTO {
    private String url;
    private String label;

    public static ImageDTO convertFrom(Image image) {
        return ImageDTO.builder()
                .url(image.getUrl())
                .label(image.getLabel())
                .build();
    }
}
