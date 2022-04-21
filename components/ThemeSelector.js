
export default function ThemeSelector() {
  const themeValues = [
    "luxury",
    "black",
    "light"
  ]

  return (
    <div>
      <select class="select" data-choose-theme>
        <option value="">
          Default
        </option>
        {themeValues.map((value) => (
          <option key={value.toLowerCase()} value={value.toLowerCase()}>
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}

