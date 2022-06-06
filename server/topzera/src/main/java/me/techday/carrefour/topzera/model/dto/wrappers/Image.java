package me.techday.carrefour.topzera.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Image {

    @JsonProperty("imageId")
    private String id;

    @JsonProperty("imageLabel")
    private String label;

    @JsonProperty("imageUrl")
    private String Url;

}
