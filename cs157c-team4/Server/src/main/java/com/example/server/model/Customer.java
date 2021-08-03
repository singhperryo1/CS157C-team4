package com.example.server.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import java.io.Serializable;


@RedisHash("CUSTOMER")
public class Customer implements Serializable {
    public String username;

    @Id
    public String email;
    public String password;
    public String organization;

    public Customer() {

    }

    public Customer(String u, String e, String p, String o) {
        this.username = u;
        this.email = e;
        this.password = p;
        this.organization = o;
    }

}
