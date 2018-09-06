import com.utils.GuidUtil;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.List;

public class Readsheet {

    static XSSFRow row;
    static XSSFRow row1;
    static Cell cell;
    static Cell cell1;

    public static void main(String[] args) throws Exception
    {
        /**
         * Course表数据插入
         */

        //insertCourse("excel\\2009~2016学年-课程支撑矩阵.xlsx");
        //insertCourse("excel\\2016~2018学年-课程支撑矩阵.xlsx");

        /**
         * IndexPoint表数据的插入
         */

        //insertIndexPoint("excel\\2009~2016学年-课程支撑矩阵.xlsx");
       // insertIndexPoint("excel\\2016~2018学年-课程支撑矩阵.xlsx");

        /**
         *RelatedIndexPointCourse表数据的插入
         */

       // insertIndexPoint_Course("excel\\2009~2016学年-课程支撑矩阵.xlsx");
       // insertIndexPoint_Course("excel\\2016~2018学年-课程支撑矩阵.xlsx");


        /**
         * Student 和 StudentScore表的插入
         */

        insertStudent_Score("excel\\2009~2011学年-应用系统开发实践.xlsx");

    }

    public static void insertCourse(String pathname) throws Exception
    {
        FileInputStream fileInputStream = new FileInputStream(new File(pathname));
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);
        XSSFSheet sheet = workbook.getSheetAt(0);

        List<String> courses = new ArrayList<>();
        //年份
        List<String> years = new ArrayList<>();
        years.add(pathname.substring(6,10));
        years.add(pathname.substring(11,15));
        int yearStart = Integer.parseInt(years.get(0));
        int yearEnd = Integer.parseInt(years.get(1));

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

        //课程循环
        for (String name:courses
             ) {
            //年份循环
            for(int y=yearStart;y<yearEnd;y++) {
                String id = GuidUtil.getGuid();
                System.out.println("INSERT INTO Course(id,name,description,year) VALUES(\"" + id + "\",\"" + name + "\",\"\",\"" + y + "\");");
            }
        }
    }

    public static void insertIndexPoint(String pathname) throws Exception
    {

        FileInputStream fileInputStream = new FileInputStream(new File(pathname));
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);
        XSSFSheet sheet = workbook.getSheetAt(0);

        //表格第4行是指标点
        row = sheet.getRow(3);

        //年份
        List<String> years = new ArrayList<>();
        years.add(pathname.substring(6,10));
        years.add(pathname.substring(11,15));
        int yearStart = Integer.parseInt(years.get(0));
        int yearEnd = Integer.parseInt(years.get(1));

        for(int i = 1; i < row.getLastCellNum() - 4; i++)
        {
            String id = GuidUtil.getGuid();

            Cell cell = row.getCell(i);
            if(cell.getCellType() != Cell.CELL_TYPE_BLANK)
            {
                String delimeter = " ";//分隔符是空格
                String[] sArray = cell.getStringCellValue().split(delimeter);
                //System.out.println(sArray[0]);
                //System.out.println(sArray[1]);

                double index = Double.parseDouble(sArray[0]);
                int indexrequirement = (int) index;

                String point = sArray[0];

                String description = sArray[1];

                System.out.println("INSERT INTO IndexPoint VALUES(\""+ id + "\",\"" + indexrequirement + "\",\"" + point + "\",\"" + yearStart + "\",\""+yearEnd + "\",\""+description+"\");" );

            }
        }
    }

    public static void insertIndexPoint_Course(String pathname) throws Exception
    {
        FileInputStream fileInputStream = new FileInputStream(new File(pathname));
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);
        XSSFSheet sheet = workbook.getSheetAt(0); //程度矩阵
        XSSFSheet sheet1 = workbook.getSheetAt(1); //系数矩阵

        //表格第4行是指标点
        row = sheet.getRow(3);        //指标点序列
        List<String> point = new ArrayList<>();
        for(int i = 0; i < row.getLastCellNum() - 4; i++)
        {
            Cell cell = row.getCell(i);
            String delimeter = " ";//分隔符是空格
            String[] sArray = cell.getStringCellValue().split(delimeter);
            point.add(sArray[0]);
        }
