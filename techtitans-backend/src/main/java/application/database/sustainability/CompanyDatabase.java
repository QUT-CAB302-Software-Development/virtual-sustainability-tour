package application.database.sustainability;
import application.database.DbConnection;

import java.util.ArrayList;
import java.util.List;

// @Component
public class CompanyDatabase {
    List<CompanyData> companyDataList = new ArrayList<>();
    private DbConnection dbConnection;


    public CompanyDatabase(DbConnection dbConnection) {
        this.dbConnection = dbConnection;
    }

    public double calculateESGScoreByName(String name) {

        CompanyData companyData = getCompanyDataByName(name);



        // Calculate the ESG score somehow

//        return SustainabilityAlgo.calculateESG(
//            companyData.getGHGTotal(),
//            companyData.getSales(),
//            companyData.getOperatingIncome(),
//            companyData.getWaterWithdrawn(),
//            companyData.getWaterDischarge(),
//            companyData.getSOx(),
//            companyData.getNOx(),
//            companyData.getVOC(),
//
//        )

        return 0.0; // placeholder
    }

    public void addCompanyData(CompanyData data) {
        companyDataList.add(data);
    }

    public CompanyData getCompanyDataByName(String name) {
        for (CompanyData data : companyDataList) {
            if (data.getCompanyName().equals(name)) {
                return data;
            }
        }
        return null; // return null if company not found
    }

    public List<CompanyData> getAllCompanies() {
        return companyDataList;
    }
}
