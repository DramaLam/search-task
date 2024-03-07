import "./styles.css";

export function SearchForm({ onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <div className="searchForm">
      <form>
        <input 
          type="text"
          placeholder="Terry"
          // value="Terry"
          onChange={handleChange}
          />
      </form>
    </div>
  );
}
