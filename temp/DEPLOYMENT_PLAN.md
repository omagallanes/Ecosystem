# Plan de Despliegue Local — Algeria Ecosystem

## Índice de Contenidos

1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [Stack Tecnológico](#2-stack-tecnológico)
3. [Requisitos Previos](#3-requisitos-previos)
4. [Pasos de Despliegue Ejecutados](#4-pasos-de-despliegue-ejecutados)
5. [Ajustes Realizados](#5-ajustes-realizados)
6. [Estado Actual del Proyecto](#6-estado-actual-del-proyecto)
7. [Comandos de Uso Frecuente](#7-comandos-de-uso-frecuente)
8. [Estructura del Proyecto](#8-estructura-del-proyecto)
9. [Incidencias y Observaciones](#9-incidencias-y-observaciones)
10. [Próximos Pasos Sugeridos](#10-próximos-pasos-sugeridos)

---

## 1. Resumen Ejecutivo

Este documento detalla el proceso completo de clonación, desacoplamiento y despliegue local del proyecto **Algeria Ecosystem** (`https://github.com/algeria-ecosystem/ecosystem`), un directorio comprehensivo del ecosistema de innovación de Argelia (startups, incubadoras, aceleradoras, espacios de coworking, media, empleo, comunidades y eventos).

- **Repositorio original:** `https://github.com/algeria-ecosystem/ecosystem`
- **Ubicación local:** `/workspaces/ecosystem`
- **Servidor de desarrollo:** activo en `http://localhost:8080`
- **Estado:** ✅ Desplegado y accesible para revisión manual

---

## 2. Stack Tecnológico

| Categoría | Tecnología | Versión |
|---|---|---|
| **Lenguaje** | TypeScript | ^5.8.3 |
| **Framework UI** | React | ^18.3.1 |
| **Build Tool** | Vite | ^7.3.1 |
| **Plugin React** | @vitejs/plugin-react-swc | ^3.11.0 |
| **Routing** | React Router DOM | ^6.30.1 |
| **State/Data** | TanStack React Query | ^5.83.0 |
| **Styling** | Tailwind CSS | ^3.4.17 |
| **Componentes UI** | shadcn/ui (Radix UI) | múltiples |
| **Iconos** | Lucide React | ^0.462.0 |
| **Validación** | Zod | ^3.25.76 |
| **Formularios** | React Hook Form | ^7.61.1 |
| **Gráficos** | Recharts | ^2.15.4 |
| **Tema** | next-themes | ^0.3.0 |
| **Linting** | ESLint | ^9.32.0 |
| **Formato** | Prettier | ^3.7.4 |
| **Gestor paquetes** | npm (compatible con Bun) | 11.6.2 |

---

## 3. Requisitos Previos

| Requisito | Versión Mínima | Versión Detectada |
|---|---|---|
| Node.js | 18.x | v24.11.1 |
| npm | 9.x | 11.6.2 |
| Puerto 8080 | disponible | ✅ confirmado |

### Dependencias de desarrollo instaladas automáticamente:
- 381 paquetes instalados vía `npm install`
- Lock file: `package-lock.json`

---

## 4. Pasos de Despliegue Ejecutados

### 4.1 Clonación del Repositorio
```bash
cd /workspaces
git clone https://github.com/algeria-ecosystem/ecosystem.git
```
**Resultado:** ✅ Clonado exitoso (149 archivos, ~16,218 inserciones)

### 4.2 Desconexión del Repositorio Original
```bash
cd /workspaces/ecosystem
git remote remove origin    # Eliminar remote 'origin'
rm -rf .git                 # Eliminar historial Git completo
git init                    # Reinicializar repositorio desde cero
git add -A                  # Añadir todos los archivos
git commit -m "Initial commit: cloned and disconnected from original repository"
```
**Resultado:** ✅ Repositorio limpio, sin remotos, historial nuevo. Verificado con `git remote -v` (vacío).

### 4.3 Instalación de Dependencias
```bash
cd /workspaces/ecosystem
npm install
```
**Resultado:** ✅ 381 paquetes instalados. 12 vulnerabilidades detectadas (3 moderate, 9 high) — no bloqueantes para desarrollo local.

### 4.4 Arranque del Servidor de Desarrollo
```bash
npx vite --host 0.0.0.0
```
**Resultado:** ✅ Servidor activo en `http://localhost:8080`. Respuesta HTTP 200 verificada.

---

## 5. Ajustes Realizados

| Ajuste | Detalle | Motivo |
|---|---|---|
| **Reinicio de Git** | `rm -rf .git && git init` | Desacoplar completamente del repositorio original, eliminando todo historial y remotos |
| **Eliminación de remote** | `git remote remove origin` | Prevenir cualquier vínculo con `github.com/algeria-ecosystem/ecosystem` |
| **Binding de red** | `--host 0.0.0.0` en Vite | Hacer el servidor accesible desde cualquier interfaz de red (no solo localhost) |
| **Puerto** | 8080 (configuración nativa de `vite.config.ts`) | Sin cambios — el puerto estaba libre |

### Configuración nativa de Vite (`vite.config.ts`):
```typescript
server: {
  host: "::",
  port: 8080,
}
```

---

## 6. Estado Actual del Proyecto

| Elemento | Estado |
|---|---|
| **Repositorio Git** | ✅ Inicializado, sin remotos, 1 commit propio |
| **Dependencias** | ✅ Instaladas (`node_modules/` presente) |
| **Servidor de desarrollo** | ✅ Activo en `http://localhost:8080` |
| **HTTP Response** | ✅ 200 OK |
| **Build de producción** | No ejecutado (disponible vía `npm run build`) |
| **Lint** | No ejecutado (disponible vía `npm run lint`) |

---

## 7. Comandos de Uso Frecuente

Todos los comandos deben ejecutarse desde `/workspaces/ecosystem`:

```bash
# Iniciar servidor de desarrollo (ya en ejecución)
npm run dev

# Construir para producción
npm run build

# Construir para producción (modo development)
npm run build:dev

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint

# Formatear código con Prettier
npm run format

# Reparar vulnerabilidades de dependencias
npm audit fix

# Detener el servidor de desarrollo
# Buscar el proceso y ejecutar:
kill <PID>
# o bien:
pkill -f "vite"
```

---

## 8. Estructura del Proyecto

```
/workspaces/ecosystem/
├── index.html                    # Entry point HTML
├── package.json                  # Dependencias y scripts
├── vite.config.ts                # Configuración de Vite
├── tsconfig.json                 # Configuración TypeScript (referencias)
├── tsconfig.app.json             # Configuración TypeScript (app)
├── tsconfig.node.json            # Configuración TypeScript (node)
├── tailwind.config.ts            # Configuración Tailwind CSS
├── postcss.config.js             # Configuración PostCSS
├── eslint.config.js              # Configuración ESLint
├── components.json               # Configuración shadcn/ui
├── public/                       # Archivos estáticos (favicon, logos, CSV datos)
│   ├── logo.png
│   ├── startup-algeria-com-2025-12-24.csv
│   └── ...
├── src/
│   ├── main.tsx                  # Entry point de React
│   ├── App.tsx                   # Componente principal + routing
│   ├── index.css                 # Estilos globales + Tailwind
│   ├── components/               # Componentes compartidos (ThemeToggle, UI shadcn)
│   ├── data/                     # Datos JSON (startups, incubators, events, etc.)
│   ├── features/                 # Módulos por funcionalidad:
│   │   ├── startups/             #   - Startups
│   │   ├── incubators/           #   - Incubadoras
│   │   ├── accelerators/         #   - Aceleradoras
│   │   ├── coworking-spaces/     #   - Espacios de coworking
│   │   ├── events/               #   - Eventos
│   │   ├── jobs/                 #   - Empleos
│   │   ├── media/                #   - Media
│   │   ├── communities/          #   - Comunidades
│   │   └── resources/            #   - Recursos
│   ├── shared/                   # Componentes y páginas compartidas
│   │   ├── components/           #   (Header, Footer, Pagination, etc.)
│   │   ├── pages/                #   (About, NotFound)
│   │   └── types/                #   Tipos compartidos
│   ├── hooks/                    # Hooks personalizados
│   └── lib/                      # Utilidades
└── temp/                         # Documentación de despliegue
    └── DEPLOYMENT_PLAN.md        # ← Este archivo
```

---

## 9. Incidencias y Observaciones

### 9.1 Vulnerabilidades de Dependencias
- **12 vulnerabilidades detectadas** (3 moderate, 9 high)
- **Impacto:** No bloqueante para desarrollo local y revisión manual
- **Resolución sugerida:** Ejecutar `npm audit fix` o actualizar dependencias afectadas

### 9.2 Plugin `lovable-tagger`
- El proyecto incluye el plugin `lovable-tagger` en `vite.config.ts`
- Este plugin solo se activa en modo desarrollo y es parte del tooling original
- No afecta la funcionalidad del proyecto

### 9.3 Datos Estáticos
- Todos los datos (startups, incubators, eventos, etc.) están almacenados como archivos JSON en `src/data/`
- No hay base de datos externa ni API backend
- El proyecto funciona como SPA (Single Page Application) completamente estática

### 9.4 Origen del Proyecto
- El proyecto parece haber sido generado con **Lovable** (plataforma no-code/low-code que genera apps React)
- Evidencia: nombre del paquete `vite_react_shadcn_ts`, plugin `lovable-tagger`, estructura estandarizada

### 9.5 Puerto 8080
- El puerto 8080 estaba libre al momento del despliegue
- Si en el futuro está ocupado, se puede cambiar en `vite.config.ts` o usar `npx vite --port XXXX`

---

## 10. Próximos Pasos Sugeridos

| Paso | Comando | Descripción |
|---|---|---|
| **Revisar la app** | Abrir `http://localhost:8080` | Navegar la aplicación manualmente |
| **Build de producción** | `npm run build` | Generar `dist/` para deploy estático |
| **Previsualizar build** | `npm run preview` | Verificar el build de producción |
| **Auditar dependencias** | `npm audit` | Revisar vulnerabilidades en detalle |
| **Actualizar dependencias** | `npm update` | Actualizar paquetes a versiones compatibles |
| **Ejecutar linter** | `npm run lint` | Verificar calidad del código |
| **Formatear código** | `npm run format` | Aplicar formato Prettier |

---

*Documento generado el 10 de abril de 2026.*
*Proyecto desplegado y listo para revisión manual en `http://localhost:8080`.*
