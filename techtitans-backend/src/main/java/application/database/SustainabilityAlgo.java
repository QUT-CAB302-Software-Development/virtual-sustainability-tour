package application.database;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class SustainabilityAlgo {
    private static List<CompanyData> companyData;

    public SustainabilityAlgo(List<CompanyData> companyData) {
        this.companyData = companyData;
    }

    public static List<Double> normaliseESG(List<Double> esgScores) {
        // Calculate the average ESG score in the industry
        double avgESG = esgScores.stream().mapToDouble(Double::doubleValue).average().orElse(0.0);

        // Calculate the scaling factor to normalise ESG scores to the range of 0.2-0.3
        double scalingFactor = 1.0 / avgESG * 0.25;

        // Scale the ESG scores using the scaling factor
        List<Double> scaledESG = esgScores.stream().map(score -> score * scalingFactor).collect(Collectors.toList());

        // Further normalise the ESG scores to the range of 0-1
        double maxESG = scaledESG.stream().mapToDouble(Double::doubleValue).max().orElse(0.0);
        double minESG = scaledESG.stream().mapToDouble(Double::doubleValue).min().orElse(0.0);
        List<Double> normalisedESG = scaledESG.stream().map(score -> (score - minESG) / (maxESG - minESG)).collect(Collectors.toList());

        return normalisedESG;
    }

    public static List<Double> calculateIndustryRatios(List<CompanyData> companyData) {
        int numCompanies = companyData.size();
        double totalGHGRatio = 0.0;
        double totalWWRatio = 0.0;
        double totalWDRatio = 0.0;
        double totalOIRatio = 0.0;

        for (CompanyData company : companyData) {
            long sales = company.getSales();
            long ghgTotal = company.getGHGTotal();
            long waterWithdrawn = company.getWaterWithdrawn();
            long waterDischarge = company.getWaterDischarge();
            long operatingIncome = company.getOperatingIncome();

            // Calculate ratios for each company
            double ghgRatio = (double) ghgTotal / sales;
            double wwRatio = (double) waterWithdrawn / sales;
            double wdRatio = (double) waterDischarge / sales;
            double oiRatio = (double) operatingIncome / sales;

            // Sum ratios
            totalGHGRatio += ghgRatio;
            totalWWRatio += wwRatio;
            totalWDRatio += wdRatio;
            totalOIRatio += oiRatio;
        }

        // Calculate average ratios
        double averageGHGRatio = totalGHGRatio / numCompanies;
        double averageWWRatio = totalWWRatio / numCompanies;
        double averageWDRatio = totalWDRatio / numCompanies;
        double averageOIRatio = totalOIRatio / numCompanies;

        // Create and return the list of average ratios
        List<Double> industryRatios = new ArrayList<>();
        industryRatios.add(averageGHGRatio);
        industryRatios.add(averageWWRatio);
        industryRatios.add(averageWDRatio);
        industryRatios.add(averageOIRatio);

        return industryRatios;
    }

    public static int calculateESG(long ghgTotal, long sales, long operatingIncome, long waterWithdrawn,
                                        long waterDischarge, int sox, int nox, int voc, double normalisedESG) {
        List<Double> industryRatios = calculateIndustryRatios(companyData);
        // Normalise GHG emissions based on industry ratio
        double ghgRatio = industryRatios.get(0); // average GHG emissions to sales ratio in industry 0.0014
        double ghgNormalised = (double)(ghgTotal - 0) / (sales * ghgRatio);

        // Normalise water withdrawal based on company size
        double wwRatio = industryRatios.get(1); // average water withdrawal to sales ratio in industry 0.0083
        double wwNormalised = (double)(waterWithdrawn - 0) / (sales * wwRatio);

        // Normalise water discharge based on company size
        double wdRatio = industryRatios.get(2); // average water discharge to sales ratio in industry 0.0021
        double wdNormalised = (double)(waterDischarge - 0) / (sales * wdRatio);

        // Normalise operating income based on industry average
        double oiRatio = industryRatios.get(3); // average EBITDA/Sales ratio 0.0927
        double oiNormalised = (double)(operatingIncome - 0) / (sales * oiRatio);

        // Normalise SOx emissions based on sales
        double soxNormalised = sox != 0 ? (double)(sox - 0) / (sales) : 0.0;

        // Normalise NOx emissions based on sales
        double noxNormalised = nox != 0 ? (double)(nox - 0) / (sales) : 0.0;

        // Normalise VOC emissions based on sales
        double vocNormalised = voc != 0 ? (double)(voc - 0) / (sales) : 0.0;

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
        return (int)Math.round(esgScore * 100 * normalisedESG);
    }
}
