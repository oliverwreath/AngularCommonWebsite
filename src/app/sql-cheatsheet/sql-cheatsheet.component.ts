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
  private static selectExample: string = 'SELECT * FROM Products\n' +
    'WHERE Price BETWEEN 10 AND 20';
  private static insertExample: string = 'INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)\n' +
    'VALUES (\'Cardinal\',\'Tom B. Erichsen\',\'Skagen 21\',\'Stavanger\',\'4006\',\'Norway\');\n' +
    '\n' +
    'INSERT INTO Customers (CustomerName, City, Country)\n' +
    'SELECT SupplierName, City, Country FROM Suppliers;';
  private static updateExample: string = 'UPDATE Customers\n' +
    'SET ContactName=\'Alfred Schmidt\', City=\'Frankfurt\'\n' +
    'WHERE CustomerID=1;';
  private static tableExample: string = 'CREATE TABLE Persons (\n' +
    '    PersonID int,\n' +
    '    LastName varchar(255),\n' +
    '    FirstName varchar(255),\n' +
    '    Address varchar(255),\n' +
    '    City varchar(255)\n' +
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
    'ALTER TABLE Customers\n' +
    'ADD Email varchar(255);\n' +
    '\n' +
    'ALTER TABLE table_name\n' +
    'DROP COLUMN column_name;\n' +
    '\n' +
    'ALTER TABLE table_name\n' +
    'ALTER COLUMN column_name datatype;';
  private static databaseExample: string = 'CREATE DATABASE databasename;\n' +
    '\n' +
    'DROP DATABASE testDB;\n' +
    '\n' +
    'BACKUP DATABASE testDB\n' +
    'TO DISK = \'D:\\backups\\testDB.bak\';\n' +
    '\n' +
    'BACKUP DATABASE testDB\n' +
    'TO DISK = \'D:\\backups\\testDB.bak\'\n' +
    'WITH DIFFERENTIAL;\n';
  private static functionExample: string = 'SELECT MIN(Price) AS SmallestPrice\n' +
    'FROM Products; ';
  sqlType: SQLType = SQLType.SELECT;
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
    if (this.sqlType == SQLType.SELECT) {
      this.inputText = SqlCheatsheetComponent.selectExample;
    } else if (this.sqlType == SQLType.INSERT) {
      this.inputText = SqlCheatsheetComponent.insertExample;
    } else if (this.sqlType == SQLType.UPDATE) {
      this.inputText = SqlCheatsheetComponent.updateExample;
    } else if (this.sqlType == SQLType.TABLE) {
      this.inputText = SqlCheatsheetComponent.tableExample;
    } else if (this.sqlType == SQLType.DATABASE) {
      this.inputText = SqlCheatsheetComponent.databaseExample;
    } else {
      this.inputText = SqlCheatsheetComponent.functionExample;
    }
  }

  onClearRight() {
    this.outputText = '';
  }

  onChange($event: any) {
    this.onExample();
  }
}
