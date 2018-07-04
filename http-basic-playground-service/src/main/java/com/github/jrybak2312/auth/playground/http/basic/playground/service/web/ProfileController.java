package com.github.jrybak2312.auth.playground.http.basic.playground.service.web;

import com.github.jrybak2312.auth.playground.http.basic.playground.service.dto.UserProfileReponse;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Igor Rybak
 * @since 15-Apr-2018
 */
@RestController
public class ProfileController {
    @GetMapping("/me/profile")
    public UserProfileReponse getProfile(@AuthenticationPrincipal User user) {
        return new UserProfileReponse(user);
    }
}
