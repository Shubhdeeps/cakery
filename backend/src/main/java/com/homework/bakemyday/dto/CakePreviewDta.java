package com.homework.bakemyday.dto;
import lombok.Data;
import lombok.experimental.Accessors;
import java.math.BigDecimal;


@Data
@Accessors(chain = true)
public class CakePreviewDta {
    private Long id;
    private String name;
    private String description;
    private BigDecimal price;
    private Long imageId;
}
