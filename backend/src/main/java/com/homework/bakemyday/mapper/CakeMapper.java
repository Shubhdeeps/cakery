package com.homework.bakemyday.mapper;

import com.homework.bakemyday.dto.CakePreviewDta;
import com.homework.bakemyday.model.Cake;
import java.util.List;

public class CakeMapper {

    public CakePreviewDta fromCakeToCakePreview(Cake cake){
        return new CakePreviewDta().setId(cake.getId())
                .setName(cake.getName())
                .setDescription(cake.getDescription())
                .setPrice(cake.getPrice())
                .setImageId(cake.getImageId());
    }

    public List<CakePreviewDta> fromCakeToCakePreview(List<Cake> cake){
        return cake.stream().map(this::fromCakeToCakePreview).toList();
    }
}
