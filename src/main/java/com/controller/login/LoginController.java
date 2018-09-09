package com.controller.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import static com.utils.PageNameUtil.ADMIN;
import static com.utils.PageNameUtil.LOGIN;
import static com.utils.PageNameUtil.MANAGE_INDEX_POINT;

@Controller
@RequestMapping("/system/login")
public class LoginController {
    @RequestMapping("/signIn")
    public String asc()
    {
        return LOGIN;
    }


    @RequestMapping("/verify")
    @ResponseBody()
    public String veyifyIdentity(@RequestParam("username") String username,
                                 @RequestParam("password") String password)
    {
        //管理员
        if (username.equals("admin") && password.equals("admin"))
        {
            return ADMIN;
        }
        //教授
        else if(username.equals("root") && password.equals("root"))
        {
            return MANAGE_INDEX_POINT;
        }
        //老师
        else
        {

        }
        return "fail";
    }
}
