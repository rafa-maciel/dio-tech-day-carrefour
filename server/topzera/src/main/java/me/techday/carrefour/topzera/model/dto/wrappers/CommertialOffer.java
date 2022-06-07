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
public class CommertialOffer {
    @JsonProperty("Price")
    private BigDecimal price;

    @JsonProperty("ListPrice")
    private BigDecimal listPrice;

    @JsonProperty("IsAvailable")
    private Boolean isAvailable;

    @JsonProperty("AvailableQuantity")
    private Integer availableQuantity;
}
