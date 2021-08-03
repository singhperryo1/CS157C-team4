package com.example.server.repo;

import com.example.server.model.Customer;
import java.util.Map;


public interface CustomerRepo {

    void save(Customer customer);
    Customer find(String email);
    void update(String email, String password);
}
