package application.utility;

public class DataValidation {
    public static boolean tryConvertToInteger(Object x) {

        try {
            Integer.parseInt((String) x);
        } catch (NumberFormatException e) {
            return false;
        }

        return true;
    }

}
