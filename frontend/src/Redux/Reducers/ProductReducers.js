import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constants/ProductConstants.js";
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../Constants/ProductConstants.js";
import { PRODUCT_SEARCH_FAIL, PRODUCT_SEARCH_REQUEST, PRODUCT_SEARCH_SUCCESS } from "../Constants/ProductConstants.js";

//product list
export const productListReducer = (state = {products:[]},action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return{loading: true, products: []};
        
        case PRODUCT_LIST_SUCCESS:
            return{loading: false, products: action.payload };

        case PRODUCT_LIST_FAIL:
            return{loading: false, error: action.payload };    
 
        default:
            return state;
    }
};


//single product
export const productDetailsReducer = (state = {product:{reviews:[]}},action) => {
    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return{...state,loading: true};
        
        case PRODUCT_DETAILS_SUCCESS:
            return{loading: false, product: action.payload };

        case PRODUCT_DETAILS_FAIL:
            return{loading: false, error: action.payload };    
 
        default:
            return state;
    }
};

//search product
export const productSearchReducer = (state = {products:[]},action) => {
    switch(action.type) {
        case PRODUCT_SEARCH_REQUEST:
            return{loading: true, products: []};
        
        case PRODUCT_SEARCH_SUCCESS:
            return{loading: false, products: action.payload };

        case PRODUCT_SEARCH_FAIL:
            return{loading: false, error: action.payload };    
 
        default:
            return state;
    }
};