//        for (int i = 0; i < point.size();i++
//             ) {
//            System.out.println(point.get(i));
//        }

        //年份
        List<String> years = new ArrayList<>();
        years.add(pathname.substring(6,10));
        years.add(pathname.substring(11,15));
        int yearStart = Integer.parseInt(years.get(0));
        int yearEnd = Integer.parseInt(years.get(1));

        int add = 0;
        for (int i =  4 ; i <= sheet.getLastRowNum() - 4;i++)
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
                    for(int y=yearStart;y<yearEnd;y++) {
                        String id = GuidUtil.getGuid();
                        System.out.println("INSERT INTO RelatedIndexPointCourse(id,indexPointId,courseId,supportFactor,supportDegree) SELECT\"" + id + "\",i.id,c.id," + cell1.getNumericCellValue() + ",\"" + cell.getStringCellValue() + "\" FROM Course c,IndexPoint i WHERE c.name=\"" + row.getCell(0).getStringCellValue() + "\" and c.year=\""+ y + "\" and i.point=\"" + point.get(j) + "\" and i.yearStart<=\""+y+"\" and i.yearEnd>=\""+y+"\";");
                    }
                }
            }

            if (!(row.getCell(j+1) .getNumericCellValue() > 0))
            {
                add--;
            }

        }

    }

    public static void insertStudent_Score(String pathname) throws Exception
    {
        FileInputStream fileInputStream = new FileInputStream(new File(pathname));
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);

        //年份
        List<String> years = new ArrayList<>();
        years.add(pathname.substring(6,10));
        years.add(pathname.substring(11,15));
        int yearStart = Integer.parseInt(years.get(0));
        int yearEnd = Integer.parseInt(years.get(1));

        for(int y=yearStart,k=1;y<yearEnd;y++,k+=2) {
            XSSFSheet sheet = workbook.getSheetAt(k);

            //获取列名
            row1 = sheet.getRow(0);
            List<String> columName = new ArrayList<>();
            String copy="";
            columName.add("");
            columName.add("");
            columName.add("");
            for (int i = 3;i<row1.getLastCellNum();i++)
            {
                cell1 = row1.getCell(i);
                if (cell1.getCellType() == Cell.CELL_TYPE_BLANK)
                {
                    columName.add(copy);
                }
                else
                {
                    copy=cell1.getStringCellValue();
                    columName.add(copy);
                }
            }

//            for (String n:columName
//                 ) {
//                System.out.println(n);
//            }

            for (int i = 4; i < sheet.getLastRowNum(); i++) {

                row = sheet.getRow(i);
                String id = GuidUtil.getGuid();    //随机生成Student表id
                System.out.println("INSERT IGNORE INTO Student VALUES(\"" + id + "\",\"" + row.getCell(0).getStringCellValue() + "\",\"" + row.getCell(1).getStringCellValue() + "\",\"" + row.getCell(2).getStringCellValue() + "\");");

                for (int j= 3;j<row.getLastCellNum();j++) {
                    cell = row.getCell(j);
                    String id1 = GuidUtil.getGuid();    //再次随机生成StudentScore表id
                 System.out.println("INSERT INTO StudentScore SELECT\"" + id1 + "\",C.id,\"" + id + "\",I.id,\"" + columName.get(j) + "\"," +cell.getNumericCellValue()+","+sheet.getRow(2).getCell(j).getNumericCellValue()+" FROM Course C, IndexPoint I WHERE C.name=\"应用系统开发实践\" and C.year=\""+y+"\" and I.point=\""+sheet.getRow(1).getCell(j).getNumericCellValue()+"\" and I.yearStart<=\""+y+"\" and I.yearEnd>=\""+y+"\";");
                }
            }
        }
    }

}
