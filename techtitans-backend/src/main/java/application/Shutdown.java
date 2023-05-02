package application;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.stereotype.Component;


@Component
public class Shutdown implements DisposableBean {

    @Override
    public void destroy() throws Exception {
        System.out.println("Callback triggered - DisposableBean.");

        Main.userDatabase.save();

        System.out.println("Saved!!!!");

        Main.dbConnection.close();
    }
}