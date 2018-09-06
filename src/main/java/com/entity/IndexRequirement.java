package com.entity;


public class IndexRequirement {

  private String id;
  private String name;
  private String description;


  public IndexRequirement(String id, String name, String description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  public IndexRequirement() {
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

}
