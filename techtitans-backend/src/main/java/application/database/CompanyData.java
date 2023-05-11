package application.database;

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

    // Constructor for Sustainability Algorithm
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

    public CompanyData getAllData() {
        return this;
    }

    public String getCompanyName() {
        return companyName;
    }
}
