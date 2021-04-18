package application.service;

import application.model.Role;
import application.model.User;
import application.repository.RoleRepository;
import application.repository.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private UserDao userDao;

    private RoleRepository roleRepository;

    public UserServiceImpl(@Autowired UserDao userDao,
                           @Autowired RoleRepository roleRepository) {
        this.userDao = userDao;
        this.roleRepository = roleRepository;
    }

    public void addUser(User user, String role) {
        Role roleDefault = new Role();
        roleDefault.setRole("ROLE_USER");
        Set<Role> roleSet = new HashSet<>();
        roleSet.add(roleDefault);
        if (role.indexOf("ROLE_") != -1) {
            Role temp = new Role();
            temp.setRole(role);
            roleSet.add(temp);
        }
        user.setRoles(roleSet);
        if (userDao.getUserByLogin(user.getLogin()) == null) {
            for (Role temp : user.getRoles()) {
                roleRepository.save(temp);
            }
            userDao.addUser(user);
        }
    }

    public List<User> getAllUsers() {
        return userDao.getAllUsers();
    }

    public void updateUser(Long id, User user) {
        userDao.updateUser(id, user);
    }

    public void deleteUser(Long id) {
        User user = userDao.getUser(id);
        for (Role role : user.getRoles()
        ) {
            roleRepository.delete(role);
        }
        userDao.deleteUser(id);
    }

    @Override
    public User getUser(Long id) {
        return userDao.getUser(id);
    }
}
