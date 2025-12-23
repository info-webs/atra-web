import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images/blog",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog",
        path: "src/content/blog",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Descripción",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "author",
            label: "Autor",
            required: true,
            options: ["ATRA y Obesidad Salamanca", "Equipo ATRA"],
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Fecha de Publicación",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Imagen Destacada",
          },
          {
            type: "string",
            name: "category",
            label: "Categoría",
            required: true,
            options: [
              { value: "TCA", label: "TCA" },
              { value: "Obesidad", label: "Obesidad" },
              { value: "Familia", label: "Familia" },
              { value: "Eventos", label: "Eventos" },
              { value: "Recursos", label: "Recursos" },
              { value: "Testimonios", label: "Testimonios" },
              { value: "Noticias", label: "Noticias" },
            ],
          },
          {
            type: "string",
            name: "tags",
            label: "Etiquetas",
            list: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Borrador",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenido",
            isBody: true,
          },
        ],
      },
    ],
  },
});
