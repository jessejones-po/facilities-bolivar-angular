# SRS - Software Requirements Specification
## Facilities Bolívar - Portal Web

---

## Alcance por Módulo

### 1. Nosotros
**Objetivo técnico:** Storytelling institucional y presentación del equipo.  
**Contenido:** Qué es Facilities Bolívar, tarjetas de beneficios (Continuidad Operativa, Experiencia y Bienestar, Control y Visibilidad, Eficiencia y Optimización).  
**Archivos:** `modules/nosotros/` — `types.ts`, `data.ts`, `nosotros.component.ts`

---

### 2. Soluciones
**Objetivo técnico:** Propuesta de valor de Facility Management con navegación por tabs.  
**Contenido:** Infraestructura Crítica, Gestión Integral de Espacios, Cumplimiento y Control, Servicios para el Usuario, Gestión Técnica Especializada.  
**Archivos:** `modules/soluciones/` — `types.ts`, `data.ts`, `soluciones.component.ts`

---

### 3. Tecnología
**Objetivo técnico:** Detalle del stack de IA y herramientas tecnológicas.  
**Contenido:** Herramientas de monitoreo, integraciones, plataformas.  
**Archivos:** `modules/tecnologia/` — `types.ts`, `data.ts`, `tecnologia.component.ts`

---

### 4. Obras Civiles
**Objetivo técnico:** Portafolio de proyectos físicos e infraestructura.  
**Contenido:** Proyectos ejecutados, imágenes, descripciones, ubicaciones.  
**Archivos:** `modules/obras-civiles/` — `types.ts`, `data.ts`, `obras-civiles.component.ts`

---

### 5. Reconocimiento
**Objetivo técnico:** Certificaciones, premios y social proof.  
**Contenido:** Logos de certificaciones, testimonios, casos de éxito.  
**Archivos:** `modules/reconocimiento/` — `types.ts`, `data.ts`, `reconocimiento.component.ts`

---

### 6. Blog
**Objetivo técnico:** Sistema de contenidos preparado para CMS.  
**Contenido:** Artículos, categorías, metadata, listado y detalle.  
**Archivos:** `modules/blog/` — `types.ts`, `data.ts`, `blog.component.ts`

---

### 7. Sostenibilidad
**Objetivo técnico:** KPIs de impacto ambiental y ESG.  
**Contenido:** Métricas, gráficos, objetivos de sostenibilidad.  
**Archivos:** `modules/sostenibilidad/` — `types.ts`, `data.ts`, `sostenibilidad.component.ts`

---

### 8. Solicitar Diagnóstico
**Objetivo técnico:** Módulo de conversión con formulario y validación.  
**Contenido:** Formulario de contacto, validación (Reactive Forms), integración con API.  
**Archivos:** `modules/solicitar-diagnostico/` — `types.ts`, `data.ts`, `solicitar-diagnostico.component.ts`

---

## Estructura de Archivos por Módulo

Cada módulo sigue la convención:

```
modules/<nombre-modulo>/
├── types.ts          # Interfaces y tipos TypeScript
├── data.ts           # Constantes, mocks, datos estáticos
├── <nombre>.component.ts
└── <nombre>.component.html  (si aplica)
```

---

## Navegación

La navegación centralizada está en `core/layout/navbar/nav.config.ts`.  
Los ítems y el CTA se definen allí para mantener un único punto de configuración.
