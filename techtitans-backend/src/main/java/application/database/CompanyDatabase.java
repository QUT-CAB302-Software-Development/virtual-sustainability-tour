package application.database;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;

@Component
public class CompanyDatabase {
    List<CompanyData> companyData = new ArrayList<>();

    public CompanyDatabase()
    {
        // load database from h2
    }

    public List<CompanyData> getAllCompanies() {
        return companyData;
    }
}
