import React from 'react';

function Categories({activeCategory, items, onClick}) {

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory===null ? 'active': ''} onClick={() => onClick(null)}>Все</li>
                {items.map((item, index) => <li className={activeCategory === index ? 'active':''} onClick={() => onClick(index)} key={ `${item}_${index}` }>{ item }</li> )}
            </ul>
        </div>
    )
}

export default Categories
