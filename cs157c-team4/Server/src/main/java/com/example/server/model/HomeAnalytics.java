package com.example.server.model;

import java.io.Serializable;

public class HomeAnalytics implements Serializable {

    private static final long serialVersionUID = 1L;

    public int rates;
    public int decodes;

    public HomeAnalytics(){};

    public HomeAnalytics(int r, int d) {
        this.decodes = d;
        this.rates = r;
    }

    @Override
    public String toString() {
        return String.format("Home Analytics[Rates='%s', decodes are ='%s']", rates, decodes);
    }
}
