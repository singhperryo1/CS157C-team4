package com.example.server.controller;

import com.example.server.model.Customer;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import com.example.server.repo.CustomerRepo;

@RestController
public class CustomerController {
    CustomerRepo customerRepo;

    @GetMapping("/getPassword/{email}")
    @ResponseBody
    public ResponseEntity<Customer> getPassword(@PathVariable String email) {

        System.out.println("Reached in right pass");
        Customer customer = customerRepo.getCustomerByEmail(email);
        return new ResponseEntity<Customer>(customer, HttpStatus.OK);
    }

    @PostMapping(value = "/addCustomer", consumes = {"application/json"}, produces = {"application/json"})
    @ResponseBody
    public ResponseEntity<Customer> addCustomer(@RequestBody Customer customer, UriComponentsBuilder builder) {

        System.out.println(customer.email);

        customerRepo.addCustomer(customer);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/addCustomer/{id}").buildAndExpand(customer.email).toUri());
        return new ResponseEntity<Customer>(headers, HttpStatus.CREATED);
    }

    @PutMapping("/updateCustomer")
    public ResponseEntity<Customer> updatePassword(String email, String password) {


        System.out.println("Reached in right upd");

        ResponseEntity<Customer> r = getPassword(email);

        Customer customer = r.getBody();

        customer.password = password;

        customerRepo.updateCustomer(customer);

        return new ResponseEntity<Customer>((MultiValueMap<String, String>) customer, HttpStatus.OK);

    }
}
