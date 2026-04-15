import { NavLink } from 'react-router-dom'
import { CATEGORIES } from '../../constants'

const DisplayCategories = () => {
  return (
    <ul className="flex gap-4 flex-wrap py-5">
          {CATEGORIES.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active text-text-muted" : "nav-link"
                }
                to={`/shop/${id}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
  )
}

export default DisplayCategories