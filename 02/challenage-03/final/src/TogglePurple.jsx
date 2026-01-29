function TogglePurple({isPurple, setIsPurple}){
return <input
          type="checkbox"
          onChange={() => setIsPurple(!isPurple)}
          checked={isPurple}
        />
}

export default TogglePurple