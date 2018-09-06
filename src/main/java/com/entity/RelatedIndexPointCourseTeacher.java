package com.entity;


public class RelatedIndexPointCourseTeacher {

  private String id;
  private String indexPointId;
  private String courseId;
  private String teacherId;
  private String hasChosen;
  private double evaluteValue;


  public RelatedIndexPointCourseTeacher() {
  }

  public RelatedIndexPointCourseTeacher(String id, String indexPointId, String courseId, String teacherId, String hasChosen, double evaluteValue) {
    this.id = id;
    this.indexPointId = indexPointId;
    this.courseId = courseId;
    this.teacherId = teacherId;
    this.hasChosen = hasChosen;
    this.evaluteValue = evaluteValue;
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


  public String getTeacherId() {
    return teacherId;
  }

  public void setTeacherId(String teacherId) {
    this.teacherId = teacherId;
  }


  public String getHasChosen() {
    return hasChosen;
  }

  public void setHasChosen(String hasChosen) {
    this.hasChosen = hasChosen;
  }


  public double getEvaluteValue() {
    return evaluteValue;
  }

  public void setEvaluteValue(double evaluteValue) {
    this.evaluteValue = evaluteValue;
  }

}
