package database;

public class SustainabilityAlgo {
    private int metric1;
    private int metric2;
    private int metric3;
    private int metric4;
    private int metric5;

    // Constructor for Sustainability Algorithm
    public SustainabilityAlgo(int metric1, int metric2, int metric3, int metric4, int metric5) {
        this.metric1 = metric1;
        this.metric2 = metric2;
        this.metric3 = metric3;
        this.metric4 = metric4;
        this.metric5 = metric5;
    }

    public int CalculateIndex() {
        return metric1;
    }

}
