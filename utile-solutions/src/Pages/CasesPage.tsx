import React from "react";
import { Card } from "antd";
import { useNavigate, Link } from "react-router-dom";
import AllCases from "../Data/Cases/AllCases";

const { Meta } = Card;

const CasesPage = () => {
  const navigate = useNavigate();

  const casesArray = AllCases();

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-32 px-4">
      <h1 className="mb-8 text-5xl font-bold">Cases</h1>

      {casesArray.map((item, index) => (
        <Link to={item.websiteUrl}  className="max-w-xl w-full" key={index} target="_blank">
          <Card key={index} className="shadow-md hover:shadow-lg hover:opacity-85"
            cover={<img alt={item.projectName} src={item.backgroundImage} />}
          >
            <Meta title={item.projectName} description={item.shortDescription} />
          </Card>
        </Link>
        
      ))}
      
    </div>
  );
};

export default CasesPage;
