package com.example.server.repo;


import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;
import com.example.server.model.HomeAnalytics;

@Repository
public class HomeAndAnalyticsRepoImpl implements HomeAnalyticsRepo {

    private static final String KEY = "HomeAndAnalytics";

    private RedisTemplate redisTemplate;
    private HashOperations hashOperations;

    @Autowired
    public HomeAndAnalyticsRepoImpl(RedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    @PostConstruct
    private void init() {
        hashOperations = redisTemplate.opsForHash();
    }

    @Override
    public void saveAnalytics(HomeAnalytics homeAnalytics) {
        hashOperations.put(KEY, homeAnalytics.rates, homeAnalytics);
    }


    @Override
    public HomeAnalytics findAnalytics(int rates) {
        return (HomeAnalytics) hashOperations.get(KEY, rates);
    }

    @Override
    public void update(int decodes, int rates) {
        HomeAnalytics homeAnalytics = findAnalytics(rates);
        homeAnalytics.decodes = decodes + 1;
        homeAnalytics.rates = rates + 1;
        saveAnalytics(homeAnalytics);
    }
}