import { useEffect, useState } from "react";

const useInventories = () => {
    const [inventorys, setInventorys] = useState([]);

    useEffect(() => {
        fetch('https://nameless-ravine-50425.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventorys(data));
    }, []);
    return [inventorys, setInventorys]
}

export default useInventories;