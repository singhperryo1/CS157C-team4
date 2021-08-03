package com.example.server.repo;


import com.example.server.model.HomeAnalytics;


public interface HomeAnalyticsRepo {

    void saveAnalytics(HomeAnalytics homeAnalytics);
    HomeAnalytics findAnalytics(int rates);
    void update(int decodes, int rates);
}
