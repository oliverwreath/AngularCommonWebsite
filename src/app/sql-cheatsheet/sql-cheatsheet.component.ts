import {Component, OnInit} from '@angular/core';
import {OutputType} from '../csv-converter/csvEnum';
import {SQLType} from './sql';

@Component({
  selector: 'app-sql-cheatsheet',
  templateUrl: './sql-cheatsheet.component.html',
  styleUrls: ['./sql-cheatsheet.component.css']
})
export class SqlCheatsheetComponent implements OnInit {
  inputText: string = '';
  outputText: string = '';
  private static DML_selectExample: string = 'The SQL SELECT Statement\n' +
    'The SELECT statement is used to select data from a database.\n' +
    'The data returned is stored in a result table, called the result-set.\n' +
    '\n' +
    'SELECT Syntax\n' +
    'SELECT column1, column2, ...\n' +
    'FROM table_name;\n' +
    '\n' +
    'SELECT * FROM Products\n' +
    'WHERE Price BETWEEN 10 AND 20\n' +
    '\n' +
    'SQL Server / MS Access Syntax:\n' +
    'SELECT TOP number|percent column_name(s)\n' +
    'FROM table_name\n' +
    'WHERE condition;\n' +
    '\n' +
    'MySQL Syntax:\n' +
    'SELECT DISTINCT column_name(s)\n' +
    'FROM table_name\n' +
    'WHERE condition\n' +
    'LIMIT number;';
  private static DML_insertExample: string = 'The INSERT INTO statement is used to insert new records in a table.\n' +
    'INSERT INTO Syntax\n' +
    'It is possible to write the INSERT INTO statement in two ways:\n' +
    '1. Specify both the column names and the values to be inserted:\n' +
    'INSERT INTO table_name (column1, column2, column3, ...)\n' +
    'VALUES (value1, value2, value, ...);\n' +
    '2. If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query. However, make sure the order of the values is in the same order as the columns in the table. Here, the INSERT INTO syntax would be as follows:\n' +
    'INSERT INTO table_name\n' +
    'VALUES (value1, value2, value, ...);\n' +
    '\n' +
    'INSERT INTO table_name (column_list)\n' +
    'VALUES\n' +
    '    (value_list_1),\n' +
    '    (value_list_2),\n' +
    '    ...\n' +
    '    (value_list_n);\n' +
    '\n' +
    'e.g.\n' +
    'INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)\n' +
    'VALUES (\'Cardinal\',\'Tom B. Erichsen\',\'Skagen 21\',\'Stavanger\',\'4006\',\'Norway\');\n' +
    '\n' +
    'INSERT INTO Customers (CustomerName, City, Country)\n' +
    'SELECT SupplierName, City, Country FROM Suppliers;';
  private static DML_updateExample: string = 'The SQL UPDATE Statement\n' +
    'The UPDATE statement is used to modify the existing records in a table.\n' +
    '\n' +
    'UPDATE Syntax\n' +
    'UPDATE table_name\n' +
    'SET column1 = value1, column2 = value2, ...\n' +
    'WHERE condition;\n' +
    '\n' +
    'e.g.\n' +
    'UPDATE Customers\n' +
    'SET ContactName=\'Alfred Schmidt\', City=\'Frankfurt\'\n' +
    'WHERE CustomerID=1;\n' +
    '\n' +
    'PS: Be careful when updating records. If you omit the WHERE clause, ALL records will be updated!';
  private static DML_deleteExample: string = 'The SQL DELETE Statement\n' +
    'The DELETE statement is used to delete existing records in a table.\n' +
    '\n' +
    'DELETE Syntax\n' +
    'DELETE FROM table_name WHERE condition;\n' +
    '\n' +
    'e.g.\n' +
    'DELETE FROM Customers WHERE CustomerName=\'Alfreds Futterkiste\';';
  private static DDL_tableExample: string = 'CREATE TABLE Persons (\n' +
    '    PersonID int,\n' +
    '    name varchar(255),\n' +
    ');\n' +
    '\n' +
    'CREATE TABLE TestTable AS\n' +
    'SELECT customername, contactname\n' +
    'FROM customers;\n' +
    '\n' +
    'DROP TABLE table_name;\n' +
    '\n' +
    'TRUNCATE TABLE table_name;\n' +
    '\n' +
    '# Add column: \n' +
    'ALTER TABLE Customers\n' +
    'ADD colName float NULL\n' +
    '\n' +
    '# Remove column: \n' +
    'ALTER TABLE tableName\n' +
    'DROP COLUMN colName;\n' +
    '\n' +
    'ALTER TABLE table_name\n' +
    'ALTER COLUMN column_name datatype;';
  private static DDL_databaseExample: string = 'CREATE DATABASE databasename;\n' +
    '\n' +
    'DROP DATABASE testDB;\n' +
    '\n' +
    'BACKUP DATABASE testDB\n' +
    'TO DISK = \'D:\\backups\\testDB.bak\';\n' +
    '\n' +
    'BACKUP DATABASE testDB\n' +
    'TO DISK = \'D:\\backups\\testDB.bak\'\n' +
    'WITH DIFFERENTIAL;\n';
  private static ZOTHER_functionExample: string = 'SELECT MIN(Price) AS SmallestPrice\n' +
    'FROM Products; ';
  sqlType: SQLType = SQLType.DML_SELECT;
  outputType: OutputType = OutputType.Array;
  isFirstColumnNotEmpty: boolean = true;
  SQLTypes = SQLType ;

  constructor() { }

  ngOnInit(): void {
    this.onExample();
  }

  test() {
    console.log('testing logs: ')
    console.log(this.sqlType);
    console.log(this.outputType);
  }

  onClear() {
    this.inputText = '';
    this.outputText = '';
  }

  onExample() {
    this.inputText = '';
    console.log(this.sqlType);
    if (this.sqlType == SQLType.DML_SELECT) {
      this.inputText = SqlCheatsheetComponent.DML_selectExample;
    } else if (this.sqlType == SQLType.DML_INSERT) {
      this.inputText = SqlCheatsheetComponent.DML_insertExample;
    } else if (this.sqlType == SQLType.DML_UPDATE) {
      this.inputText = SqlCheatsheetComponent.DML_updateExample;
    } else if (this.sqlType == SQLType.DML_DELETE) {
      this.inputText = SqlCheatsheetComponent.DML_deleteExample;
    } else if (this.sqlType == SQLType.DDL_TABLE) {
      this.inputText = SqlCheatsheetComponent.DDL_tableExample;
    } else if (this.sqlType == SQLType.DDL_DATABASE) {
      this.inputText = SqlCheatsheetComponent.DDL_databaseExample;
    } else {
      this.inputText = SqlCheatsheetComponent.ZOTHER_functionExample;
    }
  }

  onClearRight() {
    this.outputText = '';
  }

  onChange($event: any) {
    this.onExample();
  }
}
