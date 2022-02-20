import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  method(value: any){


  
    var jsonBody = '{"TableName": "Members","Item": {"Forname": {"S": "'+value.forename+'"},"Surname": {"S": "'+value.surname+'"},"Email": {"S": "'+value.email+'"},"Phone": {"S": "'+value.phone+'"},"Addr1": {"S": "'+value.addr1+'"},"Addr2": {"S": "'+value.addr2+'"},"Addr3": {"S": "'+value.addr3+'"},"City": {"S": "'+value.city+'"},"County": {"S": "'+value.county+'"},"Postcode": {"S": "'+value.postcode+'"},"Country": {"S": "'+value.country+'"}}}'
    
    console.log(jsonBody);

    this.http.post('https://yskckstqqg.execute-api.eu-west-2.amazonaws.com/HMETNG/formupdate', jsonBody).subscribe((data: any) => {

      console.log(JSON.stringify(data))
      
    }, (error) => {
      alert('Error, see console')
      console.log(error)
    });

    alert("Submitted!");
    window.location.href = 'http://www.hmetng.org.uk/';
  }


}
