# TODO — Arquitectura frontend por roles

## Entregado en esta fase

- [x] Cliente Axios con base URL configurable, JWT y manejo global de 401/403.
- [x] Servicios mock separados para autenticación, solicitudes, préstamos, pagos, políticas y usuarios.
- [x] Datos mock en COP, fechas día/mes/año y roles de la cooperativa.
- [x] Redux Toolkit con sesión de usuario, rol, token y estado de interfaz.
- [x] Login simulado que recibe solo el correo, resuelve automáticamente el rol asociado y redirige al portal correspondiente.
- [x] Rutas protegidas por sesión y rol, pantalla de acceso restringido y redirección a login.
- [x] ApplicantLayout mobile-first con barra inferior de Inicio, Mi solicitud, Mi préstamo y Ayuda.
- [x] InternalLayout con Sider colapsable, búsqueda, alertas, perfil y menú filtrado por rol.
- [x] Componentes StatusChip, JustificationBlock, AuditTimeline, ConfirmModal, PageHeader y EmptyState.
- [x] Páginas mock de solicitud, préstamo, pagos, políticas, auditoría y resumen operativo.
- [x] Pantalla de cronograma de pagos con desglose de capital, interés, saldo, vencimiento y estado de cada cuota.
- [x] Flujo de reconsideración para rechazos con explicación mínima de 30 caracteres y soportes opcionales.
- [x] Panel de reportes de portafolio y equidad restringido a administración y comité supervisor.

## Próximos incrementos

- [ ] Conectar los servicios con endpoints reales cuando exista el backend.
- [ ] Implementar el formulario guiado de nueva solicitud dentro de `ApplicationPage` con guardado de borrador.
- [ ] Incorporar carga y validación de documentos.
- [ ] Añadir evaluación de riesgo como apoyo a la decisión humana.
- [ ] Construir decisiones justificadas y confirmaciones irreversibles.
- [ ] Añadir pruebas unitarias y de navegación por rol.
- [ ] Implementar autenticación real con correo, contraseña, bcrypt, JWT, sesión/perfil y autorización por rol.
- [ ] Conectar cronograma, reconsideraciones y reportes a endpoints reales cuando backend los publique.
