import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css'],
})
export class CarousalComponent implements OnInit {
  constructor() {}
  //In component use @ViewChild to get carousel reference then import NgbCarousel
  images!: Array<string>;
  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;

  @ViewChild('mycraousel') carousel!: NgbCarousel;

  ngOnInit(): void {
    this.images = [944, 1011, 984].map(
      (n) => `https://picsum.photos/id/${n}/1366/600`
    );
  }
  onSlide(slideEvent: NgbSlideEvent) {
    console.log(slideEvent.source);
    console.log(NgbSlideEventSource.ARROW_LEFT);
    console.log(slideEvent.paused);
    console.log(NgbSlideEventSource.INDICATOR);
    console.log(NgbSlideEventSource.ARROW_RIGHT);
  }
  startCarousel() {
    this.carousel.cycle();
  }

  pauseCarousel() {
    console.log('paused');
    console.log(this.carousel);
    this.carousel.pause();
  }

  moveNext() {
    this.carousel.next();
  }

  getPrev() {
    this.carousel.prev();
  }

  goToSlide(slide: string) {
    this.carousel.select(slide);
  }
}
