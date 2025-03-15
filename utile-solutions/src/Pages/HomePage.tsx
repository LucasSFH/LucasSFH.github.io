// import ContactForm from "../Components/Forms/ContactForm";
import {Col, Row, Button, Card} from "antd"
import ContactForm from "../Components/Forms/ContactForm";
import { CloudTwoTone, BugFilled, RocketOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const navigate = useNavigate();
  return (
    <div style={{ margin: "auto"}} className="min-h-screen">
        <Row id="hero-container" className="h-dvh align-middle" style={{backgroundImage: "url('./images/hero_bg.jpg')", backgroundPosition: 'top', backgroundSize: 'cover'}}>
            <Col span={24} className="m-auto px-8 md:px-32">
                <h1 className="text-5xl font-bold">Din partner i <span className="text-blue-600 drop-shadow-sm">Digitale Løsninger</span></h1>
                <p className="mt-4 text-xl text-dark">Vi hjælper små og nyopstartede virksomheder med alt inden for hjemmesideopsætning, hosting og fejlfinding.</p>
                <Button 
                type="primary" 
                size="large" 
                className="mt-6"
                onClick={() => navigate("/kontakt")} 
                >
                Kontakt os
                </Button>
            </Col>
        </Row>
        <Row className="py-8">
            <Col span={24} className="m-auto px-8 md:px-32">
                <h2 className="text-4xl font-bold">Vores Tjenester</h2>
                <Row gutter={16} className="mt-8 gap-y-12">
                <Col xs={24} sm={12} lg={8}>
                    <Card
                    hoverable
                    title={<><RocketOutlined style={{color: '#52c41a'}}/> Hjemmesideopsætning</>}
                    className="shadow-lg"
                    >
                    <p className="text-lg">Vi hjælper dig med at få en professionel hjemmeside op at køre, hurtigt og effektivt.</p>
                    
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={8}>
                    <Card
                    hoverable
                    title={<><CloudTwoTone /> Hosting Services</>}
                    className="shadow-lg"
                    >
                    <p className="text-lg">Vi tilbyder pålidelig hosting med høj ydeevne, så din hjemmeside altid er online.</p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={8}>
                    <Card
                    hoverable
                    title={<><BugFilled style={{color: '#DC143C'}} /> Fejlfinding</>}
                    className="shadow-lg"
                    >
                    <p className="text-lg">Har du problemer med din hjemmeside? Vi hjælper med at finde og rette fejl hurtigt.</p>
                    </Card>
                </Col>
                </Row>
            </Col>
        </Row>
        <Row className="my-16">
            <Col span={24} className="m-auto px-8 md:px-32">
                <h2 className="text-4xl font-bold">Kom i Kontakt</h2>
                <p className="mt-4 text-xl">Har du spørgsmål eller brug for hjælp? Vi er klar til at hjælpe dig!</p>
                <ContactForm />
            </Col>
        </Row>

    </div>
  );
};

export default HomePage;
