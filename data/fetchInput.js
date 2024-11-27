const fs = require('fs').promises;
require('dotenv').config(); 

const SESSION_COOKIE = process.env.AOC_SESSION;

if (!SESSION_COOKIE) {
  console.error('Session cookie is not set in the environment variables.');
  process.exit(1);
}

const fetchInput = async(day) => {
  const url = `https://adventofcode.com/2023/day/${day}/input`;

  try {
    // Dynamically import node-fetch
    const fetch = (await import('node-fetch')).default;

    const response = await fetch(url, {
      headers: {
        'Cookie': `session=${SESSION_COOKIE}`,
        'User-Agent': 'Advent of Code Input Fetcher - JavaScript Script'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch input: ${response.status} ${response.statusText}`);
    }

    const data = await response.text();
    const filename = `day${day}-input.txt`;

    await fs.writeFile(filename, data.trim(), 'utf8');
    console.log(`Input for day ${day} saved to ${filename}`);
  } catch (error) {
    console.error(`Error fetching input for day ${day}:`, error.message);
  }
}

const validateDayArgument = (dayArg) => {
  const day = parseInt(dayArg, 10);
  
  if (isNaN(day) || day < 1 || day > 25) {
    console.error('Please provide a valid day (1-25) as a command-line argument.');
    process.exit(1);
  }
  return day;
}

const day = validateDayArgument(process.argv[2]);
fetchInput(day);