package com.example.bakemyday.service;

import com.example.bakemyday.dto.CakePreviewDto;
import com.example.bakemyday.mapper.CakeMapper;
import com.example.bakemyday.repository.CakeRepository;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CakeService {
    private final CakeRepository cakeRepository;
    private final CakeMapper cakeMapper;

    public List<CakePreviewDto> findAll(){
        return cakeMapper.fromCakeToCakePreview(cakeRepository.findAll());
    }

    public List<CakePreviewDto> findAllCategory(String category){
        return cakeMapper.fromCakeToCategoryCakePreview(cakeRepository.findAll(), category);
    }

    public CakePreviewDto findById(Long id){
        return cakeMapper.fromCakeToCakePreview(cakeRepository.getReferenceById(id));
    }
}
