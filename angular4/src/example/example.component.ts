import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { DataService } from '../app/data.service';  // Import DataService

@Component({
  selector: 'app-example',
  standalone: true,  // Standalone component
  imports: [CommonModule],  // Import CommonModule here
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  data: any[] = [];  // Array to store the fetched data
  errorMessage: string = '';  // To store any error messages
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchData();  // Fetch data when the component initializes
  }

  // Method to fetch data using the service
  fetchData(): void {
    this.dataService.getData().subscribe({
      next: (response) => {
        this.data = response;  // Assign the fetched data to the component property
      },
      error: (error) => {
        this.errorMessage = 'Failed to load data: ' + error.message;  // Handle errors
      }
    });
  }
}
