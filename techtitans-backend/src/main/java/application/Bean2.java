package application;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.context.event.ContextClosedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;


@Component
public class Bean2 implements DisposableBean {

    @Override
    public void destroy() throws Exception {
        System.out.println("Callback triggered - DisposableBean.");

        Main.userDatabase.save();

        System.out.println("Saved!!!!");

        Main.dbConnection.close();

    }


}