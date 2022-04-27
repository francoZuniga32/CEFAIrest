"use strict";

module.exports = {
  up: async (queryInterface,Sequelize) => {
    await queryInterface.bulkInsert("Materia",[
      {
        nombre: "Introduccion a la Computacion",          
        anio: 1,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Matematica General",          
        anio: 1,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Ingles Tecnico",          
        anio: 1,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Introduccion a la Programacion",          
        anio: 1,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Introduccion a la Administracion de Sistemas",          
        anio: 1,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Introduccion a laRedes de Datos",          
        anio: 1,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Software Libre",          
        anio: 2,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Taller de Hardware y Software",          
        anio: 2,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Administracion de Sistemas",          
        anio: 2,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Administracion de Servicios",          
        anio: 2,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Sistemas de Informacion",          
        anio: 2,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Automatizacion y Scrpting",          
        anio: 2,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Administracion de Sistemas Avanzada",          
        anio: 3,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Aplicaciones Libres",          
        anio: 3,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Electiva",          
        anio: 3,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Elementos de Algebra",          
        anio: 1,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Resolucion de Problemas y Algoritmos",          
        anio: 1,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Modelos y Sistemas de Informacion",          
        anio: 1,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Introduccion a la Computacion",          
        anio: 1,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Desarrollo de Algoritmos",          
        anio: 1,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Elementos de Algebra Lineal",          
        anio: 1,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Elementos de Teoria de la Computacion",          
        anio: 1,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Modelado de Datos",          
        anio: 1,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Cálculo Diferencial e Integral",          
        anio: 2,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Programacion Orientada a Objetos",          
        anio: 2,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Estructuras de Datos",          
        anio: 2,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Teoria de la Computacion I",          
        anio: 2,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Inglés Técnico I",          
        anio: 2,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Métodos Computacionales para el Cálculo",          
        anio: 2,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Programacion Concurrente",          
        anio: 2,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Teoria de la Computacion II",          
        anio: 2,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Arquitecturas y Organizacion de Computadoras I",          
        anio: 2,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Ingenieria de Requerimientos",          
        anio: 2,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Inglés Técnico II",          
        anio: 2,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Probabilidad y Estadistica",          
        anio: 3,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Principios de Lenguajes de Programacion",          
        anio: 3,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Sistemas Operativos I",          
        anio: 3,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Diseño de Bases de Datos",          
        anio: 3,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Arquitecturas de Software",          
        anio: 3,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Análisis de Algoritmos",          
        anio: 3,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Laboratorio de Programacion",          
        anio: 3,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Lógica para Ciencias de la Computacion",          
        anio: 3,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Redes de Computadoras I",          
        anio: 3,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Gestion de Proyectos de Desarrollo Software",          
        anio: 3,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Gestion de Bases de Datos",          
        anio: 3,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Sistemas Paralelos",          
        anio: 4,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Inteligencia Artificial LicCien ",          
        anio: 4,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Sistemas Inteligentes",          
        anio: 5,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Laboratorio de Programacion Distribuida",          
        anio: 5,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Lenguajes Declarativos",          
        anio: 4,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Complejidad Computacional",          
        anio: 4,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Especificacion de Software",          
        anio: 4,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Diseño de Algoritmos",          
        anio: 4,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Conceptos Avanzados de Lenguajes de Programacion",          
        anio: 4,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Especificación con Métodos Formales",          
        anio: 4,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Aspectos Profesionales y Sociales",          
        anio: 4,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Agentes Inteligentes para la Web",          
        anio: 5,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Diseño de Compiladores e Interpretes",          
        anio: 5,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Electiva I",          
        anio: 5,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Trabajo de Tesis",          
        anio: 5,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Laboratorio de Compiladores e Intérpretes",          
        anio: 5,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Laboratorio de Inteligencia Artificial",          
        anio: 5,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Tecnicas para Minería de Datos",          
        anio: 5,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Electiva II Según Electiva",          
        anio: 5,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Trabajo de Tesis",          
        anio: 5,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Planificacion y Control de Proyectos",          
        anio: 4,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Sistemas de Informacion I",          
        anio: 4,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Modelado de Procesos de Negocios",          
        anio: 4,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Especificacion de Requerimientos",          
        anio: 4,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Especificacion de Diseño de Software",          
        anio: 4,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Deposito y Mineria de Datos",          
        anio: 4,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Sistema de Informacion II",          
        anio: 4,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Laboratorio de Bases de Datos",          
        anio: 4,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Auditoria de Sistemas de Informacion",          
        anio: 5,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Verificacion y Validacion de Software",          
        anio: 5,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Electiva I",          
        anio: 5,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Trabajo Tesis I LicSis",          
        anio: 5,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Sistemas de Informacion para la Web",          
        anio: 5,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Aspectos Profecionales y Sociales",          
        anio: 5,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Reingenieria de Software y Procesos",          
        anio: 5,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Construccion y Validacion de Software",          
        anio: 5,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Electiva II",          
        anio: 5,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Trabajo Tesis II LicSis",          
        anio: 5,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Matematica General",          
        anio: 1,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Introduccion a la Programacion",          
        anio: 1,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Ingles Tecnico",          
        anio: 1,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Programacion Estatica y Laboratorio Web",          
        anio: 1,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Introduccion a la Programacion Orientada a Objetos",          
        anio: 1,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Conceptos de Bases de Datos",          
        anio: 1,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Programacion Web Dinamica",          
        anio: 2,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Arquitectura y Seguridad de Computadoras",          
        anio: 2,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Diseno Grafico",          
        anio: 2,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Programacion Web Avanzada",          
        anio: 2,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Analisis,Diseño y Documentacion de Sistemas",          
        anio: 2,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Framework e Interoperabilidad",          
        anio: 2,          
        cuatrimestre: 3,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Trabajo Final Tecnicatura en Desarrollo Web",          
        anio: 3,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Pedagogía",          
        anio: 1,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Psicología I",          
        anio: 1,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Didáctica General",          
        anio: 2,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Métodos Computacionales para el Cálculo",          
        anio: 2,          
        cuatrimestre: 3,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Tecnologías de la Información y Comunicación en la Educación",          
        anio: 3,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Psicología II",          
        anio: 3,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre:
          "Laboratorio de Tecnologías de la Información y Comunicación en la Educación",          
        anio: 3,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Probabilidad y Estadística",          
        anio: 4,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Laboratorio de Sistemas Informáticos para Educación",          
        anio: 4,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Didáctica Específica",          
        anio: 4,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Política Educacional Argentina",          
        anio: 4,          
        cuatrimestre: 1,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Tópicos Avanzados en Ciencias de la Computación",          
        anio: 4,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Residencia",          
        anio: 4,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
      {
        nombre: "Diseño de Sistemas Informáticos para\r\nEducación",          
        anio: 3,          
        cuatrimestre: 2,          
        createdAt: new Date(),          
        updatedAt: new Date(),          
      },          
    ]);
  },          

  down: async (queryInterface,Sequelize) => {
    await queryInterface.dropTable('Materia')
  },          
};