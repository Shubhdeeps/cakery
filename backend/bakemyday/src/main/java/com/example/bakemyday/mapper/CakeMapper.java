package com.example.bakemyday.mapper;

import com.example.bakemyday.dto.CakePreviewDto;
import com.example.bakemyday.model.Cake;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class CakeMapper {

    public CakePreviewDto fromCakeToCakePreview(Cake cake){
        return new CakePreviewDto().setId(cake.getId())
                .setName(cake.getName())
                .setDescription(cake.getDescription())
                .setPrice(cake.getPrice())
                .setImage_url(cake.getImage_url())
                .setCategory(cake.getCategory());
    }

    public List<CakePreviewDto> fromCakeToCakePreview(List<Cake> cake){
        return cake.stream().map(this::fromCakeToCakePreview).toList();
    }

    public List<CakePreviewDto> fromCakeToCategoryCakePreview(List<Cake> cake, String category){
        return cake.stream().filter(value -> value.getCategory().equals(category)).map(this::fromCakeToCakePreview).toList();
    } 
}
