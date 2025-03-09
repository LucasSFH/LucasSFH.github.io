import { Form, Input, Button, Card, message } from "antd";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const submitContactForm = async (values: any) => {
    setLoading(true); // Show loading state

    const templateParams = {
      navn: values.navn,
      email: values.email,
      besked: values.besked,
    };

    try {
      await emailjs.send("service_i5tyvke", "template_vsj3b6o", templateParams, "wVxKHN_YA4NMvplB9");
      
      message.success("Din besked er sendt! Vi vender tilbage hurtigst muligt. 📩");
      form.resetFields(); // Clear the form after submission
    } catch (error) {
      console.error("Fejl ved afsendelse:", error);
      message.error("Noget gik galt. Prøv venligst igen senere. ❌");
    } finally {
      setLoading(false); // Remove loading state
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <Card title="Kontakt" className="shadow-lg">
        <Form form={form} layout="vertical" onFinish={submitContactForm}>
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
            <Button type="primary" htmlType="submit" loading={loading} className="flex flex-wrap items-center mx-auto">
              {loading ? "Sender..." : "Send besked"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ContactForm;