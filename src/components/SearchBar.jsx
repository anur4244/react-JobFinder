export default function SearchBar({ keyword, setKeyword }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by job title or location..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-500"
      />
    </div>
  );
}
