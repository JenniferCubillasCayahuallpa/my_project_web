# Mi Negocio Web

Una página web moderna desarrollada con Angular SSR (Server-Side Rendering) que presenta un negocio con múltiples páginas y optimización SEO.

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
- Hero section con llamada a la acción
- Características principales del negocio
- Sección de llamada a la acción

### 👥 Nosotros
- Historia de la empresa
- Misión y visión
- Valores corporativos
- Equipo de trabajo

### 🛍️ Productos
- Catálogo de productos con filtros
- Características de los productos
- Testimonios de clientes
- Información de contacto

## 🔍 SEO

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

- **Email**: contacto@minegocio.com
- **Teléfono**: +1 (555) 123-4567
- **Dirección**: Av. Principal 123, Ciudad

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

Desarrollado con ❤️ usando Angular SSR