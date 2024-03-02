import {
  AUTH_TOKEN,
  CATEGORY_LIST,
  CURRENT_LAT_LONG,
  DISCOUNT_LIST,
  COUPON,
  GET_PRICE_LIST,
  LOADING,
  ORIENTATION,
  PRIVACY_POLICY,
  RESET_NAV,
  SERVICE_LIST,
  USER_DATA,
  USER_ID,
  ABOUS_US,
  FAQS,
} from '../types';

const initialState = {
  serviceList: null,
  categoryList: null,
  loading: false,
  privacyPolicy: null,
  discountList: null,
  couponList: null,
  currentLatLong: null,
  priceList: null,
  aboutUs: null,
  faqs: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.payload,
      };
    case SERVICE_LIST:
      return {
        ...state,
        serviceList: action.payload,
      };
    case DISCOUNT_LIST:
      return {
        ...state,
        discountList: action.payload,
      };
      case COUPON:
        return {
          ...state,
          couponList: action.payload,
        };
    case PRIVACY_POLICY:
      return {
        ...state,
        privacyPolicy: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case CURRENT_LAT_LONG:
      return {
        ...state,
        currentLatLong: action.payload,
      };
    case GET_PRICE_LIST:
      return {
        ...state,
        priceList: action.payload,
      };
      case ABOUS_US:
        return {
          ...state,
          aboutUs: action.payload,
        };
        case FAQS:
          return {
            ...state,
            faqs: action.payload,
          };
    default:
      return state;
  }
};
