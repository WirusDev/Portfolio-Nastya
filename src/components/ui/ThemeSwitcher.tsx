// "use client";

// import React, { useState, useEffect } from "react";

// const ThemeSwitcher: React.FC = () => {
//   const themes = ["light", "mytheme"];

//   const [theme, setTheme] = useState("mytheme");

//   useEffect(() => {
//     document.querySelector("html")?.setAttribute("data-theme", theme);
//   }, [theme]);

//   return (
//     <div className='py-4'>
//       <select
//         title='Select theme'
//         value={theme}
//         onChange={(e) => setTheme(e.target.value)}
//         className='select select-bordered'
//       >
//         {themes.map((t) => (
//           <option key={t} value={t}>
//             {t.charAt(0).toUpperCase() + t.slice(1)}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default ThemeSwitcher;
