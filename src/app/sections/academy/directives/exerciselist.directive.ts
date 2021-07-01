import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[exerciselist]' })
export class ExerciseListDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.classList.add('exerciselist');
  }

  @HostListener('click') onClick(): void {
    const classList = this.el.nativeElement.classList.value;
    if (classList.includes('exercise-done')) {
      this.el.nativeElement.classList.remove('exercise-done');
    } else {
      this.el.nativeElement.classList.add('exercise-done');
    }
  }
}
