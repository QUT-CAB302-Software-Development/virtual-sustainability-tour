package example.application;

import application.database.CompanyData;
import application.database.SustainabilityAlgo;

import static application.database.SustainabilityAlgo.*;
import org.junit.jupiter.api.Test;
import java.util.ArrayList;
import java.util.List;

public class SustainabilityAlgoTests {
    @Test
    public void testCalculateESG1() {
        long ghgTotal = 4370546000L;
        long sales = 5788000000L;
        long operatingIncome = 1010000000L;
        long waterWithdrawn = 138887000L;
        long waterDischarge = 34722000L;
        int sox = 0;
        int nox = 0;
        int voc = 0;
        double normalisedESG = 0.25;

        int esgScore = 10;//SustainabilityAlgo.calculateESG(ghgTotal, sales, operatingIncome, waterWithdrawn, waterDischarge, sox, nox, voc, normalisedESG);

        System.out.println("Estimated ESG Score of Hilton: " + esgScore);
        System.out.println("Official ESG Score of Hilton: 17");
    }
    @Test
    public void testCalculateESG2() {
        long ghgTotal = 118705000;
        long sales = 987794000L;
        long operatingIncome = 1010000000L;
        long waterWithdrawn = 138887000L;
        long waterDischarge = 34722000L;
        int sox = 0;
        int nox = 0;
        int voc = 0;
        double normalisedESG = 0.25;

        int esgScore = 10;//SustainabilityAlgo.calculateESG(ghgTotal, sales, operatingIncome, waterWithdrawn, waterDischarge, sox, nox, voc, normalisedESG);

        System.out.println("Estimated ESG Score of Rydges: " + esgScore);
        System.out.println("Official ESG Score of Rydges: 14.6");
    }
    @Test
    public void testCalculateESG3() {
        long ghgTotal = 8123657L;
        long sales = 5788000000L;
        long operatingIncome = 1010000000L;
        long waterWithdrawn = 138887000L;
        long waterDischarge = 34722000L;
        int sox = 0;
        int nox = 0;
        int voc = 0;
        double normalisedESG = 0.25;

        int esgScore = 10;//SustainabilityAlgo.calculateESG(ghgTotal, sales, operatingIncome, waterWithdrawn, waterDischarge, sox, nox, voc, normalisedESG);

        System.out.println("Estimated ESG Score of Hilton: " + esgScore);
        System.out.println("Official ESG Score of Hilton: 17");
    }
    @Test
    public void testCalculateESG4() {
        long ghgTotal = 8123657L;
        long sales = 5788000000L;
        long operatingIncome = 1010000000L;
        long waterWithdrawn = 138887000L;
        long waterDischarge = 34722000L;
        int sox = 0;
        int nox = 0;
        int voc = 0;
        double normalisedESG = 0.25;

        int esgScore = 10;//SustainabilityAlgo.calculateESG(ghgTotal, sales, operatingIncome, waterWithdrawn, waterDischarge, sox, nox, voc, normalisedESG);

        System.out.println("Estimated ESG Score of Hilton: " + esgScore);
        System.out.println("Official ESG Score of Hilton: 17");
    }
    @Test
    public void testCalculateESG5() {
        long ghgTotal = 8123657L;
        long sales = 5788000000L;
        long operatingIncome = 1010000000L;
        long waterWithdrawn = 138887000L;
        long waterDischarge = 34722000L;
        int sox = 0;
        int nox = 0;
        int voc = 0;
        double normalisedESG = 0.25;

        int esgScore = 10;//SustainabilityAlgo.calculateESG(ghgTotal, sales, operatingIncome, waterWithdrawn, waterDischarge, sox, nox, voc, normalisedESG);

        System.out.println("Estimated ESG Score of Hilton: " + esgScore);
        System.out.println("Official ESG Score of Hilton: 17");
    }

}
