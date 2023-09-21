import { Item } from "components/shared/item/Item";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fakeStoreService } from "services/fakeStoreService";
import { ItemCategoryTitle, ItemCategoryUrlParameter } from "types/enums";


function ItemCategory() {

    const [items, setItems] = useState([]);
    const [itemCategories, setItemCategories] = useState([]);
    const location = useLocation();

    useEffect(() => {
        // retrieve data from limited api
        fakeStoreService.getItemsByCategoryAsync(location.pathname).then(data => {
            //set data into state
            setItems(items => data);
        });

        // get and set store for item categories to decide colors
        let categories = fakeStoreService.getCategories();
        setItemCategories(itemCategories => categories);

    }, [setItems, location.pathname]);
    return (
        <div className="items-category">
            <br />
            <div className="area-title title-top">
                {
                    items[0]?.category === ItemCategoryUrlParameter.MENS_CLOTHING ? ItemCategoryTitle.MENS_CLOTHING : ItemCategoryTitle.WOMENS_CLOTHING
                }
            </div>
            <div className="items">
                {
                    items ?
                        items.map(item => (
                            <div>
                                <Item title={item.title} description={item.description} imageUrl={item.image} category={item.category} price={item.price}
                                    itemCategories={itemCategories} />
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

export default ItemCategory;