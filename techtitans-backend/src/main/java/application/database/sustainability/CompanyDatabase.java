package application.database.sustainability;
import application.Exceptions.InvalidMessageException;
import application.database.DbConnection;
import application.model.UserReview;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
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


        return SustainabilityAlgo.calculateESG(
            companyData.getGHGTotal(),
            companyData.getSales(),
            companyData.getOperatingIncome(),
            companyData.getWaterWithdrawn(),
            companyData.getWaterDischarge(),
            companyData.getSOx(),
            companyData.getNOx(),
            companyData.getVOC(),
            0.25
        );

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

    public void load() throws SQLException {

        String sql = "SELECT * FROM SUSTAINABILITY_DATA";

        PreparedStatement pstmt = dbConnection.connection.prepareStatement(sql);

        ResultSet rs = pstmt.executeQuery();

        while (rs.next()) {

            String name = rs.getString("NAME");
            Long ghgTotal = rs.getLong("GHGTOTAL");
            Long sales = rs.getLong("SALES");
            Long operatingIncome = rs.getLong("OPERATINGINCOME");
            Long waterWithdrawn = rs.getLong("WATERWITHDRAWN");
            Long waterDischarge = rs.getLong("WATERDISCHARGE");
            int sox = rs.getInt("SOX");
            int nox = rs.getInt("NOX");
            int voc = rs.getInt("VOC");

            // placeholders
            int year = 2000;
            String country = "a";
            String subIndustry = "b";

            CompanyData company = new CompanyData(
                    name,
                    year,
                    country,
                    subIndustry,
                    ghgTotal,
                    sales,
                    operatingIncome,
                    waterWithdrawn,
                    waterDischarge,
                    sox,
                    nox,
                    voc
            );

            companyDataList.add(company);
            SustainabilityAlgo.companyData = companyDataList;
        }

        pstmt.close();
    }

    public List<CompanyData> getAllCompanies() {
        return companyDataList;
    }
}
