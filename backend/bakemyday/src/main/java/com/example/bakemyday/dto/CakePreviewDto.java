package com.example.bakemyday.dto;

import lombok.Data;
import lombok.experimental.Accessors;
import java.math.BigDecimal;


@Data
@Accessors(chain = true)
public class CakePreviewDto {
    private Long id;
    private String name;
    private String description;
    private BigDecimal price;
    private String image_url;
    private String category;
}
