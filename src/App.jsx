import React, { useEffect, useState } from 'react'
import firebaseConfig from './util/firebaseconfig'
import { initializeApp } from 'firebase/app'
import { toast, ToastContainer } from 'react-toastify';
import { getDatabase, ref, get, child } from 'firebase/database';

const App = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const firebaseApp = initializeApp(firebaseConfig);
    const database = getDatabase(firebaseApp);
    const dbRef = ref(database);

    get(child(dbRef, 'data')).then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        toast.warn('No data available');
      }
    }).catch((error) => {
      toast.warn('Error reading data:', error);
    });
  }, []);

  if (!data) {
    return toast.info("Fetching Data from Firebase");
  }

  console.log(data)

  return (
    <>
      App
      <ToastContainer />
    </>
  );
}

export default App