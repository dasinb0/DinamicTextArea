import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'textarea-pecho';

  constructor(private router: Router) {}

  ngOnInit() {
    // Navega a la ruta del componente TextareaPechoComponent al inicio de la aplicación.
    this.router.navigate(['/textarea-pecho']);
  }
}
