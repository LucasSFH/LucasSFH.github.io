import React from "react";
import { Card, Button } from "antd";
import { BugOutlined,CloudOutlined, MailOutlined, RocketOutlined } from "@ant-design/icons";

const PricesPage = () => {
    
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold">Priser</h1>
        <p className="text-xl text-gray-600 mt-4">
          Enkle og gennemsigtige priser – ingen skjulte gebyrer.  
          Perfekt til nyopstartede og små virksomheder.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card className="text-center shadow-lg"> 
          <h2 className="text-2xl font-semibold">Hjemmesideopsætning</h2>
          <p className="text-gray-600 mt-2">Få en professionel hjemmeside sat op hurtigt og nemt.</p>
          <RocketOutlined className="text-5xl text-blue-600 mt-6" />
          <p className="text-3xl font-bold mt-4">Fra 4.995 DKK</p>
        </Card>

        <Card className="text-center shadow-lg">
          <h2 className="text-2xl font-semibold">Hosting</h2>
          <p className="text-gray-600 mt-2">Pålidelig hosting, så din hjemmeside altid er online.</p>
          <CloudOutlined className="text-5xl text-blue-600 mt-6" /> 
          <p className="text-3xl font-bold mt-4">Fra 74 DKK/md.</p>
        </Card>

        <Card className="text-center shadow-lg">
          <h2 className="text-2xl font-semibold">Fejlfinding & Features</h2>
          <p className="text-gray-600 mt-2">Har du problemer eller vil du tilføje nye funktioner?</p>
          <BugOutlined className="text-5xl text-blue-600 mt-6" />
          <p className="text-3xl font-bold mt-4">649 DKK/time</p>
        </Card>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold">Har du spørgsmål?</h2>
        <p className="text-xl text-gray-600 mt-2">
          Kontakt os, så finder vi den bedste løsning til dit behov.
        </p>
        <Button
          type="primary"
          size="large"
          className="px-6 mt-6 flex mx-auto max-w-32"
          href="/kontakt"
          icon={<MailOutlined />}
        >
          Kontakt os
        </Button>
      </div>
    </div>
  );
};

export default PricesPage;
