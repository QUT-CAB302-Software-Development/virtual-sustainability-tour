package application.database;

import org.springframework.context.annotation.Bean;


public class CompanyData {
    private String companyName;
    private int year;
    private String country;
    private String subIndustry;
    private long ghgTotal; // metric tons
    private long sales; // dollars
    private long operatingIncome; // dollars
    private long waterWithdrawn; // m3
    private long waterDischarge; // m3
    private int sox; // metric tons
    private int nox; // metric tons
    private int voc; // metric tons

    public CompanyData(String companyName, int year, String country, String subIndustry,
                       long ghgTotal, long sales, long operatingIncome, long waterWithdrawn,
                       long waterDischarge, int sox, int nox, int voc) {
        this.companyName = companyName;
        this.year = year;
        this.country = country;
        this.subIndustry = subIndustry;
        this.ghgTotal = ghgTotal;
        this.sales = sales;
        this.operatingIncome = operatingIncome;
        this.waterWithdrawn = waterWithdrawn;
        this.waterDischarge = waterDischarge;
        this.sox = sox;
        this.nox = nox;
        this.voc = voc;
    }

    public String getCompanyName() {
        return companyName;
    }

    public int getYear() {
        return year;
    }

    public String getCountry() {
        return country;
    }

    public String getSubIndustry() {
        return subIndustry;
    }

    public long getGHGTotal() {
        return ghgTotal;
    }

    public long getSales() {
        return sales;
    }

    public long getOperatingIncome() {
        return operatingIncome;
    }

    public long getWaterWithdrawn() {
        return waterWithdrawn;
    }

    public long getWaterDischarge() {
        return waterDischarge;
    }

    public int getSOx() {
        return sox;
    }

    public int getNOx() {
        return nox;
    }

    public int getVOC() {
        return voc;
    }

}
