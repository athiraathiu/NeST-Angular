import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  department=[
    {
      id:1,
      Title:"Aerospace & Defence",
      Image:"../../../assets/defence1.jpg",
    },
    {
      id:2,
      Title:"Healthcare & Services",
      Image:"../../../assets/health2.jpg",
    },
    {
      id:3,
      Title:"Industry",
      Image:"../../../assets/industry2.jpg",
    },
    {
      id:4,
      Title:"Mobility",
      Image:"../../../assets/mob.jpg",
    },
    {
      id:5,
      Title:"GIS",
      Image:"../../../assets/gis2.jpg",
    },
    {
      id:6,
      Title:"Banking",
      Image:"../../../assets/banking2.jpg",
    }
  ]

}
