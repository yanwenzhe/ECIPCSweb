package com.entity;

public class Teacher {

  private String id;
  private String username;
  private String password;
  private String phone;


  public Teacher() {
  }

  public Teacher(String id, String username, String password, String phone) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.phone = phone;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }


  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }


  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }


  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

}
