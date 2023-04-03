package application;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {


    @GetMapping("/search")
    public String index() {
        // searches location given input string


        return "Nothing at the moment";
    }

}
