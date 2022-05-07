import { useEffect, useState } from "react";

const useInventories = () => {
    const [inventorys, setInventorys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventorys(data));
    }, []);
    return [inventorys, setInventorys]
}

export default useInventories;