In our application, we often have components that belong to each other. They're dependent on each other through the shared state, and share logic together. You often see this with components like select, dropdown components, or menu items. The compound component pattern allows you to create components that all work together to perform a task.

The compound pattern is often seen in UI libraries.

Let's take a look at a very simplified `select` component example below.

`Option`

```jsx
import cx from 'classnames'
import Context form './context'

function Option(props) {
  const { children, value, ...restProps } = props
  const { selectedValue, setSelectedValue } = useContext(context)
  return (
    <li
      className={classes({ active: selectedValue === value })}
      onClick={() => {
        setSelectedValue(value)
      }}
			{...restProps}
    >
      {children}
    </li>
  )
}

export default Option
```

`Select`

```jsx
import Context from './context'
import Option from './Option'

function Select(props) {
  const { children, defaultValue, onChange, ...restProps } = props

  const [selectedValue, setSelectedValue] = useState(null)

  useEffect(() => {
    if (defaultValue !== undefined) {
      setSelectedValue(defaultValue)
    }
  }, [])
  useEffect(() => {
    onChange(selectedValue)
  }, [selectedValue])

  return (
    <Context.Provider value={{ selectedValue, setSelectedValue }}>
      <ul {...restProps}>{children}</ul>
    </Context.Provider>
  )
}

Select.Option = Option

export default Select
```

`Usage`

```jsx
import { Select } from 'ui-lib'

const { Option } = Select

const handleChange = (value) => {
  console.log(`selected ${value}`)
}

function Component() {
  return (
    <Select
      defaultValue='lucy'
      style={{ width: '120px' }}
      onChange={handleChange}
    >
      <Option value='jack'>Jack</Option>
      <Option value='lucy'>Lucy</Option>
      <Option value='Yiminghe'>yiminghe</Option>
    </Select>
  )
}
```
