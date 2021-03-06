import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Navbar from "../../shared/components/Navigation/Navbar";
import { useHttpClient } from '../../shared/hooks/http-hook';
import FloatingBar from "../../shared/components/Navigation/FloatingBar";
import CartItem from "../components/CartItem";
import mockData from "../../shared/util/mockData";

let data = [];

const Profile = () => {
  const productId = useParams().productId;
  const [loadedData, setLoadedData] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const loadData = () => {
    data = localStorage.getItem("products");
    if (data == null) {
      localStorage.setItem("products", "{}");
      data = {};
    } else {
      data = JSON.parse(data);
    }
    return data;
  }

  const saveData = (id) => {
    if(!data['list']) {
      data['list'] = [];
    }
    data['list'].push(id)
    localStorage.setItem('products', JSON.stringify(data))
    return data;
  }

  const deleteData = (id) => {
    data['list'].splice(id, 1);
    localStorage.setItem('products', JSON.stringify(data))
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let localData = await loadData();
        if (productId) {
          localData = await saveData(productId)
        }
        const idProducts = await localData['list'];
        const setProduct = [...new Set(idProducts)]
        const searchItems = await mockData.filter((item) => {
          return setProduct.includes(item.id)
        })

        setLoadedData(searchItems || null);
      } catch (err) {}
    };
    fetchProducts()
  }, [sendRequest, productId])

  if (loadedData) {
    return (
      <div>
        <Navbar />
        <div className="container max-w-lg mx-auto my-2">
          <h2 className="font-bold text-2xl m-4">Purchased History</h2>
          <div className="px-4 mb-16 text-gray-800 leading-normal w-full">
            {!isLoading && loadedData.map(item => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                loved={item.loved}
                description={item.description}
                image={item.imageUrl}
              />
            ))}
          </div>
        </div>
        <FloatingBar/>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div className="container max-w-lg mx-auto my-2">
          <div className="px-4 mb-16 text-gray-800 leading-normal w-full">
            {!isLoading &&
              <>Nothing to see here</>
            }
          </div>
        </div>
        <FloatingBar/>
      </div>
    );
  }
}

export default Profile;
