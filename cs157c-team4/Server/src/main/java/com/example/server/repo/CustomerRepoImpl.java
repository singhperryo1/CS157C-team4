package com.example.server.repo;


import java.util.Map;

import javax.annotation.PostConstruct;

import com.example.server.model.Url;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import com.example.server.model.Customer;

@Repository
public class CustomerRepoImpl implements CustomerRepo {

    private static final String KEY = "Customer";

    private RedisTemplate redisTemplate;
    private HashOperations hashOperations;

    @Autowired
    public CustomerRepoImpl(RedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    @PostConstruct
    private void init() {
        hashOperations = redisTemplate.opsForHash();
    }

    @Override
    public void save(Customer customer) {
        hashOperations.put(KEY, customer.email, customer);
    }

    @Override
    public Customer find(String email) {
        return (Customer) hashOperations.get(KEY, email);
    }


    @Override
    public void update(String email, String password) {
        Customer customer = find(email);
        customer.password = password;
        save(customer);
    }

}