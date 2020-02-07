import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  status: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
        .subscribe(params => {
      console.log(params); // {order: "popular"}

      this.status = params.status;
      console.log(this.status); // popular
    });
   
  }

}
