# Plan — Arquitectura frontend por roles

Esta fase convierte el prototipo de solicitud en una base navegable para la plataforma de microcrédito. La interfaz mantiene el lenguaje cercano del diseño original y separa la experiencia del solicitante de la operación interna.

## Estructura implementada

- `src/api/`: cliente Axios con `VITE_API_URL`, interceptor de JWT y evento de sesión no autorizada.
- `src/services/`: `authService`, `applicationService`, `loanService`, `paymentService`, `policyService` y `userService`; todos devuelven Promises con datos mock y retardo simulado.
- `src/mocks/`: usuarios, solicitudes, préstamo y pagos de ejemplo.
- `src/store/`: Redux Toolkit con sesión (`authSlice`), interfaz (`uiSlice`) y store central.
- `src/routes/`: rutas protegidas por sesión y rol.
- `src/layouts/`: portal mobile-first del solicitante y portal interno con Sider colapsable.
- `src/components/`: estados, justificaciones, auditoría, confirmaciones, encabezados y estados vacíos.
- `src/pages/`: login, páginas del solicitante, páginas internas y acceso restringido.
- `src/theme/`: tokens de Ant Design alineados con `DESIGN.md`.

## Decisiones de UX

El solicitante ve una tarea principal por pantalla, navegación inferior en móvil y controles grandes. El personal interno obtiene una navegación operativa con búsqueda, alertas, perfil y menú filtrado por rol. Los estados siempre incluyen icono y texto, nunca dependen solo del color. El login recibe únicamente el correo: el servicio mock busca la cuenta y devuelve el rol asociado; con backend, esa relación vendrá en la respuesta de autenticación junto con el JWT. La sesión mock se conserva en `sessionStorage` y deberá reemplazarse por el flujo JWT real cuando exista backend.

## Alcance mock

El login permite explorar cada perfil usando un correo de demostración, sin selector manual de rol ni contraseña. Solicitudes, préstamo, pagos, políticas y auditoría usan datos ficticios. No se implementan todavía cálculos de cuotas, decisiones financieras automáticas, carga de documentos ni persistencia real.

## Vista del Oficial de Crédito

La ruta `/internal/applications/:id/review` presenta la información del solicitante, indicadores de capacidad, relación deuda/ingreso, política aplicada, observaciones y trazabilidad. El resultado se elige entre aprobación, aprobación con condiciones o rechazo. La justificación es obligatoria y exige mínimo 30 caracteres; la aprobación con condiciones exige además describir las condiciones.

La vista usa `riskService` con la misma forma de datos prevista por `RiskEvaluation` y `LoanDecision`. El backend sincronizado actualmente expone la recepción pública de solicitudes, pero todavía no expone endpoints internos para listar solicitudes, guardar evaluaciones o registrar decisiones; por eso esas operaciones permanecen mock hasta que el equipo backend publique ese contrato.
