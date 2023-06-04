import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSubject = new Subject<string>();

  get scrollObservable(): Observable<string> {
    return this.scrollSubject.asObservable();
  }

  scrollToElement(elementId: string): void {
    this.scrollSubject.next(elementId);
  }
}
