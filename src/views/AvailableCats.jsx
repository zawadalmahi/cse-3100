import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState(availableCats); // Initial cat list
  const [searchName, setSearchName] = useState(''); // Search box input
  const [selectedBreed, setSelectedBreed] = useState(''); // Dropdown 

  // Condition for filter cats based on search name and selected breed
  const filteredCats = cats.filter(
    (cat) =>
      (!searchName || cat.name.toLowerCase().includes(searchName.toLowerCase())) &&
      (!selectedBreed || cat.breed === selectedBreed)
  );

  return (
    <section className="text-center">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Filtering Options */}
      <div className="filters d-flex justify-content-center mb-4">
        {/* Search by name */}
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />

        {/* Dropdown to filter by breed */}
        <select
          className="form-select"
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          <option value="">All Breeds</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Peterbald">Peterbald</option>
          <option value="Birman">Birman</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Persian">Persian</option>
          <option value="Bengal">Bengal</option>
        </select>
      </div>

      {/* Display filtered cats */}
      <div className="row g-4">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <h3 className="h5 mb-1">{cat.name}</h3>
              <p className="mb-0">Age: {cat.age}</p>
              <p className="mb-0">Breed: {cat.breed}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
