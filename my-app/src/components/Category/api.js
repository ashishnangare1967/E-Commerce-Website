import { useEffect } from "react";
import axios from "axios";
const ApigetData = ({
  loading,
  setLoading,
  products,
  setproducts,
  go,
  setGo,
  gender,
}) => {
  useEffect(() => {
    setLoading(true);

    getData();
    function getData() {
      axios.get(`http://localhost:3500/${gender}`, {}).then((res) => {
        setproducts(res.data);
        console.log(res.data);
        setLoading((p) => false);
      });
    }
  }, [gender]);
};
export { ApigetData };
