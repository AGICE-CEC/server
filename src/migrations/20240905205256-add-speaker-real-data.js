'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'SPEAKER',
      [
        {
          speakerId: 1,
          speakerName: 'Rector UVG, M. A. Roberto Moreno Godoy',
          speakerDescription: `Rector Universidad del Valle de Guatemala. Se graduó de Bachiller en Ciencias y Letras en el Colegio Americano de Guatemala.  En la Universidad del Valle de Guatemala obtuvo un Profesorado de Enseñanza Media especializado en Ciencias Naturales, el Baccalauretus un Scientiis y la Licenciatura en Educación.  Posteriormente estudió en la Universidad Estatal de Michigan Administración Educativa y Desarrollo Curricular.    En la Universidad de Stanford, California obtuvo la Maestría en Administración Educativa y Análisis de Políticas y un Postgrado como Especialista en Evaluación.

Como docente se ha desempeñado en la Sección Secundaria del Colegio Americano y en la Facultad de Educación de la Universidad del Valle de Guatemala.  En la UNESCO trabajó como Especialista Regional para Centro América y Panamá.   En la Asociación de Investigación y Estudios Sociales ASIES, tuvo el puesto de Secretario Ejecutivo Adjunto.  En el sector gubernamental ocupó el cargo de Ministro y Viceministro de Educación de Guatemala.  Desde enero 2000 fue Secretario Ejecutivo de la Fundación de la Universidad del Valle de Guatemala, al 19 de junio de 2001.  De junio 2001 a la fecha es el Rector de la Universidad del Valle de Guatemala.`,
          linkedIn:
            'https://ciie.mx/es/httpciie-mxspeakerdeb-masters/roberto-moreno/',
          country: 'Guatemala',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          speakerId: 2,
          speakerName: 'Luis Zea',
          speakerDescription:
            'Miembro del Comité organizador del CEC, Ingeniero Mecánico y Maestría en Ingeniería Aeroespacial, guatemalteco y profesor asociado en la Universidad de Colorado Boulder. Su trabajo se centra en la microbiología espacial, investigando cómo las condiciones del espacio afectan a los organismos vivos, con el objetivo de avanzar en la exploración espacial y la salud de los astronautas. Zea ha colaborado en múltiples proyectos con la NASA y otras instituciones internacionales, destacándose por su enfoque en cómo las nuevas plataformas comerciales en el espacio pueden beneficiar a países en desarrollo como Guatemala. Es un firme defensor del desarrollo y la inclusión de América Latina en la industria espacial',
          linkedIn: 'https://www.linkedin.com/in/spaceluiszea/',
          country: 'Guatemala',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          speakerId: 3,
          speakerName: 'Comité Organizador',
          speakerDescription: '',
          country: 'Guatemala',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          speakerId: 4,
          speakerName: 'Dra. Gabriela Montenegro',
          speakerDescription: `La Dra. Gabriela Montenegro Bethancourt es una destacada científica guatemalteca especializada en nutrición y salud pública. Originaria de Quetzaltenango, realizó sus estudios en la Universidad de San Carlos de Guatemala (USAC), donde obtuvo su licenciatura en Nutrición. Posteriormente, continuó su formación con una maestría en Salud Pública en la Universidad Libre de Ámsterdam y un doctorado en Nutrición en la Universidad de Bonn, Alemania.

Montenegro ha centrado su carrera en la investigación de factores dietéticos que afectan la salud infantil y adolescente, con un enfoque particular en las poblaciones indígenas de Guatemala. Ha recibido varios premios internacionales, incluyendo el reconocimiento de la The World Academy of Sciences (TWAS) y el prestigioso premio OWSD-Elsevier para Mujeres Científicas del Mundo en Desarrollo en 2023.

Actualmente, lidera la Secretaría Nacional de Ciencia y Tecnología (SENACYT) en Guatemala, donde se dedica a promover la ciencia y tecnología como herramientas fundamentales para el desarrollo del país`,
          linkedIn:
            'https://www.linkedin.com/in/gabriela-montenegro-bethancourt-7936a563/?originalSubdomain=gt',
          country: 'Guatemala',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          speakerId: 5,
          speakerName: 'Guatemala - INGUAT',
          speakerDescription: 'National Tourism Institute of Guatemala',
          country: 'Guatemala',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          speakerId: 6,
          speakerName: 'Maximo Roa (DLR)',
          speakerDescription:
            'Dr. Maximo A. Roa. Investigador Senior de la DLR. Sus especialidades son Robótica Espacial y robots humanizados e industriales.',
          linkedIn: 'https://www.linkedin.com/in/maximoroa/',
          country: 'Alemania',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          speakerId: 7,
          speakerName: 'AGICE',
          speakerDescription:
            'Asociación Guatemalteca de Ingeniería y Ciencias Espaciales. Promovemos el desarrollo las ciencias espaciales y la unión entre ciencia e ingeniería',
          country: 'Guatemala',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          speakerId: 8,
          speakerName: 'BeyondSight',
          speakerDescription: 'Siempre hay algo más allá de la vista',
          country: 'Guatemala',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          speakerId: 9,
          speakerName: 'Sandra Cauffmann (NASA)',
          speakerDescription: 'Deputy Director, Astrophysics Division',
          linkedIn: 'https://www.linkedin.com/in/sandra-cauffman-6681665/',
          country: 'USA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          speakerId: 10,
          speakerName: 'Kyouchi Arakane (JAXA)',
          speakerDescription: 'Japan Aerospace Exploration Agency (JAXA)',
          linkedIn: 'https://www.linkedin.com/in/kyoichi-arakane-36a9a58/',
          country: 'Japan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          speakerId: 11,
          speakerName: "Akabxpal Yata'z",
          speakerDescription: '',
          country: 'Guatemala',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          speakerId: 12,
          speakerName: 'Jason Reimuller',
          speakerDescription:
            'Dr. Jason Reimuller. Director IIAS. Se ha dedicado a la investigación en la Aeronomía y educación. Ha liderado estudios de aborto de lanzamientos, criterios de compromiso de lanzamiento y condiciones de aterrizaje.',
          linkedIn: 'https://www.linkedin.com/in/jason-reimuller-8677b04/',
          country: 'USA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SPEAKER', null, {});
  },
};
