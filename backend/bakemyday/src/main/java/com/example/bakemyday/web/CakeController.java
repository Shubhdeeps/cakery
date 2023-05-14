package com.example.bakemyday.web;

import com.example.bakemyday.dto.CakePreviewDto;
import com.example.bakemyday.service.CakeService;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("cake")
public class CakeController {
    private final CakeService cakeService;
    @CrossOrigin
    @GetMapping("all")
    public List<CakePreviewDto> findAll(){
        return cakeService.findAll();
    }

    @CrossOrigin
    @GetMapping("category/special")
    public List<CakePreviewDto> findAllSpecial(){
        return cakeService.findAllCategory("Special Cakes");
    }

    @CrossOrigin
    @GetMapping("{id}")
    public CakePreviewDto getSingleCake(@PathVariable Long id){
        return cakeService.findById(id);
    }
}
