package com.github.jrybak2312.auth.playground.session.based.playground.service.web;

import com.github.jrybak2312.auth.playground.session.based.playground.service.dto.UserProfileReponse;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author Igor Rybak
 * @since 15-Apr-2018
 */
@Controller
public class ProfileController {
    @GetMapping("/profile")
    public String getProfile(Model model, @AuthenticationPrincipal User user) {
        model.addAttribute("username", user.getUsername());
        return "profile";
    }

    @GetMapping("/api/me/profile")
    @ResponseBody
    public UserProfileReponse getProfile(@AuthenticationPrincipal User user) {
        return new UserProfileReponse(user);
    }
}
