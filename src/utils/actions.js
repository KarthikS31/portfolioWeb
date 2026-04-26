import Papa from 'papaparse';
import { updatePortfolioData } from './store';

export const fetchPortfolioData = (url) => async (dispatch) => {
  try {
    const res = await fetch(url);
    const csvText = await res.text();

    // PapaParse handles commas, quotes, and line breaks automatically
    Papa.parse(csvText, {
      header: true, // Uses the first row as keys
      skipEmptyLines: true,
      complete: (results) => {
        const allRows = results.data;

        // Get unique types (skills, about, experience, etc.)
        const types = [...new Set(allRows.map(item => item.type))];

        types.forEach(type => {
          if (!type) return;

          const filteredData = allRows.filter(item => item.type === type);
          
          // Save single items as objects, multiple items as arrays
          const finalData = filteredData.length === 1 ? filteredData[0] : filteredData;

          dispatch(updatePortfolioData({ key: type, data: finalData }));
        });
      }
    });

  } catch (err) {
    console.error("Critical Fetch Error:", err);
  }
};