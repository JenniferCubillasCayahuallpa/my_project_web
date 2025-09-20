# Mi Negocio Web - Chocology

Una página web moderna desarrollada con Angular SSR (Server-Side Rendering) que presenta un pequeño negocio.

## 🚀 Características

- **Angular 20** con SSR habilitado
- **3 páginas principales**: Inicio, Nosotros y Productos
- **SEO optimizado** con metatags dinámicos
- **Diseño responsive** (moderno)
- **Navegación fluida** entre las páginas
- **Componentes reutilizables** (Header, Footer)

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── pages/
│   │   ├── inicio/          # Página de inicio
│   │   ├── nosotros/        # Página sobre nosotros
│   │   └── productos/       # Página de productos
│   ├── shared/
│   │   ├── header/          # Componente de navegación
│   │   └── footer/          # Componente de pie de página
│   ├── services/
│   │   └── seo.service.ts   # Servicio para SEO
│   └── app.routes.ts        # Configuración de rutas
```

## 🛠️ Tecnologías Utilizadas

- **Angular 20** - Framework principal
- **Angular SSR** - Server-Side Rendering
- **SCSS** - Estilos con preprocesador
- **TypeScript** - Lenguaje de programación
- **Angular Router** - Navegación entre páginas

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd mi-negocio-web

# Instalar dependencias
npm install

# Servir en modo desarrollo
ng serve

# La aplicación estará disponible en http://localhost:4200
```

### Build para Producción
```bash
# Build con SSR
ng build --configuration production

# Los archivos se generarán en dist/mi-negocio-web/
```

## 🌐 Deployment

### Vercel
1. Conectar el repositorio con Vercel
2. Configurar:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/mi-negocio-web/browser`
   - **Install Command**: `npm install`

### Netlify
1. Conectar el repositorio con Netlify
2. Configurar:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist/mi-negocio-web/browser`

## 📱 Páginas

### 🏠 Inicio

### 👥 Nosotros

### 🧁 Productos

##  👱‍♀️ SEO

Cada página incluye:
- **Títulos únicos** y descriptivos
- **Meta descriptions** optimizadas
- **Keywords** relevantes
- **Open Graph tags** para redes sociales
- **Twitter Card tags**
- **URLs canónicas**

## 🎨 Diseño

- **Responsive design** para todos los dispositivos
- **Gradientes modernos** y colores atractivos
- **Tipografía clara** y legible
- **Animaciones suaves** y transiciones
- **Iconos emoji** para mejor UX

## 📞 Contacto

- **Email**: alejandracubillassrc2021@gmail.com
- **Teléfono**: +51 913441396
- **Dirección**: CUH. Condominio Ciudad Sol Mz CC Lt 13

## 📄 Licencia

© 2025 Valle Grande

---

Desarrollado con ❤️ usando Angular SSR
