// import React, { useState } from 'react';

// const DropdownBox = ({ locations }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   return (
//     <div style={styles.dropdownBox}>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={styles.searchBar}
//       />
//       <ul style={styles.locationList}>
//         {locations
//           .filter((location) =>
//             location.toLowerCase().includes(searchTerm.toLowerCase())
//           )
//           .map((location, index) => (
//             <li key={index} style={styles.locationItem}>
//               {location}
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// const styles = {
//   dropdownBox: {
//     position: 'absolute',
//     top: '4%',
//     left: '22vw',
//     backgroundColor: '#66b2b2',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     padding: '10px',
//     marginTop: '5px',
//     zIndex: '1000',
//     width: '150px',
//   },
//   searchBar: {
//     width: '90%',
//     padding: '5px',
//     marginBottom: '10px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//   },
//   locationList: {
//     listStyle: 'none',
//     padding: '0',
//     margin: '0',
//   },
//   locationItem: {
//     padding: '5px 0',
//     cursor: 'pointer',
//   },
// };

// export default DropdownBox;