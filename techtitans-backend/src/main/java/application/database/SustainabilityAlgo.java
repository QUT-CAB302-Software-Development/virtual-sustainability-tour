package application.database;

import java.util.List;

public class SustainabilityAlgo {
    private List<CompanyData> companyData;

    public SustainabilityAlgo(List<CompanyData> companyData) {
        this.companyData = companyData;
    }

    public static int calculateESG(long ghgTotal, long sales, long operatingIncome, long waterWithdrawn,
                                        long waterDischarge, int sox, int nox, int voc) {

        // Normalise GHG emissions based on industry ratio
        double ghgRatio = 0.0044; // average GHG emissions to sales ratio in industry
        double ghgNormalised = (double)(ghgTotal - 0) / (sales * ghgRatio);

        // Normalise water withdrawal based on company size
        double wwRatio = 0.0083; // average water withdrawal to sales ratio in industry
        double wwNormalised = (double)(waterWithdrawn - 0) / (sales * wwRatio);

        // Normalise water discharge based on company size
        double wdRatio = 0.0021; // average water discharge to sales ratio in industry
        double wdNormalised = (double)(waterDischarge - 0) / (sales * wdRatio);

        // Normalise operating income based on industry average
        double oiRatio = 0.05; // average operating income to sales ratio in industry
        double oiNormalised = (double)(operatingIncome - 0) / (sales * oiRatio);

        // Normalise SOx emissions based on industry average
        double soxRatio = 0.00039; // average SOx emissions to sales ratio in industry
        double soxNormalised = sox != 0 ? (double)(sox - 0) / (sales * soxRatio) : 0.0;

        // Normalise NOx emissions based on industry average
        double noxRatio = 0.000052; // average NOx emissions to sales ratio in industry
        double noxNormalised = nox != 0 ? (double)(nox - 0) / (sales * noxRatio) : 0.0;

        // Normalise VOC emissions based on industry average
        double vocRatio = 0.000075; // average VOC emissions to sales ratio in industry
        double vocNormalised = voc != 0 ? (double)(voc - 0) / (sales * vocRatio) : 0.0;

        // Calculate weighted score for each metric
        double ghgWeighted = ghgNormalised * 0.3;
        double wwWeighted = wwNormalised * 0.1;
        double wdWeighted = wdNormalised * 0.1;
        double oiWeighted = oiNormalised * 0.05;
        double soxWeighted = soxNormalised * 0.05;
        double noxWeighted = noxNormalised * 0.1;
        double vocWeighted = vocNormalised * 0.25;

        // Calculate ESG score
        double esgScore = ghgWeighted + wwWeighted + wdWeighted + oiWeighted +
                soxWeighted + noxWeighted + vocWeighted;

        // Round to integer and return
        return (int)Math.round(esgScore * 100);
    }
}
