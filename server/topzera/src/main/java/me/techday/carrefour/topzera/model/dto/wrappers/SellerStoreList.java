package me.techday.carrefour.topzera.model.dto.wrappers;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import me.techday.carrefour.topzera.model.dto.SellerStore;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class SellerStoreList {
    private String id;
    private List<SellerStore> sellers;
}
