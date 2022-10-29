import { useState } from "react";
// const genres = ['animation', 'action' ,'horror' , 'classic', 'comedy', 'drama']

function Furniture() {
    const [furnitureList, setFurnitureList] = useState()
    const getFurniture = () => {
        fetch(`https://mongo-api-deploy-adi-fischer.web.app/furniture`)
        .then(response => response.json())
        .then(setFurnitureList)
        .catch(console.error)
    }

    return (
        
            <>
                <button onClick={() => getFurniture()}>Get Furniture
                </button>
                <div className="button-list">
                    {furnitureList &&
                        furnitureList.map((item) => {
                            return(
                                <>
                             <p key={item._id}> Type: {item.type}</p>
                            <p key={item.modle}> Price: {item.modle}</p>
                                </>
                            )
                        }
                        )}
                </div>
            </>
        )
    }
    export default Furniture

       
            
         
              
           

