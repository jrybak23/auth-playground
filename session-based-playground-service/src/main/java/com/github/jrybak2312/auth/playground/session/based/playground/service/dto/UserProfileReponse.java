package com.github.jrybak2312.auth.playground.session.based.playground.service.dto;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.List;

import static java.util.stream.Collectors.toList;

/**
 * @author Igor Rybak
 * @since 04-Jul-2018
 */
public class UserProfileReponse {
    private final String username;
    private final List<String> authorities;

    public UserProfileReponse(User user) {
        this.username = user.getUsername();
        authorities = user.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(toList());
    }

    public String getUsername() {
        return username;
    }

    public List<String> getAuthorities() {
        return authorities;
    }
}
