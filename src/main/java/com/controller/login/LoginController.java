package com.controller.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import static com.utils.PageNameUtil.LOGIN;

@Controller
@RequestMapping("/system/login")
public class LoginController {
    @RequestMapping("/signIn")
    public String asc()
    {
        return LOGIN;
    }
}
