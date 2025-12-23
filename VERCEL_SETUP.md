# Configuración de Deployment en Vercel

Este proyecto está configurado para deployarse en Vercel con las siguientes consideraciones:

## Variables de Entorno en Vercel

**IMPORTANTE: NO configures las variables de TinaCMS en Vercel**

El sitio funciona correctamente SIN las variables de entorno de TinaCMS. Solo necesitas configurarlas si planeas usar el editor de TinaCMS en tu entorno local.

### Variables NO Requeridas (Solo para desarrollo local)

Si quieres usar el editor de TinaCMS localmente, configura estas variables solo en tu archivo `.env` local:

- `NEXT_PUBLIC_TINA_CLIENT_ID` = Tu Client ID de TinaCMS
- `TINA_TOKEN` = Tu Token de TinaCMS

**No agregues estas variables en Vercel Dashboard.**

## Build Configuration

El proyecto incluye un archivo `.npmrc` que configura automáticamente `legacy-peer-deps=true`, por lo que Vercel usará automáticamente esta opción durante la instalación.

Comandos de build:
- **Build Command:** `npm run build` (ya configurado en vercel.json)
- **Output Directory:** `.vercel/output` (automático con Astro + Vercel adapter)
- **Install Command:** `npm install` (automáticamente usa --legacy-peer-deps por el .npmrc)

## Redeploy

Después de agregar las variables de entorno o cambiar la configuración:
1. Ve a la pestaña Deployments
2. Selecciona el último deployment
3. Haz clic en el botón "Redeploy"

## Verificación Local

Para verificar que todo funciona localmente antes de hacer deploy:

```bash
npm install --legacy-peer-deps
npm run build
```

Si el build es exitoso, el proyecto estará listo para deployment en Vercel.

## Scripts Disponibles

- `npm run dev` - Modo desarrollo con TinaCMS
- `npm run build` - Build para producción (sin TinaCMS build)
- `npm run build:tina` - Build con TinaCMS (requiere credenciales válidas)
- `npm run preview` - Preview del build
