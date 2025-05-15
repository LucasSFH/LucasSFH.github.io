import React, {useState} from "react";
import { Card } from "antd";
import {BulbFilled} from "@ant-design/icons";
import { Link } from "react-router-dom";
import AllCases from "../Data/Cases/AllCases";

const { Meta } = Card;

const CasesPage = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const casesArray = AllCases();

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-32 px-4">
      <h1 className="mb-8 text-5xl font-bold">Cases</h1>

      {casesArray.map((item, index) => (
        <Link to={item.websiteUrl}  className="max-w-xl w-full" key={index} target="_blank"
          onMouseOver={() => setClickedIndex(index)}
          onMouseLeave={() => setClickedIndex(null)}
        >
          <Card key={index} className="shadow-md hover:shadow-lg hover:opacity-85"
            cover={<img alt={item.projectName} src={item.backgroundImage} />}
          >
            <Meta title={item.projectName} description={
              <>
                <p className="hidden sm:block">{clickedIndex === index ? (item.description !== "" ? item.description : item.shortDescription) : <>{item.shortDescription}..</>}</p>
                <p className="block sm:hidden">{item.shortDescription}</p>
                
                <p><BulbFilled className="text-yellow-400 mr-2 mt-4" /><i><b>{item.technologyInfo}</b></i></p>     
              </>
              } />
          </Card>
        </Link>
        
      ))}
      
    </div>
  );
};

export default CasesPage;
