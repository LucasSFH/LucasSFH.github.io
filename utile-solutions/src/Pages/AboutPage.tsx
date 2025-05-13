import React from "react";
import { Card, Button } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-32 px-4">
      <Card className="max-w-2xl w-full text-center shadow-lg">
        <UserOutlined className="text-6xl text-blue-600 mb-4" />
        <h1 className="text-4xl font-bold">Om Os</h1>
        <p className="text-lg text-gray-600 mt-2">
          Vi er selvstændige specialister i softwareudvkling herunder <i><b>hjemmesider, hosting og fejlfinding</b></i>.  
          <br/>Vores mål er at hjælpe små virksomheder og startups med at få en stærk digital identitet –  
          uden besværet og de høje omkostninger.  
        </p>
      </Card>

      <div className="max-w-3xl w-full mt-12">
        <h2 className="text-3xl font-bold text-center">Vores Værdier</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <Card className="text-center shadow-md">
            <h3 className="text-xl font-semibold">Personlig Service</h3>
            <p className="text-lg text-gray-600 mt-2">Vi arbejder tæt sammen med dig for at finde den bedste løsning.</p>
          </Card>
          <Card className="text-center shadow-md">
            <h3 className="text-xl font-semibold">Fleksibilitet</h3>
            <p className="text-lg text-gray-600 mt-2">Alle opgaver udføres efter aftale – når det passer dig.</p>
          </Card>
          <Card className="text-center shadow-md">
            <h3 className="text-xl font-semibold">Gennemsigtighed</h3>
            <p className="text-lg text-gray-600 mt-2">Ingen skjulte gebyrer – kun fair priser og ærlig rådgivning.</p>
          </Card>
        </div>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold">Lad os tage en snak</h2>
        <p className="text-gray-600 mt-2">
          Opgaver og projekter udarbejdes efter aftale. Kontakt mig, så finder vi en løsning, der passer dig.
        </p>
        <Button
          type="primary"
          size="large"
          className="mt-6 flex mx-auto max-w-32"
          onClick={() => navigate("/kontakt")}
          icon={<MailOutlined />}
        >
          Kontakt os
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;
