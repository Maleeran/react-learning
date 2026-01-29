function TextColor ({textColor, setTextColor}){
  return(<select
          value={textColor}
          onChange={(event) => setTextColor(event.target.value)}
        >
          <option value="">
            White
          </option>
          <option value="text-black">Black</option>
          <option value="text-orange">Orange</option>
        </select>)

}

export default TextColor