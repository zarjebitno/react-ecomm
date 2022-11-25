import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss'

const Directory = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map(cat => (
        <CategoryItem
          key={cat.id}
          category={cat}
        />
      ))}
    </div>
  )
}

export default Directory

