package example.application.controllers;

import example.data.StaticUserDAO;
import example.data.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

/**
 * Controller for the main page, displayed after the user has logged in.
 */
@Controller
public class MainViewController {
    /**
     * The singleton instance of the database connection. This is used to access the
     * database of users.
     */
    private final StaticUserDAO userDAO = new StaticUserDAO();

    /**
     * Displays the main page.
     *
     * @param model The model that defines the attributes to be displayed.
     * @return The name of the view to display.
     */
    @GetMapping("/main")
    public String main(Model model) {
        User user = (User) model.getAttribute("user");
        model.addAttribute("user", user);
        model.addAttribute("users", userDAO.listUsers());
        return "main-view";
    }

    /**
     * Logs the user out.
     *
     * @return The name of the view to display.
     */
    @PostMapping("/logout")
    public String logout() {
        return "redirect:/login";
    }
}
