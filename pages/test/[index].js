import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

export default function index () {
  const router = useRouter();
  console.log(router.query);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch("https://todoapp-39763-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setLoadedMeetups(meetups);
        console.log(loadedMeetups);
      });
  }, [router.query.index]);
  return (
    <section>
      <h1>All Meetups</h1>
    </section>
  );
}
