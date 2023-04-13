package example.application.controllers;

import example.data.DBConnection;
import example.data.StaticDatabaseConnection;
import example.data.StaticUserDAO;
import example.data.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;
import java.util.List;

/**
 * Controller for the login page.
 */
@Controller
public class LoginController {
    /**
     * The singleton instance of the database connection. This is used to access the
     * database of users.
     */
    private final StaticUserDAO userDAO = new StaticUserDAO();

    /**
     * Displays the login page.
     *
     * @param model The model to add attributes to.
     * @return The name of the view to display.
     */
    @GetMapping("/login")
    public String showLoginForm(Model model) {
        // The user attribute is initialized to an empty user.
        model.addAttribute("user", new User("","",""));
        // When the user first visits the login page, they are not registering.
        model.addAttribute("isRegistering", false);
        return "login-view";
    }

    /**
     * Attempts to log in the user. If successful, redirects to the main page. If
     * unsuccessful, displays an error message and returns to the login page.
     *
     * @param model The model to add attributes to.
     * @return The name of the view to display.
     */
    @RequestMapping(value = "/login", method = RequestMethod.POST, params = "login")
    public String loginSubmit(@ModelAttribute User user, Model model, RedirectAttributes redirectAttrs) {
        // Attempt to retrieve the user from the database.
        User u = userDAO.getUser(user.getEmail());
        if (u != null && u.getPassword().equals(user.getPassword())) {
            // If the user is found and the password matches, update the user's name if it
            // has been changed.
            if (user.getName() != null && !user.getName().isEmpty())
                u.setName(user.getName());

            // Add the user to the redirect attributes so that it can be accessed by the
            // main page controller.
            redirectAttrs.addFlashAttribute("user", u);
            return "redirect:/main";
        }

        // If the user is not found or the password does not match, display an error
        model.addAttribute("error", "Invalid email or password");
        model.addAttribute("isRegistering", false);
        return "login-view";
    }

    /**
     * Attempts to register the user. If successful, displays a success message and
     * returns to the login page. If unsuccessful, displays an error message and returns
     * to the login page.
     *
     * @param model The model to add attributes to.
     * @return The name of the view to display.
     */
    @RequestMapping(value = "/login", method = RequestMethod.POST, params = "register")
    public String registerSubmit(@ModelAttribute User user, Model model) {
        if (userDAO.getUser(user.getEmail()) != null) {
            model.addAttribute("error", "Email already registered");
        } else {
            userDAO.addUser(user);
            model.addAttribute("success", "Registration successful. Please fill in your name before logging in.");
            model.addAttribute("isRegistering", true);
        }
        model.addAttribute("user", user);
        return "login-view";
    }
}
