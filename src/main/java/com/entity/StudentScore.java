package com.entity;

public class StudentScore {

  private String id;
  private String courseId;
  private String studentId;
  private String indexPointId;
  private String columName;
  private double score;
  private double fullScore;

  public StudentScore() {
  }

  public StudentScore(String id, String courseId, String studentId, String indexPointId, String columName, double score, double fullScore) {
    this.id = id;
    this.courseId = courseId;
    this.studentId = studentId;
    this.indexPointId = indexPointId;
    this.columName = columName;
    this.score = score;
    this.fullScore = fullScore;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }


  public String getCourseId() {
    return courseId;
  }

  public void setCourseId(String courseId) {
    this.courseId = courseId;
  }


  public String getStudentId() {
    return studentId;
  }

  public void setStudentId(String studentId) {
    this.studentId = studentId;
  }


  public String getIndexPointId() {
    return indexPointId;
  }

  public void setIndexPointId(String indexPointId) {
    this.indexPointId = indexPointId;
  }


  public String getColumName() {
    return columName;
  }

  public void setColumName(String columName) {
    this.columName = columName;
  }


  public double getScore() {
    return score;
  }

  public void setScore(double score) {
    this.score = score;
  }


  public double getFullScore() {
    return fullScore;
  }

  public void setFullScore(double fullScore) {
    this.fullScore = fullScore;
  }

}
