import { CommonResponse } from '../../shared/models/common-response';

export interface Restaurant {
  restaurantCateringDeliveryFee: number;
  restaurantCity: number;
  restaurantCloseTime: string;
  restaurantCountry: string;
  restaurantDiscount: number;
  restaurantEmail: string;
  restaurantFaxNumber: number;
  restaurantId: number;
  restaurantIndividualDeliveryDee: number;
  restaurantLogo: string;
  restaurantMinimumAmount: number;
  restaurantName: string;
  restaurantOpenDays: string;
  restaurantOpenTime: string;
  restaurantPhone1: number;
  restaurantPhone2: number;
  restaurantState: string;
  restaurantStreet1: string;
  restaurantStreet2: string;
  restaurantTextPhoneNumber: number;
  restaurantTypeName: string;
  restaurantZipCode: number;
}

export interface GetRestaurantsResponse {
  obj_response: CommonResponse;
  result: Restaurant [];
}