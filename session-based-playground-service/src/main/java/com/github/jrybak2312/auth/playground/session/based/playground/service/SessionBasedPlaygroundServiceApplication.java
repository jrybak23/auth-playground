package com.github.jrybak2312.auth.playground.session.based.playground.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableEurekaClient
@ComponentScan({"com.github.jrybak2312.auth.playground.session.based.playground.service.config",
        "com.github.jrybak2312.auth.playground.session.based.playground.service.web",
        "com.github.jrybak2312.auth.playground.commons.web"})
public class SessionBasedPlaygroundServiceApplication {

    @Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplateBuilder().build();
    }

    public static void main(String[] args) {
        SpringApplication.run(SessionBasedPlaygroundServiceApplication.class, args);
    }
}
