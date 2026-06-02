# Examen Programacion III - Backend y Frontend

Duracion: 1 hora 30 minutos.

## Contexto

Se entrega un sistema base de inventario con:

- Backend en NestJS + Prisma.
- Frontend en Astro + Svelte.
- CRUD de usuarios funcionando como ejemplo.

El objetivo es completar una nueva seccion del sistema tomando usuarios como modelo.

## Tarea principal

Agregar un CRUD completo de **marcas**.

La entidad debe tener:

- `id`
- `name`
- `description`
- `createdAt`
- `updatedAt`

## Backend

Crear o completar:

- Modulo.
- Controller.
- Service.
- DTO de creacion.
- DTO de actualizacion.
- Rutas REST:

```txt
GET /brands
GET /brands/:id
POST /brands
PATCH /brands/:id
DELETE /brands/:id
```

Requisitos:

- Validar que `name` sea obligatorio y texto.
- Validar que `description` sea texto si se envia.
- No permitir nombres duplicados.
- Si se busca, edita o elimina un registro inexistente, responder con error adecuado.
- Ordenar el listado alfabeticamente por nombre.

## Frontend

Crear o completar una pantalla que permita:

- Listar registros.
- Crear un registro.
- Editar un registro.
- Eliminar un registro con confirmacion.
- Actualizar la tabla luego de cada accion.
- Agregar la ruta al menu lateral.

Pueden usar la pantalla de usuarios como referencia.

## Correccion de errores

Ademas del CRUD, deben corregir al menos **2 errores** existentes en el proyecto base.

Ejemplos:

- Un modal muestra una propiedad que no existe.
- Un endpoint no devuelve error cuando el registro no existe.
- Un delete puede fallar con error interno si el id no existe.
- Hay textos mal escritos o problemas de codificacion visibles.
- Una actualizacion valida mal datos opcionales.

## Entrega

Entregar el proyecto con:

- Backend ejecutando sin errores.
- Frontend ejecutando sin errores.
- CRUD probado desde la interfaz.
- Archivo breve `NOTAS-EXAMEN.md` indicando:
  - Que CRUD implementaron.
  - Que errores corrigieron.
  - Que partes no llegaron a terminar, si corresponde.

## Puntaje total: 10 puntos

| Criterio | Puntos |
| --- | ---: |
| Descarga, instalacion y ejecucion del proyecto sin ayuda | 0.5 |
| Modelo Prisma, migracion y modulo backend de marcas | 1.5 |
| Endpoints CRUD funcionales | 2 |
| Validaciones y manejo de errores | 1.5 |
| Pantalla frontend de marcas funcional | 2 |
| Correccion de 2 errores existentes | 1 |
| Organizacion, claridad y entrega | 0.5 |
