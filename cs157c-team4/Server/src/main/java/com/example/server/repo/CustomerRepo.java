package com.example.server.repo;

import com.example.server.model.Customer;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CustomerRepo {

    public static final String KEY = "CUSTOMER";
    private RedisTemplate<String, Customer> redisTemplate;
    private HashOperations hashOperations;

    public CustomerRepo(RedisTemplate<String, Customer> redisTemplate) {
        this.redisTemplate = redisTemplate;
        hashOperations = redisTemplate.opsForHash();
    }

    public Customer getCustomerByEmail(String email) {
        return (Customer) hashOperations.get(KEY, email);
    }

    public void addCustomer(Customer customer) {
        System.out.println(customer.u'');
        hashOperations.put(KEY, customer.username, customer);
    }

    public void updateCustomer(Customer customer) {
        addCustomer(customer);
    }
}
