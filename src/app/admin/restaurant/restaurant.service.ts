import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { baseURL } from '../../shared/constants/base-url';
import {
  GetRestaurantsResponse,
  Restaurant,
  GetRestaurantTypesResponse,
  RestaurantType,
  GetRestaurantMenusResponse,
  RestaurantMenu,
  GetRestaurantMenuTypesResponse,
  RestaurantMenuType } from './restaurant';
import { CommonObjResponse } from '../../shared/models/common-response';

@Injectable()
export class RestaurantService {

  private getRestaurantsUrl = baseURL + 'restaurants/listing';
  private getRestaurantUrl = baseURL + 'restaurants/view/';
  private updateRestaurantUrl = baseURL + 'restaurants/update/';
  private getRestaurantTypesUrl = baseURL + 'restaurants/type/list';
  private getRestaurantMenusUrl = baseURL + 'restaurants/menu/list/';
  private getRestaurantMenuTypesUrl = baseURL + 'restaurants/menu_type/list';
  private createRestaurantUrl = baseURL + 'restaurants/create';
  private createRestaurantTypeUrl = baseURL + 'restaurants/type/create';
  private createRestaurantMenuUrl = baseURL + 'restaurants/menu/create';
  private createRestaurantMenuTypeUrl = baseURL + 'restaurants/menu_type/create';
  private deleteRestaurantTypeUrl = baseURL + 'restaurants/type/delete';

  constructor(private httpClient: HttpClient) { }

  getRestaurants() {
    return this.httpClient
      .post<GetRestaurantsResponse>(this.getRestaurantsUrl, {})
      .map(res => {
        return res;
      });
  }

  getRestaurant(restaurantId) {
    return this.httpClient
      .post<GetRestaurantsResponse>(this.getRestaurantUrl + restaurantId, {})
      .map(res => {
        return res;
      });
  }

  updateRestaurant(restaurant: Restaurant) {
    return this.httpClient
      .post<GetRestaurantsResponse>(this.updateRestaurantUrl, restaurant)
      .map(res => {
        return res;
      });
  }

  getRestaurantTypes() {
    return this.httpClient
      .post<GetRestaurantTypesResponse>(this.getRestaurantTypesUrl, {})
      .map(res => {
        return res;
      });
  }

  getRestaurantMenus(restaurantId: number) {
    return this.httpClient
      .post<GetRestaurantMenusResponse>(this.getRestaurantMenusUrl + restaurantId, {})
      .map(res => {
        return res;
      });
  }

  getRestaurantMenuTypes() {
    return this.httpClient
      .post<GetRestaurantMenuTypesResponse>(this.getRestaurantMenuTypesUrl, {})
      .map(res => {
        return res;
      });
  }

  createRestaurant(restaurant: Restaurant) {
    return this.httpClient
      .post<CommonObjResponse>(this.createRestaurantUrl, restaurant)
      .map(res => {
        return res;
      });
  }

  createRestaurantType(restaurantType: RestaurantType) {
    return this.httpClient
      .post<CommonObjResponse>(this.createRestaurantTypeUrl, restaurantType)
      .map(res => {
        return res;
      });
  }

  deleteRestaurantType(restaurantType: RestaurantType) {
    return this.httpClient
      .post<CommonObjResponse>(this.createRestaurantTypeUrl, restaurantType)
      .map(res => {
        return res;
      });
  }

  createRestaurantMenu(restaurantMenu: RestaurantMenu) {
    return this.httpClient
      .post<CommonObjResponse>(this.createRestaurantMenuUrl, restaurantMenu)
      .map(res => {
        return res;
      });
  }

  createRestaurantMenuType(restaurantMenuType: RestaurantMenuType) {
    return this.httpClient
      .post<CommonObjResponse>(this.createRestaurantMenuTypeUrl, restaurantMenuType)
      .map(res => {
        return res;
      });
  }
}
