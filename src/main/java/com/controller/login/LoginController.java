package com.controller.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/system/login")
public class LoginController {
    @RequestMapping("/sign")
    public String asc()
    {
        return "/system/login/signInUI";
    }
}
