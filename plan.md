# Plan — Arquitectura frontend por roles

Esta fase convierte el prototipo de solicitud en una base navegable para la plataforma de microcrédito. La interfaz mantiene el lenguaje cercano del diseño original y separa la experiencia del solicitante de la operación interna.

## Estructura implementada

- `src/api/`: cliente Axios con `VITE_API_URL`, interceptor de JWT y evento de sesión no autorizada.
- `src/services/`: servicios mock por dominio para autenticación, solicitudes, préstamos, pagos, políticas, usuarios, riesgo, reconsideraciones y reportes.
- `src/mocks/`: usuarios, solicitudes, préstamo, pagos, cronograma y reportes agregados.
- `src/store/`: Redux Toolkit con sesión (`authSlice`), interfaz (`uiSlice`) y store central.
- `src/routes/`: rutas protegidas por sesión y rol.
- `src/layouts/`: portal mobile-first del solicitante y portal interno con Sider colapsable.
- `src/components/`: estados, justificaciones, auditoría, confirmaciones, encabezados y estados vacíos.
- `src/pages/`: login, solicitud guiada, cronograma, reconsideración, riesgo, reportes y acceso restringido.
- `src/theme/`: tokens de Ant Design alineados con `DESIGN.md`.

## Decisiones de UX

El solicitante ve una tarea principal por pantalla, navegación inferior en móvil y controles grandes. El personal interno obtiene una navegación operativa con búsqueda, alertas, perfil y menú filtrado por rol. Los estados siempre incluyen icono y texto, nunca dependen solo del color. El login recibe únicamente el correo en modo mock: con backend, la relación entre cuenta y rol vendrá en la respuesta de autenticación junto con el JWT.

## Módulos nuevos

El cronograma separa capital, interés, total, saldo y estado de cada cuota. La reconsideración exige una explicación mínima de 30 caracteres y admite soportes opcionales. Administración y comité supervisor tienen reportes agregados de portafolio y equidad, sin datos personales. La evaluación de riesgo conserva indicadores, política aplicada y justificación humana.

## Login real pendiente

El frontend ya centraliza el login en `authService`, pero hoy usa cuentas mock. Para consultar correo y contraseña contra la base de datos se necesitan en backend un endpoint de autenticación, comparación de `passwordHash` con bcrypt, JWT firmado, endpoint de sesión/perfil y middleware de autorización por rol. El navegador nunca debe consultar MongoDB directamente ni recibir hashes de contraseña.
