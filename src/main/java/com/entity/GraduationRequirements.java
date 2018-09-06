package com.entity;


public class GraduationRequirements {

  private String id;
  private String indexPintId;
  private String yearStart;
  private String yearEnd;
  private double value;


  public GraduationRequirements() {
  }

  public GraduationRequirements(String id, String indexPintId, String yearStart, String yearEnd, double value) {
    this.id = id;
    this.indexPintId = indexPintId;
    this.yearStart = yearStart;
    this.yearEnd = yearEnd;
    this.value = value;
  }


  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }


  public String getIndexPintId() {
    return indexPintId;
  }

  public void setIndexPintId(String indexPintId) {
    this.indexPintId = indexPintId;
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


  public double getValue() {
    return value;
  }

  public void setValue(double value) {
    this.value = value;
  }

}
