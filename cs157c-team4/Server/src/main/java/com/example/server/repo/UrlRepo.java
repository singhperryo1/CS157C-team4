package com.example.server.repo;

import com.example.server.model.Url;
import java.util.Map;


public interface UrlRepo {

    void saveUrl(Url url);
    Url find(String encoded);
    Map findAllUrl();
}
