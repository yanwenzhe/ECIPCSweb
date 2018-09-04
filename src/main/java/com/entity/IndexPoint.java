package com.entity;

public class IndexPoint {

  private double id; //编号
  private String indexRequirementId; //指标要求id
  private String yearStart; //开始年份
  private String yearEnd; //结束年份
  private String description; //描述

  public IndexPoint() {
  }

  public IndexPoint(double id, String indexRequirementId, String yearStart, String yearEnd, String description) {
    this.id = id;
    this.indexRequirementId = indexRequirementId;
    this.yearStart = yearStart;
    this.yearEnd = yearEnd;
    this.description = description;
  }

  public double getId() {
    return id;
  }

  public void setId(double id) {
    this.id = id;
  }


  public String getIndexRequirementId() {
    return indexRequirementId;
  }

  public void setIndexRequirementId(String indexRequirementId) {
    this.indexRequirementId = indexRequirementId;
  }


  public String getYearStart() {
    return yearStart;
  }

  public void setYearStart(String yearStart) {
    this.yearStart = yearStart;
  }


  public String getYearEnd() {
    return yearEnd;
  }

  public void setYearEnd(String yearEnd) {
    this.yearEnd = yearEnd;
  }


  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

}
