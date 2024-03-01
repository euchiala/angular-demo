import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Member } from 'src/model/Member';
import { GLOBAL } from '../app-config';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MemberServiceService } from '../member-service.service';

import {MatTableDataSource} from '@angular/material/table';

const ELEMENT_DATA: Member[] = GLOBAL._DB.members;

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent {
  constructor(private memberService:MemberServiceService, private router:Router, private dialog:MatDialog){

  }
  displayedColumns: string[] = ['ID', 'Cin', 'Name', 'CV','DateCreation','Type','actionUpdate'];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(this.memberService.tab);
  
  deleteMember(id:String): void{
    
    const diaLogRef = this.dialog.open(ConfirmDialogComponent,{});
    diaLogRef.afterClosed().subscribe((res)=>{
      if(res)
        this.memberService.deleteMemberByID(id).then(()=>{this.fetchDataSource()})
    })
      
  }
  fetchDataSource():void{
    this.memberService.getAllMembers().then((result)=>(this.dataSource.data = result));
  }
  //this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
