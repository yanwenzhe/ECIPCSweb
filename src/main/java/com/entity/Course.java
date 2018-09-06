package com.entity;


public class Course {

  private String id;
  private String name;
  private String description;
  private String year;


  public Course() {
  }

  public Course(String id, String name, String description, String year) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.year = year;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }


  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }


  public String getYear() {
    return year;
  }

  public void setYear(String year) {
    this.year = year;
  }

}
