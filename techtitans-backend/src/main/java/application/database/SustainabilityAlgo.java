package application.database;

import java.util.List;

public class SustainabilityAlgo {
    private List<CompanyData> companyData;

    public SustainabilityAlgo(List<CompanyData> companyData) {
        this.companyData = companyData;
    }

    public static int calculateESG(long ghgTotal, long sales, long operatingIncome, long waterWithdrawn, long waterDischarge, int sox, int nox, int voc) {

        // calculate normalised score for each metric based on papers
        double ghgNormalised = (double)(ghgTotal - 0) / (212222000 - 0);
        double salesNormalised = (double)(sales - 23) / (345000 - 23);
        double oiNormalised = (double)(operatingIncome - 0) / (105000 - 0);
        double wwNormalised = (double)(waterWithdrawn - 0) / (11500000 - 0);
        double wdNormalised = (double)(waterDischarge - 0) / (11200000 - 0);
        double soxNormalised = (double)(sox - 0) / (1347 - 0);
        double noxNormalised = (double)(nox - 0) / (179 - 0);
        double vocNormalised = (double)(voc - 0) / (258 - 0);

        // Calculate weighted score for each metric
        double ghgWeighted = ghgNormalised * 0.3;
        double salesWeighted = salesNormalised * 0.05;
        double oiWeighted = oiNormalised * 0.05;
        double wwWeighted = wwNormalised * 0.1;
        double wdWeighted = wdNormalised * 0.1;
        double soxWeighted = soxNormalised * 0.1;
        double noxWeighted = noxNormalised * 0.1;
        double vocWeighted = vocNormalised * 0.2;

        // Calculate ESG score
        double esgScore = ghgWeighted + salesWeighted + oiWeighted + wwWeighted +
                wdWeighted + soxWeighted + noxWeighted + vocWeighted;

        // Round to integer and return
        return (int)Math.round(esgScore * 100);
    }
}
