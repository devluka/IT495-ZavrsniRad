package com.shoe.shop.repository;

import com.shoe.shop.model.Role;
import com.shoe.shop.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    User findByEmail(String email);

    User findByVerificationToken(String token);

    List<User> findByRole(Role role);
}
