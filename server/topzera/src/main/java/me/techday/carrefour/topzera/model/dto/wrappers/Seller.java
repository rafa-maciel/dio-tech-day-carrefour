package me.techday.carrefour.topzera.model.dto.wrappers;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.math.BigDecimal;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
@ToString
public class Seller {
    @JsonProperty("sellerId")
    private String id;

    @JsonProperty("sellerName")
    private String name;

    private String addToCartLink;
    private Boolean sellerDefault;
    private CommertialOffer commertialOffer;


}
