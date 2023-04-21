package application.database;

public class SustainabilityAlgo {
    private String CompanyName;
    private int Year;
    private int Lat;
    private int Lng;
    private String GICSSubIndustry;
    private int GHGTotal;
    private int Sales;
    private int OperatingIncome;

    // Constructor for Sustainability Algorithm
    public SustainabilityAlgo(String CompanyName, int Year, int Lat, int Lng) {
        this.CompanyName = CompanyName;
        this.Year = Year;
        this.Lat = Lat;
        this.Lng = Lng;
    }

    public int CalculateIndex() {
        return Year;
    }

}
