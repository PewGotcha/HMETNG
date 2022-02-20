import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {

  url: string = 'https://ahofg4p0ai.execute-api.eu-west-2.amazonaws.com/Records/getalldata'
  body: string = '{"TableName": "Members","ReturnConsumedCapacity": "TOTAL"}'

  constructor(private http: HttpClient, _auth: AuthService) { }

  ngOnInit(): void {
  }

  bits: any[] = []

  getData() {

    this.http.post(this.url, this.body).subscribe((data: any) => {

      console.log(JSON.stringify(data))
      this.bits = data.Items
    }, (error) => {
      alert('Error, see console')
      console.log(error)
    });

    console.log('results' + this.bits)
  }


}
