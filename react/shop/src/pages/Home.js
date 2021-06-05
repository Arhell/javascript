import {Categories, SortPopup, PizzaBlock, LoadingBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";

import {setCategory} from "../redux/actions/filters"
import {useCallback, useEffect} from "react";
import {fetchPizzas} from "../redux/actions/pizzas";

const categoryNames = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые']
const sortItems = [
  {name: 'популярности', type: 'popular'},
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'alphabet'}
]

function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({pizzas}) => pizzas.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)

  useEffect(() => {
    dispatch(fetchPizzas())
    // eslint-disable-next-line
  }, [])

  const onSelectCategory = useCallback(index => {
    dispatch(setCategory(index))
    // eslint-disable-next-line
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? (items.map((obj) => (
            <PizzaBlock key={obj.id} isLoading={true} {...obj} />
          )))
          : Array(12).fill(<LoadingBlock />)
        }
      </div>
    </div>
  );
}

export default Home;
