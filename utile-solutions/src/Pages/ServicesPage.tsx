import React from "react";
import { Card, Button, Row, Col } from "antd";
import { RocketOutlined, CloudOutlined, BugOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";


const ServicesPage = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold">Vores Services</h1>
        <p className="text-xl text-gray-600 mt-4">
          Vi hjælper små virksomheder og startups med at få en stærk digital tilstedeværelse.  
          Fra opsætning af hjemmesider til hosting og fejlfinding – vi sørger for, at din virksomhed  
          er professionelt repræsenteret online.
        </p>
      </div>

      <Row gutter={[24, 24]} className="mt-12 max-w-100 mx-auto items-center content-center">
        <Col xs={24} md={8}>
          <Card
            hoverable
            className="shadow-lg text-center"
            cover={<RocketOutlined className="text-6xl text-blue-600 mt-6" />}
          >
            <h2 className="text-2xl font-semibold">Hjemmesideopsætning</h2>
            <p className="text-gray-600 mt-2">
              Professionelle og brugervenlige hjemmesider – skræddersyet til din virksomhed.
            </p>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card
            hoverable
            className="shadow-lg text-center"
            cover={<CloudOutlined className="text-6xl text-blue-600 mt-6" />}
          >
            <h2 className="text-2xl font-semibold">Hosting</h2>
            <p className="text-gray-600 mt-2">
              Sikker, hurtig og stabil hosting, så din hjemmeside altid er tilgængelig.
            </p>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card
            hoverable
            className="shadow-lg text-center"
            cover={<BugOutlined className="text-6xl text-blue-600 mt-6" />}
          >
            <h2 className="text-2xl font-semibold">Fejlfinding</h2>
            <p className="text-gray-600 mt-2">
              Har du problemer med din hjemmeside? Vi finder og løser fejl hurtigt.
            </p>
          </Card>
        </Col>
      </Row>

      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold">Hvorfor vælge os?</h2>
        <p className="text-xl text-gray-600 mt-2">
          Vi forstår små virksomheders behov og tilbyder <b>pålidelig, gennemsigtig og skræddersyet</b> service.
          Ingen skjulte gebyrer – kun løsninger, der virker.
        </p>
        <div className="text-center mx-auto">
            <Button
            type="primary"
            size="large"
            className="px-6 mt-6 flex mx-auto max-w-32"
            onClick={() => navigate("/kontakt")}
            icon={<MailOutlined />}
            >
            Kontakt os
            </Button>
        </div>
        
      </div>
    </div>
  );
};

export default ServicesPage;
