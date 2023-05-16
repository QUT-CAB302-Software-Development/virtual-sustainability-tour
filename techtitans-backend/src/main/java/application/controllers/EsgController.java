package application.controllers;
import application.Main;
import application.database.sustainability.CompanyData;
import application.database.sustainability.CompanyDatabase;
import application.database.UserDatabase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/esg")
public class EsgController {

    // @Autowired
    private CompanyDatabase companyDatabase;

    @GetMapping("/esg/data")
    public List<CompanyData> getEsgData() {
        return companyDatabase.getAllCompanies();
    }

    @GetMapping("/esg/score/{name}")
    public double getEsgScore(@PathVariable String name) {
        return companyDatabase.calculateESGScoreByName(name);
    }

    private UserDatabase userDatabase = Main.userDatabase;
}
//To access the ESG data in a JSON format by making an HTTP
// GET request to the endpoint URL defined in the @GetMapping annotation, e.g. http://localhost:8080/esg/data.
// The response will be a JSON object containing the ESG data for all companies in  CompanyDatabase.