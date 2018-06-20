package com.github.jrybak2312.auth.playground.api.gateway;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * @author Igor Rybak
 * @since 26-Apr-2018
 */
@Component
@ConfigurationProperties("api-gateway")
public class ApiGatewayProperties {
    private List<String> redirectServices;

    public List<String> getRedirectServices() {
        return redirectServices;
    }

    public void setRedirectServices(List<String> redirectServices) {
        this.redirectServices = redirectServices;
    }
}
