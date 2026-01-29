function AppInput(props){
  const{type, value, className, onChange } = props

  return <input
          type= {type}
          value= {value}
          className={className}
          onChange={onChange}
        />
}

export default AppInput