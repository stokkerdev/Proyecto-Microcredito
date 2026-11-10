import { LockOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import { Alert, Button, Card, Form, Input, Typography } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";
import { setSession } from "../../store/authSlice";
import { mockUsers } from "../../mocks/data";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const onFinish = async ({ email }) => {
    setLoading(true);
    setError("");
    try {
      const session = await authService.login({ email });
      dispatch(setSession(session));
      navigate(session.user.role === "solicitante" ? "/applicant" : "/internal");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return <main className="login-page"><div className="login-aside"><div className="brand-mark"><span className="brand-symbol">+</span><span>Solidaridad <strong>Microfinanzas</strong></span></div><div><span className="eyebrow">Cooperativa financiera</span><h1>Oportunidades que crecen contigo.</h1><p>Un espacio claro para solicitar, revisar y acompañar cada decisión de crédito.</p></div><div className="login-assurance"><SafetyCertificateOutlined /><span>Entorno de demostración con datos ficticios</span></div></div><Card className="login-card"><div className="login-card-heading"><div className="login-icon"><LockOutlined /></div><Typography.Title level={2}>Ingresa a tu portal</Typography.Title><p>Escribe tu correo y el sistema te llevará al portal que corresponde a tu perfil.</p></div>{error && <Alert type="error" showIcon message={error} className="login-alert" />}<Form layout="vertical" onFinish={onFinish}><Form.Item name="email" label="Correo electrónico" initialValue={mockUsers[0].email} rules={[{ required: true, type: "email", message: "Escribe un correo válido" }]}><Input size="large" placeholder="nombre@ejemplo.com" autoComplete="email" /></Form.Item><Button htmlType="submit" type="primary" size="large" block loading={loading}>Ingresar al portal</Button></Form><p className="demo-note">Modo demostración: no se solicita contraseña. El rol se determina automáticamente a partir del correo.</p></Card></main>;
}
