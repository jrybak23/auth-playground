package com.github.jrybak2312.auth.playground.http.basic.playground.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class HttpBasicPlaygroundServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(HttpBasicPlaygroundServiceApplication.class, args);
    }
}
