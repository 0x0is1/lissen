import React, { useEffect, useState } from 'react'
import './Radios.css'
import APIFetch from '../../utils/APIFetch';
import Category from '../../components/MainPanel/components/Category/Category';
import CategorySkeleton from '../../components/MainPanel/components/Category/CategorySkeleton';

const Radios = () => {
    const [resp, setResp] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        const data = await APIFetch(`getFeaturedStations`);
        setResp(data);
      };
      fetchData();
    }, []);
    return (
      <div id="main">
        {resp ? (
          <Category name={"radio"} data={resp} />
        ) : (
          <>
            <CategorySkeleton />
            <CategorySkeleton />
          </>
        )}
      </div>
    );
}

export default Radios