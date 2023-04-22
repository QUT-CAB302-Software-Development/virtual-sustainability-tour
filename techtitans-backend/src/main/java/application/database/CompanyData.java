package application.database;

public class CompanyData {
    private String companyName;
    private int year;
    private String country;
    private String subIndustry;
    private int ghgTotal;
    private int sales;
    private int operatingIncome;
    private int waterWithdrawn;
    private int waterDischarge;
    private int sox;
    private int nox;
    private int voc;

    // Constructor for Sustainability Algorithm
    public CompanyData(String companyName, int year, String country, String subIndustry,
                       int ghgTotal, int sales, int operatingIncome, int waterWithdrawn,
                       int waterDischarge, int sox, int nox, int voc) {
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

    public int calculateIndex() {
        return year;
    }
}