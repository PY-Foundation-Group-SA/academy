import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../interfaces/review.interface';

@Component({
  selector: 'app-company-testimonial',
  templateUrl: './company-testimonial.component.html',
  styleUrls: ['./company-testimonial.component.scss'],
})
export class CompanyTestimonialComponent implements OnInit {
  @Input() review: Review = {
    imageUrl: '../../../../assets/images/testimonials/buuk.png',
    text: 'Was uns an lenne.Tech und der Akademie besonders beeindruckt hat, ist die Effektivität in der Umsetzung. Die natürliche Auslese beim Durchlaufen der Akademie sorgt für den höchstmöglichen Eignungsgrad der Bewerber*innen. Wir haben uns so nicht nur etliche Stunden Aufwand bei der Evaluierung von Bewerbern gespart, sondern auch jede Menge Nerven beim Onboarding.',
    reviewerTitle: 'Christopher Klein & Jens Helbig',
    reviewerSubtitle: 'Gründer der Buuk GmbH',
  };

  constructor() {}

  ngOnInit(): void {}
}
