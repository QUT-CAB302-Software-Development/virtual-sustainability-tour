package example.application;

import application.utility.SustainabilityAlgo;

import org.junit.jupiter.api.Test;

public class SustainabilityAlgoTests {
    @Test
    public void testCalculateESG() {
        long ghgTotal = 8123657L;
        long sales = 5788000000L;
        long operatingIncome = 1010000000L;
        long waterWithdrawn = 138887000L;
        long waterDischarge = 34722000L;
        int sox = 0;
        int nox = 0;
        int voc = 0;
        double normalisedESG = 0.25;

        int esgScore = SustainabilityAlgo.calculateESG(ghgTotal, sales, operatingIncome, waterWithdrawn, waterDischarge, sox, nox, voc, normalisedESG);

        System.out.println("Estimated ESG Score of Hilton: " + esgScore);
        System.out.println("Official ESG Score of Hilton: 17");
    }
}
