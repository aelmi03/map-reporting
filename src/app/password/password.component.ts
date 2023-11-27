import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Output } from '@angular/core';
import {EventEmitter} from '@angular/core';


interface HashifyResponse {
  Digest:string;
}
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  @Output() result:EventEmitter<boolean> = new EventEmitter();
  password:string = "";
  showWarningText:boolean = false;
  constructor(private httpClient:HttpClient) { }
  checkPassword(){
    this.httpClient.get<HashifyResponse>(`https://api.hashify.net/hash/md5/hex?value=${this.password}`).subscribe(
      (response:HashifyResponse ) => {
        if(response.Digest === "fcab0453879a2b2281bc5073e3f5fe54"){
          this.result.emit(true)
        }
        else{
          this.showWarningText= true;
        }
      }
    )
  }
  close(){
    this.result.emit(false);
  }
}
