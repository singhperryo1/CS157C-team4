package com.example.server.model;

import java.io.Serializable;

public class Customer implements Serializable {

    private static final long serialVersionUID = 1L;

    public String username;
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

    @Override
    public String toString() {
        return String.format("Customer[username='%s', org='%s', email='%s', password='%s']", username, organization , email, password);
    }
}