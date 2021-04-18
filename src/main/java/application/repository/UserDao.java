package application.repository;

import application.model.User;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

public interface UserDao {
    void updateUser(Long id, User user);

    List<User> getAllUsers();

    void addUser(User user);

    void deleteUser(Long id);

    User getUser(Long id);

    User getUserByLogin(String login);

    UserDetails loadUserByUsername(String s);
}
