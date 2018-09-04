package com.entity;

public class RelatedIndexPointCourse {

  private String id; //编号
  private String indexPointId; //指标点id
  private String courseId; //课程id
  private long supportFactor; //支撑系数
  private String supportDegree; //支撑程度
  private double evaluateValue; //评估值
  private String teachingContent; //教学内容
  private String assessmentContent; //考核内容
  private String year; //年份

  public RelatedIndexPointCourse() {
  }

  public RelatedIndexPointCourse(String id, String indexPointId, String courseId, long supportFactor, String supportDegree, double evaluateValue, String teachingContent, String assessmentContent, String year) {
    this.id = id;
    this.indexPointId = indexPointId;
    this.courseId = courseId;
    this.supportFactor = supportFactor;
    this.supportDegree = supportDegree;
    this.evaluateValue = evaluateValue;
    this.teachingContent = teachingContent;
    this.assessmentContent = assessmentContent;
    this.year = year;
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


  public long getSupportFactor() {
    return supportFactor;
  }

  public void setSupportFactor(long supportFactor) {
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


  public String getYear() {
    return year;
  }

  public void setYear(String year) {
    this.year = year;
  }

}
