package com.homework.bakemyday.service;
import com.homework.bakemyday.dto.CakePreviewDta;
import com.homework.bakemyday.mapper.CakeMapper;
import com.homework.bakemyday.repository.CakeRepository;

import com.homework.bakemyday.model.Cake;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CakeService {
    private final CakeRepository cakeRepository;
    private final CakeMapper cakeMapper;

    public List<CakePreviewDta> findAll(){
        return cakeMapper.fromCakeToCakePreview(cakeRepository.findAll());
    }
    public Cake findById(Long id){
        return cakeRepository.getById(id);
    }
}
