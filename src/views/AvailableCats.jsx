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
  const [catImages, setCatImages] = useState({}); // Object to store cat images

  // Fetch cat images on component mount
  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const promises = cats.map(async (_, index) => {
          const response = await fetch('https://api.thecatapi.com/v1/images/search');
          const data = await response.json();
          return { index, imageUrl: data[0]?.url };
        });

        const images = await Promise.all(promises);
        const imageMap = images.reduce((acc, { index, imageUrl }) => {
          acc[index] = imageUrl;
          return acc;
        }, {});
        setCatImages(imageMap);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, [cats]);

  // Filter cats based on search name and selected breed
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
              {catImages[i] ? (
                <img
                  src={catImages[i]}
                  alt={`${cat.name}`}
                  className="img-fluid mb-2"
                  style={{ borderRadius: '8px', height: '170px', objectFit: 'cover' }}
                />
              ) : (
                <div
                  className="placeholder mb-2"
                  style={{
                    height: '200px',
                    borderRadius: '8px',
                    backgroundColor: '#f0f0f0',
                  }}
                />
              )}
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
