import java.io.File;
import java.io.FileInputStream;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class Readsupportsheet {
    static XSSFRow row;
    public static void main(String[] args) throws Exception
    {
        FileInputStream fileInputStream = new FileInputStream(new File("课程支撑矩阵.xlsx"));
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);
        XSSFSheet sheet = workbook.getSheetAt(1);

        for(int i = 0; i < sheet.getLastRowNum(); i++)
        {
            row = sheet.getRow(i);

            if(row != null)
            {
                for (int j = 0; j < row.getLastCellNum(); j++)
                {
                    Cell cell = row.getCell(j);
                    switch (cell.getCellType())
                    {
                        case Cell.CELL_TYPE_NUMERIC:
                            System.out.print(cell.getNumericCellValue() + "|");
                            break;
                        case Cell.CELL_TYPE_STRING:
                            if(i == 3 && j  <= 12)
                            {
                                String delimeter = " ";
                                String[] sArray = cell.getStringCellValue().split(delimeter);
                                System.out.print(sArray[0] + '-');
                                System.out.print(sArray[1]);
                            }
                            else
                                System.out.print(cell.getStringCellValue() + "|");
                            break;
                        case Cell.CELL_TYPE_FORMULA:
                            System.out.print(cell.getCellFormula() + "|");
                            break;
                        case Cell.CELL_TYPE_BLANK:
                            System.out.print(" |");
                            break;
                        case Cell.CELL_TYPE_BOOLEAN:
                            System.out.print(cell.getBooleanCellValue() + "|");
                            break;
                        case Cell.CELL_TYPE_ERROR:
                            System.out.print("error");
                    }
                }
            }

            System.out.println();
        }
    }
}
