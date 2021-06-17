import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OwnerService } from 'src/api/owner.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {
  owners: any = [];

  constructor(private ownerService: OwnerService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getOwnersData();
  }

  getOwnersData() {
    this.ownerService.getAllOwners().subscribe(result => {
      this.owners = result;
    })
  }

  editOwner(id: any): void {
    this.router.navigate(['edit-owner/', { id: id }])
  }

  addNewOwner(): void {
    this.router.navigate(['add-new-owner/'])
  }

  deleteOwner(owner: any): void {
    /* this.ownerService.deleteOwner(owner._id).subscribe({
      next: result => {
        this.toastr.success('Successfully Deleted', owner.name)
        this.getOwnersData();
      },
      error: error => {
        console.log("error")
      }
    }) */
  }

}
