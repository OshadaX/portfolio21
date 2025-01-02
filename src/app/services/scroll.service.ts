import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private activeSection = new BehaviorSubject<string>('home');
  activeSection$ = this.activeSection.asObservable();

  constructor(private ngZone: NgZone) {
    this.initIntersectionObserver();
  }

  private initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.ngZone.run(() => {
            this.activeSection.next(entry.target.id);
          });
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
  }
}