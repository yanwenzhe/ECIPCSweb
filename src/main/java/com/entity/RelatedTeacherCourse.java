package com.entity;

public class RelatedTeacherCourse {

  private String id; //编号
  private String teacherId; //教师id
  private String courseId; //课程id
  private String year; //年份
  private double evaluateValue; //评价值
  private long hasChosen; //是否被选中
  private String oldProblem; //上一届存在的问题
  private String oldSuggestion; //上一届的建议
  private String result; //评价结果
  private String newProblem; //这一届存在的问题

  public RelatedTeacherCourse() {
  }

  public RelatedTeacherCourse(String id, String teacherId, String courseId, String year, double evaluateValue, long hasChosen, String oldProblem, String oldSuggestion, String result, String newProblem) {
    this.id = id;
    this.teacherId = teacherId;
    this.courseId = courseId;
    this.year = year;
    this.evaluateValue = evaluateValue;
    this.hasChosen = hasChosen;
    this.oldProblem = oldProblem;
    this.oldSuggestion = oldSuggestion;
    this.result = result;
    this.newProblem = newProblem;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }


  public String getTeacherId() {
    return teacherId;
  }

  public void setTeacherId(String teacherId) {
    this.teacherId = teacherId;
  }


  public String getCourseId() {
    return courseId;
  }

  public void setCourseId(String courseId) {
    this.courseId = courseId;
  }


  public String getYear() {
    return year;
  }

  public void setYear(String year) {
    this.year = year;
  }


  public double getEvaluateValue() {
    return evaluateValue;
  }

  public void setEvaluateValue(double evaluateValue) {
    this.evaluateValue = evaluateValue;
  }


  public long getHasChosen() {
    return hasChosen;
  }

  public void setHasChosen(long hasChosen) {
    this.hasChosen = hasChosen;
  }


  public String getOldProblem() {
    return oldProblem;
  }

  public void setOldProblem(String oldProblem) {
    this.oldProblem = oldProblem;
  }


  public String getOldSuggestion() {
    return oldSuggestion;
  }

  public void setOldSuggestion(String oldSuggestion) {
    this.oldSuggestion = oldSuggestion;
  }


  public String getResult() {
    return result;
  }

  public void setResult(String result) {
    this.result = result;
  }


  public String getNewProblem() {
    return newProblem;
  }

  public void setNewProblem(String newProblem) {
    this.newProblem = newProblem;
  }

}
