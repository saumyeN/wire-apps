import ItemCategoryTile from 'components/shared/item-category-tile/ItemCategoryTile';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FlashSales } from './FlashSales';
import { ItemCategory } from 'types/dto';
import { fakeStoreService } from 'services/fakeStoreService';
import { ItemCategoryUrlParameter } from 'types/enums';

function Home() {
    const [itemCategories, setCategories] = useState([]);
    const navigate = useNavigate();

    //setting categories dynamically
    useEffect(() => {
        let categories = fakeStoreService.getCategories();

        setCategories(itemCategories => categories);
    }, [setCategories]);

    //handle category card click event
    const handleCategoryClick = (name) => {
        //using if/else since there are 2 options
        if (name === ItemCategoryUrlParameter.MENS_CLOTHING) {
            navigate("/mens-clothing"); //navigate to mens page
        } else {
            navigate("/womens-clothing") // navigate to women's page
        }
    }

    return (
        <div className="home">
            <br />
            <div className="area-title title-top">
                Flash Sale
            </div>
            <FlashSales />

            <div className="area-title">
                Categories
            </div>
            <div className="item-category-tiles">
                {
                    itemCategories.filter(c => c.name !== "DEFAULT").map((itemCategory: ItemCategory, key) => {
                        return <ItemCategoryTile title={itemCategory.title} color={itemCategory.tileColor} textColor={itemCategory.textColor}
                            onClick={() => handleCategoryClick(itemCategory.name)} key={key}/>
                    })
                }
            </div>
        </div>
    )
}

export default Home;