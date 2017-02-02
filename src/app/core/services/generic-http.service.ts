import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GenericHttpService {
  constructor(private http: Http) {}

  public get (url: string, options?: RequestOptions): Observable<Object[]> {
    return this.http.get(url, options)
      .map((res: Response) => res.json())
      .catch((error: any) => {
        return Observable.throw(error.json().error ||
            'Server error');
      });
  }
}
