// import React, { useState, useEffect } from 'react';
// import './App.css';
// import axios from 'axios';

// function App() {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (query.length > 2) {
//         try {
//           const response = await axios.get(`https://restcountries.com/v3.1/name/${query}`);
//           setResults(response.data);
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       } else {
//         setResults([]);
//       }
//     };

//     fetchData();
//   }, [query]);

//   return (
//     <div className="App">
//       <h1>Country Search</h1>
//       <input
//         type="text"
//         placeholder="Search for countries..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <ul>
//         {results.map((country, index) => (
//           <li key={index}>
//             <img src={country.flags.png} alt={country.name.common} />
//             <h2>{country.name.common}</h2>
//             <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
//             <p>Region: {country.region}</p>
//             <p>Population: {country.population.toLocaleString()}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import axios from 'axios';

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get('https://randomuser.me/api/');
//         setUser(response.data.results[0]);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUser();
//   }, []);

//   return (
//     <div className="App">
//       <h1>User Profile</h1>
//       {user ? (
//         <div className="profile-card">
//           <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
//           <h2>{`${user.name.first} ${user.name.last}`}</h2>
//           <p>Email: {user.email}</p>
//           <p>Phone: {user.phone}</p>
//           <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=20');
        setUsers(response.data.results);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.first.toLowerCase().includes(filter.toLowerCase()) ||
    user.name.last.toLowerCase().includes(filter.toLowerCase()) ||
    user.location.country.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>User Profiles</h1>
      <input
        type="text"
        placeholder="Filter by name or country..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="profiles">
        {filteredUsers.map((user, index) => (
          <div key={index} className="profile-card">
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
            <h2>{`${user.name.first} ${user.name.last}`}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
