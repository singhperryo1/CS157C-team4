package com.example.server.repo;


import java.util.Map;

import javax.annotation.PostConstruct;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;
import com.example.server.model.Url;

@Repository
public class UrlRepoImpl implements UrlRepo {

    private static final String KEY = "Url";

    private RedisTemplate redisTemplate;
    private HashOperations hashOperations;

    @Autowired
    public UrlRepoImpl(RedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    @PostConstruct
    private void init() {
        hashOperations = redisTemplate.opsForHash();
    }

    @Override
    public void saveUrl(Url url) {
        hashOperations.put(KEY, url.encoded, url);
    }

    @Override
    public Map findAllUrl() {
        return hashOperations.entries(KEY);
    }

    @Override
    public Url find(String encoded) {
        return (Url) hashOperations.get(KEY, encoded);
    }

}