import {TemplateRef, ViewChild} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild('readOnlyTemplate')readOnlyTemplate : TemplateRef < any >;
  @ViewChild('editTemplate')editTemplate : TemplateRef < any >;

  users: User[];
  user: User;
  selUser: User;

  isNewRecord : boolean;
  statusMessage:string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
   console.log("ngonintit");
   this.getUser();
  }

   getUser() {
   
    //this.memberService.getMember(1).subscribe(m => this.member1=m);
    //console.log(this.member1);

    this.userService.getUser(1).subscribe(user => this.user = user);    
    console.log(this.user);
  }

  private loadUsers()
  {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  addUser() {
    this.selUser =new User(); 

    this.selUser.title ='';
    this.selUser.firstName='';
    this.selUser.lastName ='';
    this.selUser.email='';
    this.selUser.phone='';

    this.users.push(this.selUser);

    this.userService.getUsers().subscribe(u1=> console.log(u1) );
    
    this.isNewRecord = true;    
}

    editUser(user : User) {
        this.selUser = user;
    }

    loadTemplate(user : User) {
        if (this.selUser && this.selUser.id == user.id) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }
         
    }

    saveUser() {
         if(this.isNewRecord){
         this.userService.addUser(this.selUser).subscribe(() => {                
                this.statusMessage = 'User Added Successfully.',
                 this.loadUsers();
            });
            this.isNewRecord=false;
            this.selUser = null;
           
        }else{
             this.userService.updateUser(this.selUser).subscribe(() => {
                this.statusMessage = 'User Updated Successfully.',
                 this.loadUsers();
            });
            this.selUser = null;
            
        }
       
    }

    cancel() {
        this.selUser = null;
    }

    deleteUser(id:number){
         this.userService.deleteUser(id).subscribe(() => {
                this.statusMessage = 'User Deleted Successfully.',
                 this.loadUsers();
            });     
    }

}
