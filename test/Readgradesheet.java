import java.io.File;
import java.io.FileInputStream;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class Readgradesheet {
    static XSSFRow row;
    public static void main(String[] args) throws Exception
    {
        FileInputStream fileInputStream = new FileInputStream(new File("excel\\原始成绩.xlsx"));
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);

        //读取第一张sheet
        XSSFSheet sheet = workbook.getSheetAt(0);

        String copyValue = null;

        //循环遍历所有行
        for (int i = 0; i < sheet.getLastRowNum(); i++)
        {
            row = sheet.getRow(i);

            if(row != null)
            {
                //循环遍历所有列
                for (int j = 0; j < row.getLastCellNum();j++)
                {
                    Cell cell = row.getCell(j);
                    switch (cell.getCellType())
                    {
                        case Cell.CELL_TYPE_NUMERIC://数字
                            copyValue = String.valueOf(cell.getNumericCellValue());
                            System.out.print(cell.getNumericCellValue()+"|");
                            break;
                        case Cell.CELL_TYPE_STRING://字符串
                            copyValue = cell.getStringCellValue();
                            System.out.print(cell.getStringCellValue()+"|");
                            break;
                        case Cell.CELL_TYPE_FORMULA://公式
                            System.out.print(cell.getCellFormula()+"|");
                            break;
                        case Cell.CELL_TYPE_BLANK://空值
                            System.out.print(copyValue+"|");
                            break;
                        case Cell.CELL_TYPE_BOOLEAN://boolean
                            System.out.print(cell.getBooleanCellValue());
                            break;
                        case Cell.CELL_TYPE_ERROR://故障
                            System.out.println("error");
                            break;
                    }
                }
            }
            System.out.println();
        }

//        Iterator<Row> rowIterator = sheet.iterator();
//        while (rowIterator.hasNext())
//        {
//            row = (XSSFRow) rowIterator.next();
//            Iterator < Cell > cellIterator = row.cellIterator();
//            while(cellIterator.hasNext())
//            {
//                Cell cell = cellIterator.next();
//                switch (cell.getCellType())
//                {
//                    case Cell.CELL_TYPE_NUMERIC://数字
//                        copyValue = String.valueOf(cell.getNumericCellValue());
//                        System.out.print(cell.getNumericCellValue()+"|");
//                        break;
//                    case Cell.CELL_TYPE_STRING://字符串
//                        copyValue = cell.getStringCellValue();
//                        System.out.print(cell.getStringCellValue()+"|");
//                        break;
//                    case Cell.CELL_TYPE_FORMULA://公式
//                        System.out.print(cell.getCellFormula()+"|");
//                        break;
//                    case Cell.CELL_TYPE_BLANK://空值
//                        System.out.print(copyValue+"|");
//                        break;
//                    case Cell.CELL_TYPE_BOOLEAN://boolean
//                        System.out.print(cell.getBooleanCellValue());
//                        break;
//                    case Cell.CELL_TYPE_ERROR://故障
//                        System.out.println("error");
//                        break;
//                }
//            }
//            System.out.println();
//      }
        fileInputStream.close();
    }
}
