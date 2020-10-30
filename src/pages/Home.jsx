import React from 'react'
import { Categories, Sort, PizzaBlock, PlaceholderBlock} from '../Components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const cartItems =  useSelector(({ cart }) => cart.items)
    const {category, sortBy} = useSelector(({filters}) => filters)

    React.useEffect(() => {
            dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy]);

    const onSelectCategory = (index) => {
        dispatch(setCategory(index))
    };

    const onSelectSortBy = (index) => {
        dispatch(setSortBy(index))
    }

    const addPizzaCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={[
                    'Мясные',
                    'Вегетарианская',
                    'Гриль',
                    'Острые',
                    'Закрытые'
                ]} onClick={onSelectCategory} activeCategory={category} />
                <Sort activeSortType={sortBy} onClickSortType={onSelectSortBy} items={[
                    {name: 'Популярности', type: 'popular'},
                    {name:'Цена', type: 'price'},
                    {name:'Алфавит', type:'name'},
                ]} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map( (item, index) => <PizzaBlock cartCount={ cartItems[item.id] && cartItems[item.id].items.length } onClickAddPizza={addPizzaCart} {...item} key={item.id}/>): Array(10).fill(< PlaceholderBlock />)} 
                {/* Если загрузилось, то отобразится, если нет то будет PlaceholderBlock */}
            </div>
        </div>
    )
}

export default Home;
