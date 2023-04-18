package application;

import org.springframework.context.event.ContextClosedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

public class Shutdown {
    @Component
    public class ContextClosedEventListener {

        @EventListener(ContextClosedEvent.class)
        public void onContextClosedEvent(ContextClosedEvent contextClosedEvent) {
            System.out.println("ContextClosedEvent occurred at millis: " + contextClosedEvent.getTimestamp());
        }
    }
}
