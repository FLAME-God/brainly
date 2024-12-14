import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found. Please log in.");
        }

        const response = await axios.get(`${BACKEND_URL}/brain/content`, {
          headers: {
            Authorization: token,
          },
        });

        setContents(response.data.contents || []);
      } catch (err) {
        console.error("Error fetching content:", err);

        setContents([]); // Ensure content is reset on failure.
      }
    };

    fetchContent();
  }, []); // Empty dependency array ensures this runs once.

  console.log(contents);

  return contents;
}
