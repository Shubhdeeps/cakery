package com.homework.bakemyday.web;

import com.homework.bakemyday.dto.CakePreviewDta;
import com.homework.bakemyday.model.Cake;
import com.homework.bakemyday.service.CakeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("cake")
public class CakeController {
    private CakeService cakeService;
    @GetMapping("all")
    public List<CakePreviewDta> allCakes(){
        return cakeService.findAll();
    }

    @GetMapping("{id}")
    public  Cake getSingleCake(@PathVariable Long id){
        return cakeService.findById(id);
    }

}
