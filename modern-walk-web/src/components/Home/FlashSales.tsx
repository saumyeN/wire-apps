import { Item } from "components/shared/item/Item";
import React, { useEffect, useState } from "react";
import { fakeStoreService } from "services/fakeStoreService";

export function FlashSales() {

    const [flashSales, setFlashSales] = useState([]);
    const [itemCategories, setItemCategories] = useState([]);

    useEffect(() => {
        // retrieve data from limited api
        fakeStoreService.getFlashSalesAsync().then(data => {
            //set data into state
            setFlashSales(flashSales => data);
        });

        // get and set store for item categories to decide colors
        let categories = fakeStoreService.getCategories();
        setItemCategories(itemCategories => categories);
    }, [setFlashSales]);

    return (
        <div className="flash-sale-items">
            <div className="items">
                {
                    flashSales ? 
                    flashSales.map((item, key) => (
                        <div key={key}>
                            <Item title={item.title} description={item.description} imageUrl={item.image} category={item.category} price={item.price}
                                itemCategories={itemCategories}/>
                        </div>
                    ))
                    :
                    <div className="no-data">
                        Not available. Please try again later.
                    </div>
                }
            </div>
        </div>

    )
}