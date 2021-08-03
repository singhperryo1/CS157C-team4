package com.example.server.controller;


import java.io.FileWriter;
import java.io.IOException;

import com.fasterxml.jackson.databind.util.JSONPObject;
import org.json.simple.JSONObject;

import com.example.server.model.Customer;
import com.example.server.model.HomeAnalytics;
import com.example.server.repo.CustomerRepo;
import com.example.server.model.Url;
import com.example.server.repo.HomeAnalyticsRepo;
import com.example.server.repo.UrlRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.Map;
import java.util.*;


@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
public class WebController {

    @Autowired
    private CustomerRepo customerRepository;

    @Autowired
    private UrlRepo urlRepository;

    @Autowired
    private HomeAnalyticsRepo homeAnalyticsRepository;

    @RequestMapping("/save")
    public String save(@RequestBody Customer customer) {
        // save a single Customer
        customerRepository.save(new Customer(customer.username, customer.email, customer.password, customer.organization));
        return customer.toString();
    }

    @RequestMapping("/find")
    public JSONObject findByEmail(@RequestParam("email") String email) {
        Customer customer = customerRepository.find(email);

        JSONObject jo = new JSONObject();

        jo.put("username", customer.username);
        jo.put("email", customer.email);
        jo.put("password", customer.password);
        jo.put("organization", customer.organization);

        return jo;
    }

    @RequestMapping("/update")
    public String update(@RequestParam("email") String email , @RequestParam("password") String password) {
        customerRepository.update(email, password);

        return "Updated";
    }

    @RequestMapping("/saveUrl")
    public String save(@RequestBody Url url) {
        // save a single Customer
        urlRepository.saveUrl(new Url(url.url, url.encoded, url.rates));
        return url.toString();
    }

    @RequestMapping("/findUrl")
    public JSONObject findByEncoded(@RequestParam("encoded") String encoded) {
        Url url = urlRepository.find(encoded);

        JSONObject jo = new JSONObject();

        jo.put("url", url.url);
        jo.put("encoded", url.encoded);
        jo.put("rates", url.rates);

        return jo;
    }

    @RequestMapping("/findAllUrl")
    public List<JSONObject> findAllUrl() {
        String result = "";
        Map urls = urlRepository.findAllUrl();

        List<JSONObject> r = new ArrayList<>();

        for (Object url : urls.values()) {
            JSONObject jo = new JSONObject();

            Url ur = (Url) url;

            jo.put("url", ur.url);
            jo.put("encoded", ur.encoded);
            jo.put("rates", ur.rates);
            r.add(jo);
        }
        return r;
    }

    @RequestMapping("/saveAnalytics")
    public String save(@RequestBody HomeAnalytics homeAnalytics) {
        // save a single Customer
        homeAnalyticsRepository.saveAnalytics(new HomeAnalytics(homeAnalytics.decodes, homeAnalytics.rates));
        return homeAnalytics.toString();
    }

    @RequestMapping("/findAnalytics")
    public JSONObject findAna(@RequestParam("rates") int rates) {

        HomeAnalytics ha = homeAnalyticsRepository.findAnalytics(rates);

        JSONObject jo = new JSONObject();

        jo.put("rates", ha.rates);
        jo.put("decodes", ha.decodes);
        return jo;
    }

    @RequestMapping("/updateAna")
    public String update(@RequestParam("rates") int rates , @RequestParam("decodes") int decodes) {
        homeAnalyticsRepository.update(decodes, rates);

        return "Updated";
    }


}