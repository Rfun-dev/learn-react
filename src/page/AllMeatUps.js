import MeetUpsList from "../component/meetUps/MeetUpsList";
import { useEffect, useState ,useRef } from "react";

const AllMeatUpsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    fetch(
      "https://react-course-89d20-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetUps = []

        for(const key in data){
          const meetUp = {
            id : key,
            ...data[key]
          }
          meetUps.push(meetUp);
        }

        setIsLoading(false);
        setLoadedData(meetUps);
      });
  },[]);

  if(isLoading){
    <section>
      <p>Loading ...</p>
    </section>
  }

  return (
    <section>
      <MeetUpsList dummy={loadedData} />
    </section>
  );
};

export default AllMeatUpsPage;
