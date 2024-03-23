// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
import { useEffect, useState } from 'react';
import { API_SECRET } from '@/config';

export function useUserData() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(API_SECRET);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUserData();
  }, []);

  return userData;
}