package me.techday.carrefour.topzera.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.techday.carrefour.topzera.model.dto.wrappers.Product;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Slf4j
public class ProductDTO {
    private String id;
    private Long totalLikes;
    private String title;
    private String name;
    private String description;
    private BigDecimal price;
    private BigDecimal lastPrice;
    private Integer avaiableQuantity;
    private String linkUrl;
    private String addCartLink;
    private Boolean isAvailable;
    private List<ImageDTO> images;

    /**
     *
     * Get all need attributes from Product
     * and convert them on ProductDTO
     *
     * @param Product
     * @return ProductDTO
     */
    public static ProductDTO convertFrom(Product product) {
        return ProductDTO.builder()
                .id(product.getId())
                .title(product.getTitle())
                .name(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .lastPrice(product.getLastPrice())
                .avaiableQuantity(product.getAvailableQuantity())
                .linkUrl(product.getLink())
                .addCartLink(product.getAddCartUrl())
                .isAvailable(product.isAvailable())
                .images(
                        product
                                .getImages().stream()
                                .map(ImageDTO::convertFrom)
                                .collect(Collectors.toList()))
                .build();
    }

}
