import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.sass']
})
export class ReviewComponent implements OnInit {

  constructor() { }

  showCarouselOne() {
    const two = document.getElementById('carouselTwo');
    const one = document.getElementById('carouselOne');
    if (one.style.display === 'none' || two.style.display === 'block') {
      one.style.display = 'block';
      two.style.display = 'none';
    }
  }

  showCarouselTwo() {
    const one = document.getElementById('carouselOne');
    const two = document.getElementById('carouselTwo');
    if (two.style.display === 'none' || one.style.display === 'block') {
      one.style.display = 'none';
      two.style.display = 'block';
    }
  }

  ngOnInit() {
  }

}
