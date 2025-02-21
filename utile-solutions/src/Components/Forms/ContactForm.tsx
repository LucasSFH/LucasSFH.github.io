import { Form, Input, Button, Card } from "antd";


const ContactForm = () => {
  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <Card title="Kontakt" className="shadow-lg">
        <Form layout="vertical">
            <Form.Item name="navn" rules={[{ required: true, message: "Skriv dit navn" }]}> 
                <Input placeholder="Navn" />
            </Form.Item>
            <Form.Item name="email" rules={[{ required: true, message: "Vi skal bruge din email" }]}> 
                <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item name="besked" rules={[{ required: true, message: "Skriv din forespørgsel her" }]}> 
                <Input.TextArea rows={4} showCount maxLength={400} allowClear placeholder="Skriv din besked her" />
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit" className="flex flex-wrap items-center mx-auto">
                Send besked
            </Button>
            </Form.Item>
        </Form>
      </Card>
      
    </div>
  );
};

export default ContactForm;
