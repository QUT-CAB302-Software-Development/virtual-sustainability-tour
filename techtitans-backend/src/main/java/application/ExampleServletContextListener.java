package application;

import jakarta.servlet.ServletContextEvent;
import jakarta.servlet.ServletContextListener;

public class ExampleServletContextListener implements ServletContextListener {

    @Override
    public void contextDestroyed(ServletContextEvent event) {
        System.out.println(
                "Callback triggered - ContextListener2183617263168316.");


    }

    @Override
    public void contextInitialized(ServletContextEvent event) {
        // Triggers when context initializes
    }
}