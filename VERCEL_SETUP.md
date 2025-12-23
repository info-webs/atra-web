# Configuración de Deployment en Vercel

Este proyecto está configurado para deployarse en Vercel con las siguientes consideraciones:

## Variables de Entorno en Vercel

Para que el sitio funcione correctamente en Vercel, necesitas configurar las siguientes variables de entorno:

### TinaCMS Configuration (Opcional)

**Nota:** El editor de TinaCMS requiere estas variables solo si planeas usar el CMS en vivo. El sitio se puede deployar sin ellas.

1. **NEXT_PUBLIC_TINA_CLIENT_ID**
   - Valor: `39607bbb-7596-4df1-8086-382f4ad2f959`
   - Descripción: Client ID de TinaCMS
   - Ambiente: Production, Preview, Development

2. **TINA_TOKEN**
   - Valor: `19263f4821f6a1736e836962c01fc193780ad90f`
   - Descripción: Token de TinaCMS
   - Ambiente: Production, Preview, Development

## Cómo Configurar en Vercel

1. Ve a tu proyecto en Vercel Dashboard
2. Navega a Settings → Environment Variables
3. Agrega cada variable con su valor correspondiente
4. Selecciona los ambientes (Production, Preview, Development) para cada variable
5. Guarda los cambios

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
