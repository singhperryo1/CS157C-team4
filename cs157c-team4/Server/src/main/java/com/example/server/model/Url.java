package com.example.server.model;

import java.io.Serializable;

public class Url implements Serializable {

    private static final long serialVersionUID = 1L;

    public String url;
    public String encoded;
    public int rates;

    public Url(){};

    public Url(String u, String d, int r) {
        this.url = u;
        this.encoded = d;
        this.rates = r;
    }

    @Override
    public String toString() {
        return String.format("Url[url='%s', encoded as ='%s', hit rates='%s']", url, encoded, rates);
    }
}
