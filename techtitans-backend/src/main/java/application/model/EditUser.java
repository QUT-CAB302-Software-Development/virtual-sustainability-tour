package application.model;

public class EditUser {

    private String username;

    private String password;
    private String newPhone;
    private String newName;
    private String newEmail;
    private String newPassword;


    public EditUser() {}

    public EditUser(String username, String password, String newPhone, String newName, String newEmail, String newPassword ) {
        this.username = username;
        this.password = password;
        this.newPhone = newPhone;
        this.newName = newName;
        this.newEmail = newEmail;
        this.newPassword = newPassword;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNewPhone() {
        return newPhone;
    }

    public void setNewPhone(String newPhone) {
        this.newPhone = newPhone;
    }

    public String getNewName() {
        return newName;
    }

    public void setNewName(String newName) {
        this.newName = newName;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }

    public String getNewEmail() {
        return newEmail;
    }

    public void setNewEmail(String newEmail) {
        this.newEmail = newEmail;
    }
}
