package me.techday.carrefour.topzera.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Item {

    @JsonProperty("itemId")
    private String id;
    private String name;
    private String nameComplete;
    private List<Image> images;
    private List<Seller> sellers;
}
