package application.controllers;
import application.model.CompanyData;
import application.database.CompanyDatabase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/esg")
public class EsgController {

    @Autowired
    private CompanyDatabase companyDatabase;

    @GetMapping("/data")
    public List<CompanyData> getEsgData() {
        return companyDatabase.getAllCompanies();
    }
}
//To access the ESG data in a JSON format by making an HTTP
// GET request to the endpoint URL defined in the @GetMapping annotation, e.g. http://localhost:8080/esg/data.
// The response will be a JSON object containing the ESG data for all companies in  CompanyDatabase.