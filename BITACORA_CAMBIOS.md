# Bitácora de Cambios y Lecciones Aprendidas (Portafolio Angel Ordaya)

Este documento recopila las modificaciones críticas realizadas en el portafolio, así como los problemas resueltos para evitar cometer los mismos errores en futuros despliegues o actualizaciones.

---

## 1. Integración del Formulario de Contacto (Formspree vs EmailJS)
*   **Problema:** Se intentó migrar a EmailJS, pero causaba fallos y se prefirió volver a la configuración previa y funcional de Formspree.
*   **Lección:** Formspree se encuentra integrado y validado con el endpoint de producción `https://formspree.io/f/xwvzrzqd`. 
*   **Regla Futura:** No alterar el archivo `Contacto.jsx` para cambiar de proveedor de correo sin antes verificar que el token de destino esté correctamente configurado en las variables de entorno de producción.

---

## 2. Nombres de Recursos Estáticos e Imágenes (Despliegues en Vercel)
*   **Problema:** Al agregar nuevos proyectos, las imágenes se nombraron originalmente con espacios (ej. `imagen vende-facil.png`). Mientras que localmente en Windows funcionaban, Vercel los convierte en formato de URL con caracteres especiales (`%20`), provocando enlaces caídos (imágenes rotas) en producción.
*   **Lección:** Los nombres de recursos estáticos en la carpeta `public/` **nunca deben contener espacios**.
*   **Regla Futura:**
    *   Usar nombres de archivos en minúscula y separados por guiones (ej. `imagen-vende-facil.png`).
    *   Mantener la coherencia exacta de las extensiones (`.png` o `.jpeg`) tanto en la carpeta `public/` como en el arreglo de datos `proyectosData`.

---

## 3. Soporte para Proyectos con Múltiples Repositorios (Frontend / Backend)
*   **Problema:** El componente original de `Proyectos.jsx` solo soportaba un enlace único para ver el código fuente (`linkCodigo: string`). Al añadir el "Sistema Escolar" estructurado en Frontend (`Proyecto-React-`) y Backend (`api_escuela`), la interfaz no permitía listarlos individualmente.
*   **Solución:** Se flexibilizó la estructura del arreglo `proyectosData` y el renderizado JSX:
    *   Si `linkCodigo` es un string, renderiza el botón clásico "Ver Código".
    *   Si `linkCodigo` es un arreglo de objetos (ej. `[{ label: 'Frontend', url: '...' }]`), itera y renderiza un botón para cada repositorio.
*   **Regla Futura:** Para proyectos divididos, usar el formato de arreglo:
    ```javascript
    linkCodigo: [
      { label: "Frontend", url: "https://github.com/..." },
      { label: "Backend", url: "https://github.com/..." }
    ]
    ```

---

## 4. Renderizado Condicional de Botones "Ver Proyecto" (Demos)
*   **Problema:** Algunos proyectos (como aplicaciones de escritorio o APIs puras) no tienen un enlace demo funcional en vivo.
*   **Solución:** Se implementó renderizado condicional `{proyecto.linkDemo && (...)` en `Proyectos.jsx`.
*   **Regla Futura:** Si un proyecto no tiene demo pública, se debe definir su propiedad `linkDemo: null`, y el botón se ocultará automáticamente de manera elegante en la tarjeta.
