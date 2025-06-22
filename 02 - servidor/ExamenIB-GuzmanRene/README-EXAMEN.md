# 📘 Servicio REST /casa — Pruebas en Thunder Client

## 🧾 Descripción

Este proyecto implementa un servicio REST en NestJS que permite consultar información de casas. El endpoint `/casa` responde con una lista de casas o con una sola casa filtrada por ID, según el parámetro `idCasa`.

---

## 📌 Endpoint principal

```
GET /casa
```

- **Sin parámetros:** retorna todas las casas disponibles.
- **Con `idCasa`:** retorna solo la casa cuyo `id` coincida.
- **Si no existe el ID:** retorna error 404 con el mensaje `"No se encuentra"`.

---

## 🏠 Datos simulados

```json
[
  { "id": 1, "nombre": "Casa 1" },
  { "id": 2, "nombre": "Casa 2" }
]
```

---

## ✅ Casos de prueba

### 🧪 Caso 1 – Obtener todas las casas

> Se accede a: `GET http://localhost:3000/casa`  
> Resultado: lista completa de casas


---

### 🧪 Caso 2 – Obtener casa con ID 1

> Se accede a: `GET http://localhost:3000/casa?idCasa=1`  
> Resultado:

```json
[{ "id": 1, "nombre": "Casa 1" }]
```



---

### 🧪 Caso 3 – Obtener casa con ID 2

> Se accede a: `GET http://localhost:3000/casa?idCasa=2`  
> Resultado:

```json
[{ "id": 2, "nombre": "Casa 2" }]
```



---

### ❌ Caso 4 – Buscar casa con ID inexistente

> Se accede a: `GET http://localhost:3000/casa?idCasa=3`  
> Resultado:

```json
{
  "message": "No se encuentra",
  "error": "Not Found",
  "statusCode": 404
}
```


---

## 🚀 Cómo probar

1. Levantar el servidor:

```bash
npm run start
```

2. Usar [Thunder Client](https://www.thunderclient.com/) desde VS Code
3. Probar cada URL y verificar el resultado según los casos
