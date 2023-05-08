package application;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.stereotype.Component;


@Component
public class Shutdown implements DisposableBean {

    @Override
    public void destroy() throws Exception {
        System.out.println("Callback triggered - Initiate shutdown");

        Main.userDatabase.save();

        System.out.println("Database is saved!!!!");

        Main.dbConnection.close();
    }
}