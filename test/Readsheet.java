import com.entity.Course;
import com.entity.IndexPoint;
import com.utils.GuidUtil;
import net.sf.ehcache.transaction.xa.EhcacheXAException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.internal.ExactComparisonCriteria;

import java.io.File;
import java.io.FileInputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Readsheet {

    static XSSFRow row;
    static XSSFRow row1;
    static Cell cell;
    static Cell cell1;

    public static void main(String[] args) throws Exception
    {
        /**
         * 读取insert Course语句部分
         */
//        String description = "";
//        String year = new String(new SimpleDateFormat("yyyy").format(new Date()));
//
//        List<String> courses = new ArrayList<String>();
//        courses = getAllCourse();
//        for (String coursename:courses
//             ) {
//            String id = GuidUtil.getGuid();
//            Course course = new Course(id,coursename,description,year);
//            System.out.println("INSERT INTO Course(id,name,description,year) VALUES(\"" + id + "\",\"" + coursename + "\",\"" + description + "\",\"" + year + "\");");
//            //添加数据到数据库
//        }


        /**
         * IndexPoint表数据的插入
         */
       // insertIndexPoint();

        /**
         *RelatedIndexPointCourse表数据的插入
         */
        insertIndexPointCourse();


        /**
         * Student 和 StudentScore表的插入
         */
       // insertStudent_Score(1);
       // insertStudent_Score(3);

        //INSERT INTO StudentScore SELECT "123",C.id,S.id,I.id,"软件系统",4.5,5 FROM Course C,Student S,IndexPoint I WHERE C.name="互联网应用开发基础训练" and S.schoolNumber="20091826" and I.point="1.1";

    }

    public static void insertStudent_Score(int index) throws Exception
    {
        FileInputStream fileInputStream = new FileInputStream(new File("excel\\《应用系统开发实践》2012~2016学年.xlsx"));
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);
        XSSFSheet sheet = workbook.getSheetAt(index);

        for(int i=4;i<sheet.getLastRowNum();i++)
        {
            row = sheet.getRow(i);
            String id = GuidUtil.getGuid();
            System.out.println("INSERT IGNORE INTO Student VALUES(\""+id+"\",\""+row.getCell(0).getStringCellValue()+"\",\""+row.getCell(1).getStringCellValue()+"\",\""+row.getCell(2).getStringCellValue()+"\");");
        }



    }


    public static List<String> getAllCourse() throws Exception
    {
        List<String> courses = new ArrayList<>();

        FileInputStream fileInputStream = new FileInputStream(new File("excel\\样表-xxxx~xxxx学年课程支撑矩阵.xlsx"));
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);
        XSSFSheet sheet = workbook.getSheetAt(1);

        //读取第一列的所有课程,从第2行开始读，不空则为一门课程
        for (int i= 1 ; i <= sheet.getLastRowNum() - 4; i++)
        {
            row = sheet.getRow(i);

            if(row != null)
            {
                Cell cell = row.getCell(0);
                if (cell.getCellType() != Cell.CELL_TYPE_BLANK)
                {
                    courses.add(cell.getStringCellValue());
                }
                else
                    continue;
            }
        }
        return courses;
    }

    public static void insertIndexPoint() throws Exception
    {

        FileInputStream fileInputStream = new FileInputStream(new File("excel\\样表-xxxx~xxxx学年课程支撑矩阵.xlsx"));
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);
        XSSFSheet sheet = workbook.getSheetAt(1);

        //表格第5行是指标点
        row = sheet.getRow(4);

        String yearStart = "2017";
        String yearEnd = "2019";
        for(int i = 0; i < row.getLastCellNum() - 4; i++)
        {
            String id = GuidUtil.getGuid();

            Cell cell = row.getCell(i);
            if(cell.getCellType() != Cell.CELL_TYPE_BLANK)
            {
                String delimeter = " ";//分隔符是空格
                String[] sArray = cell.getStringCellValue().split(delimeter);
                // System.out.println(sArray[0]);
                //System.out.println(sArray[1]);

                double index = Double.parseDouble(sArray[0]);
                int indexrequirement = (int) index;

                String point = sArray[0];

                String description = sArray[1];

                System.out.println("INSERT INTO IndexPoint VALUES(\""+ id + "\",\"" + indexrequirement + "\",\"" + point + "\",\"" + yearStart + "\",\""+yearEnd + "\",\""+description+"\");" );

            }
        }
    }

    public static void insertIndexPointCourse() throws Exception
    {
        FileInputStream fileInputStream = new FileInputStream(new File("excel\\课程支撑矩阵1.xlsx"));
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);
        XSSFSheet sheet = workbook.getSheetAt(1); //程度矩阵
        XSSFSheet sheet1 = workbook.getSheetAt(0); //系数矩阵

        //表格第5行是指标点
        row = sheet.getRow(4);
        //指标点序列
        List<String> point = new ArrayList<String>();
        for(int i = 0; i < row.getLastCellNum() - 4; i++)
        {
            Cell cell = row.getCell(i);
            String delimeter = " ";//分隔符是空格
            String[] sArray = cell.getStringCellValue().split(delimeter);
            point.add(sArray[0]);
        }
        for (int i = 0; i < point.size();i++
             ) {
            System.out.println(point.get(i));
        }

        int add =0;
        for (int i =  5 ; i <= sheet.getLastRowNum() - 4;i++)
        {
            row = sheet.getRow(i); //程度
            row1 = sheet1.getRow(i+add); //系数

            int j = 1;
            for(; j < row.getLastCellNum() - 4; j++)
            {
                cell = row.getCell(j);
                cell1 = row1.getCell(j);


                if(cell.getCellType() != Cell.CELL_TYPE_BLANK)
                {
                    String id = GuidUtil.getGuid();
                    System.out.println("INSERT INTO RelatedIndexPointCourse(id,indexPointId,courseId,supportDegree,supportFactor) SELECT\""+id+"\",c.id,i.id,\""+cell.getStringCellValue()+"\","+cell1.getNumericCellValue()+" FROM Course c,IndexPoint i WHERE c.name=\""+row.getCell(0).getStringCellValue()+"\" and i.point=\""+point.get(j)+"\";");
                }
            }

            if (!(row.getCell(j+1) .getNumericCellValue() > 0))
            {
                add--;
            }

        }

    }
}
