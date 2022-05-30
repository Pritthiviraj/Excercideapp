import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-coin-component',
  templateUrl: './coin-component.component.html',
  styleUrls: ['./coin-component.component.scss']
})
export class CoinComponentComponent implements OnInit {
  resultKey:any;
  result:any
coinForm:FormGroup;
  constructor(private http: HttpClient) {
    this.coinForm = new FormGroup({
      id : new FormControl(''),
      name:new  FormControl(''),
      coin:new  FormControl(''),
    })
   }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/coin/retrievecoins").subscribe(
        res=>{
          this.resultKey = Object.keys(res);
          this.result = res;
        })
  }
  submit(form:FormGroup){
    let id = form.controls['id'].value;
    let name = form.controls['name'].value;
    let coin = form.controls['coin'].value;
    this.http.post("http://localhost:8080/coin/savecoin",{"id":id,"name":name,"coin":coin}).subscribe(
      res =>{
        console.log(res);
        this.http.get("http://localhost:8080/coin/retrievecoins").subscribe(
        res=>{
          this.resultKey = Object.keys(res);
          this.result = res;
        })
      });
    console.log(form);
  }

}
