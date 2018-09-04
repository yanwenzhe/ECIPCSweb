import com.entity.Course;
import com.entity.IndexPoint;
import com.utils.GuidUtil;
import net.sf.ehcache.transaction.xa.EhcacheXAException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Readsupportsheet {

    static XSSFRow row;
    static Cell cell;

    public static List<String> getAllCourse() throws Exception
    {
        List<String> courses = new ArrayList<>();

        FileInputStream fileInputStream = new FileInputStream(new File("excel\\课程支撑矩阵.xlsx"));
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

        FileInputStream fileInputStream = new FileInputStream(new File("excel\\课程支撑矩阵.xlsx"));
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
        insertIndexPoint();

    }
}
