import { Component, OnInit } from '@angular/core';
import { Review } from '../../../modules/core/interfaces/review.interface';

@Component({
  selector: 'app-intern-page',
  templateUrl: './intern-page.component.html',
  styleUrls: ['./intern-page.component.scss'],
})
export class InternPageComponent implements OnInit {
  title = 'Du suchst noch ein Praktikum?';
  subtitle =
    'Wir bieten Schülern, Studenten oder Webinteressierten die Möglichkeit, Web- und Appentwicklung in der Praxis zu erleben und mitzugestalten.\n\n Lerne in der Akadmie die Grundlagen, setze dein eigenes Projekt um und arbeite mit an unseren Projekten.';
  imageUrl = '../../assets/images/entry-point-images/praktikant.svg';
  review: Review = {
    imageUrl: '../../../assets/images/people-images/daniel_review.jpg',
    text: 'Im Praktikum habe ich einen sehr guten Einblick in den Beruf eines Webentwicklers bekommen. Ich bekam die Chance, an einem eigenen Projekt zu arbeiten, bei dem mich die Mitarbeiter täglich unterstützt haben. Auch bei unternehmensinternen Projekten durfte ich mitentwickeln und meine Meinung einbringen. Das Arbeiten im Team war super angenehm und offen, gerade vor Ort im Büro. Mir hat es sehr viel Spaß gemacht und ich konnte viele Erfahrungen sammeln.',
    reviewerTitle: 'Daniel König',
    reviewerSubtitle: 'Praktikant - lenne.Tech GmbH',
  };

  constructor() {}

  sendApplication(): void {
    window.open('mailto:info@lenne.tech');
  }

  ngOnInit(): void {}
}
