package com.github.jrybak2312.auth.playground.http.basic.playground.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableDiscoveryClient
@ComponentScan({"com.github.jrybak2312.auth.playground.http.basic.playground.service.config",
        "com.github.jrybak2312.auth.playground.http.basic.playground.service.web",
        "com.github.jrybak2312.auth.playground.commons.web"})
public class HttpBasicPlaygroundServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(HttpBasicPlaygroundServiceApplication.class, args);
    }
}
