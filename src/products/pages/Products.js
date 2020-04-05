import React, { useEffect, useContext, useState } from "react";
import Navbar from "../../shared/components/Navigation/Navbar";
import Contents from "../components/Contents";
import FloatingBar from "../../shared/components/Navigation/FloatingBar";
import Categories from "../../shared/components/UIElements/Categories";
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';


function Products() {
  const auth = useContext(AuthContext);
  const [dataFetched, setFetchData] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseData = await sendRequest(process.env.REACT_APP_API_HOST);
        const dataList = await responseData[0]['data'];
        const products = await dataList['productPromo'];
        const categories = await dataList['category'];
        auth.updateProducts(products);
        auth.updateCategories(categories);
        setFetchData(true)
      } catch (err) {}
    };
    fetchProducts();
  }, [sendRequest, auth]);

  if (dataFetched) {
    return (
      <>
        <Navbar />
        {isLoading && <LoadingSpinner asOverlay />}
        {!isLoading && dataFetched &&
          <>
            <Categories items={auth.categories}/>
            <div className="container max-w-xl mx-auto">
              <div className="px-4 mb-16 text-gray-800 leading-normal w-">
                <Contents/>
              </div>
            </div>
          </>
        }
        <FloatingBar/>
      </>
    );
  } else {
    return (
      <>
        <div>
          <Navbar />
          {isLoading && <LoadingSpinner asOverlay />}
          {!isLoading &&
            <div className="container max-w-xl mx-auto">
              <ErrorModal error={error} onClear={clearError} />
            </div>
          }
        <FloatingBar/>
        </div>
      </>
    );
  }

}

export default Products;
