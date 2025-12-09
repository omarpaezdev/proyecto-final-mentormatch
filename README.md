<h1>MentorMatch</h1>

Web donde los mentores con experiencia y conocimiento en el area Tech pueden crear su perfil y crear sus tipos de mentorias y configurar sus sesiones. Los estudiantes pueden crear su perfil y realizar la busqueda del mentor que brinde mentorias en el tema especifico en el cual esta interesado. Al encontrar el mentor, el estudiante puede realizar una reserva de sesion. La web hace uso de la API de calendly usando la cuenta del mentor, previamente autorizada.




<h2> 🚀 Características </h2>
<ul>
    <li>Perfiles de mentor y estudiantes con privilegios de acceso</li>
    <li>Conexion con API de calendly</li>
    <li>Restablecimiento de contraseña</li>
</ul>



<h2>Vistas del Proyecto</h2>
<img width="650" height="700" alt="1" src="https://github.com/user-attachments/assets/de99702d-df98-459c-b424-f3a72f1f4b3f" />
<img width="650" height="700" alt="3" src="https://github.com/user-attachments/assets/cc5d0aec-2382-41e3-8bdc-bebecf8ad8b5" />
<img width="650" height="700" alt="6" src="https://github.com/user-attachments/assets/b7034659-2b9f-4643-a930-18c51a5f0535" />
<img width="650" height="700" alt="8" src="https://github.com/user-attachments/assets/af458020-34db-41b6-b77d-2b66aa924c9b" />
<img width="650" height="700" alt="11" src="https://github.com/user-attachments/assets/3bb3e9a6-520b-4ed5-b04b-f47a51696717" />




## 🛠️ Tecnologías

- React
- Python 
- Flask
- SQLAlchemy
- Bootstrap


## 📦 Instalación

```bash
# Clona el repositorio
git clone https://github.com/omarpaezdev/proyecto-final-mentormatch

# Navega al directorio
cd tu-proyecto

# Instala las dependencias
npm install

```

## 🔧 Configuración

Es importane configurar el .env con las key de Calendly, debes crear una app de tu cuenta develop de calendly.


- CALENDLY_CLIENT_ID= Id generada por calendly
- CALENDLY_CLIENT_SECRET= Secret generada por calendly
- CALENDLY_REDIRECT_URI= "URL_FRONT_END"/api/calendly/callback 

se debe configurar en la app de calendly la REDIRECT_URI con este formato.

## 💻 Uso

```bash
# Comando para ejecutar el proyecto front end
npm run start

# Comando para ejecutar el proyecto backend
pipenv run start


```



## 📁 Estructura del Proyecto

```
proyecto/
├── src/
│   ├── api/
│   └── front/
|       └─── /assets/
|       └─── /components/
|       └─── /hooks/
|       └─── /pages/
|       └─── /services/
|       └─── index.css
|       └─── main.jsx
|       └─── routes.jsx
|       └─── store.jsx
└── README.md
```

