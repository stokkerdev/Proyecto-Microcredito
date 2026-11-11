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
- [x] Vista del Oficial de Crédito con indicadores de apoyo, política aplicada, trazabilidad y decisión humana.
- [x] Justificación obligatoria de mínimo 30 caracteres y condiciones obligatorias para aprobación condicionada.

## Próximos incrementos

- [ ] Conectar los servicios con endpoints reales cuando exista el backend.
- [ ] Implementar el formulario guiado de nueva solicitud dentro de `ApplicationPage` con guardado de borrador.
- [ ] Incorporar carga y validación de documentos.
- [ ] Conectar la evaluación de riesgo y el registro de decisiones con endpoints reales.
- [ ] Incorporar reconsideraciones y confirmaciones irreversibles.
- [ ] Añadir pruebas unitarias y de navegación por rol.
- [ ] Coordinar con backend los endpoints autenticados para listar solicitudes, consultar evaluaciones y registrar `LoanDecision`/`AuditLog`.
