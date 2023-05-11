package application.database;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CompanyDatabase {
    List<CompanyData> companyData = new ArrayList<>();
    private DbConnection dbConnection;

    public CompanyDatabase() {

    }

    public void addCompanyData(CompanyData data) {
        companyData.add(data);
    }

    public CompanyData getCompanyDataByName(String name) {
        for (CompanyData data : companyData) {
            if (data.getCompanyName().equals(name)) {
                return data;
            }
        }
        return null; // return null if company not found
    }

    public List<CompanyData> getAllCompanies() {
        return companyData;
    }
}
