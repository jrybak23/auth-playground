package com.github.jrybak2312.auth.playground.session.based.playground.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class SessionBasedPlaygroundServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(SessionBasedPlaygroundServiceApplication.class, args);
    }
}
