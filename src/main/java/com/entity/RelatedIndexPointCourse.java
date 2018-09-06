package com.entity;

public class RelatedIndexPointCourse {

  private String id;
  private String indexPointId;
  private String courseId;
  private double supportFactor;
  private String supportDegree;
  private double evaluateValue;
  private String teachingContent;
  private String assessmentContent;


  public RelatedIndexPointCourse() {
  }

  public RelatedIndexPointCourse(String id, String indexPointId, String courseId, double supportFactor, String supportDegree, double evaluateValue, String teachingContent, String assessmentContent) {
    this.id = id;
    this.indexPointId = indexPointId;
    this.courseId = courseId;
    this.supportFactor = supportFactor;
    this.supportDegree = supportDegree;
    this.evaluateValue = evaluateValue;
    this.teachingContent = teachingContent;
    this.assessmentContent = assessmentContent;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }


  public String getIndexPointId() {
    return indexPointId;
  }

  public void setIndexPointId(String indexPointId) {
    this.indexPointId = indexPointId;
  }


  public String getCourseId() {
    return courseId;
  }

  public void setCourseId(String courseId) {
    this.courseId = courseId;
  }


  public double getSupportFactor() {
    return supportFactor;
  }

  public void setSupportFactor(double supportFactor) {
    this.supportFactor = supportFactor;
  }


  public String getSupportDegree() {
    return supportDegree;
  }

  public void setSupportDegree(String supportDegree) {
    this.supportDegree = supportDegree;
  }


  public double getEvaluateValue() {
    return evaluateValue;
  }

  public void setEvaluateValue(double evaluateValue) {
    this.evaluateValue = evaluateValue;
  }


  public String getTeachingContent() {
    return teachingContent;
  }

  public void setTeachingContent(String teachingContent) {
    this.teachingContent = teachingContent;
  }


  public String getAssessmentContent() {
    return assessmentContent;
  }

  public void setAssessmentContent(String assessmentContent) {
    this.assessmentContent = assessmentContent;
  }

}
