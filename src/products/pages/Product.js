import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/http-hook';

import Navbar from "../../shared/components/Navigation/Navbar";
import FloatingBar from "../../shared/components/Navigation/FloatingBar";
import CategoriesComponent from "../../shared/components/UIElements/Categories";

import ProductDetail from '../components/ProductDetail';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';


const Product = () => {
  const productId = useParams().productId;
  const [loadedItem, setLoadedItem] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const responseData = await sendRequest(process.env.REACT_APP_API_HOST);
        const products = await responseData[0]['data'];
        const searchItem = await products['productPromo'].filter((item) => {
          return item.id === productId
        })
        setLoadedItem(searchItem[0] || null);
      } catch (err) {}
    };
    fetchProduct();
  }, [sendRequest, productId]);

  if(loadedItem) {
    return (
      <>
        <div>
          <Navbar />
          <CategoriesComponent/>
          {isLoading && (
            <div className="text-center flex justify-center content-center">
              <LoadingSpinner />
            </div>
          )}
          {!isLoading && loadedItem &&
            <div className="container max-w-xl mx-auto">
              <div className="px-4 mb-16 text-gray-800 leading-normal w-">
                <ProductDetail
                  key={loadedItem.id}
                  id={loadedItem.id}
                  title={loadedItem.title}
                  price={loadedItem.price}
                  loved={loadedItem.loved}
                  description={loadedItem.description}
                  image={loadedItem.imageUrl}
                />
              </div>
            </div>
          }
        <FloatingBar/>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <Navbar />
          <CategoriesComponent/>
          {isLoading && (
            <div className="text-center flex justify-center content-center">
              <LoadingSpinner />
            </div>
          )}
          {!isLoading &&
            <div className="container max-w-xl mx-auto">
              <ErrorModal error={error} onClear={clearError} />
                <div className="px-4 mb-16 text-gray-800 leading-normal w-">
                  Nothing
                </div>
            </div>
          }
        <FloatingBar/>
        </div>
      </>
    );
  }
}

export default Product;
