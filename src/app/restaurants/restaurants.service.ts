import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';
import { ErrorHandler } from '../app.error-handler';
import { USE_API } from '../app.api';


@Injectable()
export class RestaurantsService {

    constructor(private http: Http){}

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${USE_API}/restaurants`)
                .map(response => response.json())
                .catch(ErrorHandler.handleError);
    }

    restaurantById(id: string): Observable<Restaurant>  {
        return this.http.get(`${USE_API}/restaurants/${id}`)
                .map(response => response.json())
                .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${USE_API}/restaurants/${id}/reviews`)
                .map(response => response.json())
                .catch(ErrorHandler.handleError)
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get(`${USE_API}/restaurants/${id}/menu`)
                .map(response => response.json())
                .catch(ErrorHandler.handleError)
    }
}