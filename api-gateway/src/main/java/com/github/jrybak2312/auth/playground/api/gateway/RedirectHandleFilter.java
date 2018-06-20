package com.github.jrybak2312.auth.playground.api.gateway;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

/**
 * @author Igor Rybak
 * @since 26-Apr-2018
 */
@Component
public class RedirectHandleFilter extends ZuulFilter {
    private final ApiGatewayProperties gatewayProperties;
    private final DiscoveryClient discoveryClient;

    public RedirectHandleFilter(ApiGatewayProperties gatewayProperties, DiscoveryClient discoveryClient) {
        this.gatewayProperties = gatewayProperties;
        this.discoveryClient = discoveryClient;
    }

    @Override
    public String filterType() {
        return "post";
    }

    @Override
    public int filterOrder() {
        return 999;
    }

    @Override
    public boolean shouldFilter() {
        return getServiceNameFromHeader()
                .map(serviceName -> gatewayProperties.getRedirectServices().stream().anyMatch(serviceName::equals))
                .orElse(false);
    }

    @Override
    public Object run() {
        String serviceName = getServiceNameFromHeader()
                .orElseThrow(RuntimeException::new);
        List<ServiceInstance> instances = discoveryClient.getInstances(serviceName);
        ServiceInstance serviceInstance = instances.stream().findFirst()
                .orElseThrow(() -> new RuntimeException("No instances of " + serviceName + " was found."));

        try {
            getResponse().sendRedirect(serviceInstance.getUri().toString());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return null;
    }

    private Optional<String> getServiceNameFromHeader() {
        return Optional.ofNullable(RequestContext.getCurrentContext().getRequest().getRequestURI())
                .map(header -> header.substring(1));
    }

    private HttpServletResponse getResponse() {
        return RequestContext.getCurrentContext().getResponse();
    }

}
