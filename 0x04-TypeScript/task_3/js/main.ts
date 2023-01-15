/// <reference path="./crud.d.ts"/>
import {RowElement, RowID} from './interface'
import * as CRUD from './crud'


export const  row: RowElement ={
    firstName: 'Guillaume',
    lastName: 'Salva',
};
export const newRowId : RowID = CRUD.insetRow(row)
export const updatedRow : RowElement = {
    ...row, age: 23
}
CRUD.updateRow(newRowId,updatedRow)
CRUD.deleteRow(newRowId)