--creamos las tablas
--carrera
CREATE TABLE 'correlativas'.'carrera' (
  'idCarrera' int(250) NOT NULL,
  'nombre' varchar(250) NOT NULL,
  'plan' varchar(250) NOT NULL,
  'duracion' int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--correlativas
CREATE TABLE 'correlativas'.'correlativa' (
  'necesaria' int(250) NOT NULL,
  'disponible' int(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--imparte
CREATE TABLE 'correlativas'.'imparte' (
  'idCarrera' int(250) NOT NULL,
  'idMateria' int(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--materia
CREATE TABLE 'correlativas'.'materia' (
  'idMateria' int(250) NOT NULL,
  'nombre' varchar(250) NOT NULL,
  'ano' int(250) NOT NULL,
  'cuatrimestre' int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--finales
CREATE TABLE `correlativas`.`final` (
 `necesaria` INT(250) NOT NULL , 
    `disponible` INT(250) NOT NULL 
) ENGINE = InnoDB;

--dicta
CREATE TABLE 'correlativas'.'dicta' (
 'idMateria' INT(250) NOT NULL , 
 'aula' VARCHAR(250) NOT NULL ,
 'dia' VARCHAR(250) NOT NULL ,
 'modulo' VARCHAR(250) NOT NULL ,
 'hora' TIME NOT NULL,
 'cuatrimestre' INT(250) NOT NULL,
 'estado' VARCHAR(250) NOT NULL
) ENGINE = InnoDB;

-- carga de datos

-- carreras

INSERT INTO 'carrera' ('idCarrera', 'nombre', 'plan', 'duracion') VALUES
(1, 'Profesorado en Informática', '1185/13','4'),
(2, 'Licenciatura en Ciencias de la Computación', '1112/13', 5),
(3, 'Licenciatura en Sistemas de Información', '1420/2013', 5),
(4, 'Tecnicatura Universitaria en Desarrollo Web', '0885/2012', 3),
(5, 'Tecnicatura Universitaria en Administración de Sistemas y Software Libre', '0895/2012 ', 3);

-- materias 

-- materias TUASySL
INSERT INTO `materia`(`idMateria`, `nombre`, `ano`, `cuatrimestre`) VALUES
(NULL, 'Introduccion a la Computacion','1','1'),
(NULL, 'Matematica General','1','1'),
(NULL, 'Ingles Tecnico','1','1'),
(NULL, 'Introduccion a la Programacion','1','2'),
(NULL, 'Introduccion a la Administracion de Sistemas','1','2'),
(NULL, 'Redes de Datos','1','2'),
(NULL, 'Software Libre','2','1'),
(NULL, 'Taller de Hardware y Software','2','1'),
(NULL, 'Administracion de Sistemas','2','1'),
(NULL, 'Administracion de Servicios','2','2'),
(NULL, 'Sistemas de Informacion','2','2'),
(NULL, 'Automatizacion y Scrpting','2','2'),
(NULL, 'Administracion de Sistemas Avanzada', 3,'1'),
(NULL, 'Aplicaciones Libres', 3,'1'),
(NULL, 'Electiva', 3,'1')
;

-- materias del titulo intermedio
INSERT INTO `materia`  (`idMateria`, `nombre`, `ano`, `cuatrimestre`) VALUES
(NULL,'Elementos de Algebra','1','1'),
(NULL,'Resolucion de Problemas y Algoritmos','1','1'),
(NULL,'Modelos y Sistemas de Informacion','1','1'),
(NULL,'Introduccion a la Computacion','1','1'),
(NULL,'Desarrollo de Algoritmos','1','2'),
(NULL,'Elementos de Algebra Lineal','1','2'),
(NULL,'Elementos de Teoria de la Computacion','1','2'),
(NULL,'Modelado de Datos','1','2'),
(NULL,'Cálculo Diferencial e Integral' ,'2','1'),
(NULL,'Programacion Orientada a Objetos','2','1'),
(NULL,'Estructuras de Datos','2','1'),
(NULL,'Teoria de la Computacion I','2','1'),
(NULL,'Inglés Técnico I','2','1'),
(NULL,'Métodos Computacionales para el Cálculo','2','2'),
(NULL,'Programacion Concurrente','2','2'),
(NULL,'Teoria de la Computacion II','2','2'),
(NULL,'Arquitecturas y Organizacion de Computadoras I','2','2'),
(NULL,'Ingenieria de Requerimientos','2','2'),
(NULL,'Inglés Técnico II','2','2'),
(NULL,'Probabilidad y Estadistica', 3,'1'),
(NULL,'Principios de Lenguajes de Programacion', 3,'1'),
(NULL,'Sistemas Operativos I',3,'1'),
(NULL,'Diseño de Bases de Datos',3,'1'),
(NULL,'Arquitecturas de Software',3,'1'),
(NULL,'Análisis de Algoritmos',3,'2'),
(NULL,'Laboratorio de Programacion',3,'2'),
(NULL,'Lógica para Ciencias de la Computacion',3,'2'),
(NULL,'Redes de Computadoras I',3,'2'),
(NULL,'Gestion de Proyectos de Desarrollo Software',3,'2'),
(NULL,'Gestion de Bases de Datos',3,'2'),
(NULL,'Gestion de Bases de Datos',3,'2')
;

-- materias en comun 4 y 5 año
INSERT INTO `materia`(`idMateria`, `nombre`, `ano`, `cuatrimestre`) VALUES
(NULL,'Sistemas Paralelos','4','1'),
(NULL,'Inteligencia Artificial LicCien ','4','2'),
(NULL,'Sistemas Inteligentes',5,'1'),
(NULL,'Laboratorio de Programacion Distribuida',5,'1');

-- materias de carrera licenciatura en ciencias de la computacion
INSERT INTO `materia`(`idMateria`, `nombre`, `ano`, `cuatrimestre`) VALUES
(NULL,'Lenguajes Declarativos','4','1'),
(NULL,'Complejidad Computacional','4','1'),
(NULL,'Especificacion de Software','4','1'),
(NULL,'Diseño de Algoritmos','4','2'),
(NULL,'Conceptos Avanzados de Lenguajes de Programacion','4','2'),
(NULL,'Especificación con Métodos Formales','4','2'),
(NULL,'Aspectos Profesionales y Sociales','4','2'),
(NULL,'Agentes Inteligentes para la Web',5,'1'),
(NULL,'Diseño de Compiladores e Interpretes',5,'1'),
(NULL,'Electiva I',5,'1'),
(NULL,'Trabajo de Tesis',5,'1'),
(NULL,'Laboratorio de Compiladores e Intérpretes',5,'2'),
(NULL,'Laboratorio de Inteligencia Artificial',5,'2'), 
(NULL,'Tecnicas para Minería de Datos',5,'2'),
(NULL,'Electiva II Según Electiva',5,'2'),
(NULL,'Trabajo de Tesis',5,'2'); 

-- materias de carrera licenciatura en sistemas
INSERT INTO `materia`(`idMateria`, `nombre`, `ano`, `cuatrimestre`) VALUES
(NULL, 'Matematica General','1','1'),
(NULL, 'Introduccion a la Programacion','1','1'),
(NULL, 'Ingles Tecnico','1','1'),
(NULL, 'Programacion Estatica y Laboratorio Web','1','2'),
(NULL, 'Introduccion a la Programacion Orientada a Objetos','1','2'),
(NULL, 'Conceptos de Bases de Datos','1','2'),
(NULL, 'Programacion Web Dinamica','2','1'),
(NULL, 'Arquitectura y Seguridad de Computadoras','2','1'),
(NULL, 'Diseno Grafico','2','1'),
(NULL, 'Programacion Web Avanzada','2','2'),
(NULL, 'Analisis, Diseño y Documentacion de Sistemas','2','2'),
(NULL, 'Framework e Interoperabilidad', 3,'1'),
(NULL, 'Trabajo Final Tecnicatura en Desarrollo Web', 3,'1'),
(NULL, 'Planificacion y Control de Proyectos','4','2'),
(NULL, 'Sistemas de Informacion I','4','2'),
(NULL, 'Modelado de Procesos de Negocios','4','2'),
(NULL, 'Especificacion de Requerimientos','4','2'),
(NULL, 'Especificacion de Diseño de Software','4','2'),
(NULL, 'Deposito y Mineria de Datos','4','2'),
(NULL, 'Sistema de Informacion II','4','2'),
(NULL, 'Laboratorio de Bases de Datos','4','2'),
(NULL, 'Auditoria de Sistemas de Informacion', 5,'2'),
(NULL, 'Verificacion y Validacion de Software', 5,'2'),
(NULL, 'Electiva I', 5,'2'),
(NULL, 'Trabajo Tesis I LicSis', 5,'2'),
(NULL, 'Sistemas de Informacion para la Web', 5,'2'),
(NULL, 'Aspectos Profecionales y Sociales', 5,'2'),
(NULL, 'Reingenieria de Software y Procesos', 5,'2'),
(NULL, 'Construccion y Validacion de Software', 5,'2'),
(NULL, 'Electiva II', 5,'2'),
(NULL, 'Trabajo Tesis II LicSis', 5,'2');

-- materias TUDW
INSERT INTO `materia`(`idMateria`, `nombre`, `ano`, `cuatrimestre`) VALUES
(NULL, 'Matematica General','1','1'),
(NULL, 'Introduccion a la Programacion','1','1'),
(NULL, 'Ingles Tecnico','1','1'),
(NULL, 'Programacion Estatica y Laboratorio Web','1','2'),
(NULL, 'Introduccion a la Programacion Orientada a Objetos','1','2'),
(NULL, 'Conceptos de Bases de Datos','1','2'),
(NULL, 'Programacion Web Dinamica','2','1'),
(NULL, 'Arquitectura y Seguridad de Computadoras','2','1'),
(NULL, 'Diseno Grafico','2','1'),
(NULL, 'Programacion Web Avanzada','2','2'),
(NULL, 'Analisis, Diseño y Documentacion de Sistemas','2','2'),
(NULL, 'Framework e Interoperabilidad', 3,'1'),
(NULL, 'Trabajo Final Tecnicatura en Desarrollo Web', 3,'1');


-- profesorado en ciencias
INSERT INTO `materia`(`idMateria`, `nombre`, `ano`, `cuatrimestre`) VALUES
(NULL, 'Pedagogía','1','1'),
(NULL, 'Psicología I','1','2'),
(NULL, 'Didáctica General','2','2'),
(NULL, 'Métodos Computacionales para el Cálculo',3,'1'),
(NULL, 'Tecnologías de la Información y Comunicación en la Educación', 3,'1'),
(NULL, 'Psicología II', 3,'1'), 
(NULL, 'Laboratorio de Tecnologías de la Información y Comunicación en la Educación', 3,'2'),
(NULL, 'Probabilidad y Estadística','4','1'), 
(NULL, 'Laboratorio de Sistemas Informáticos para Educación','4','1'),
(NULL, 'Didáctica Específica','4','1'), 
(NULL, 'Política Educacional Argentina','4','1'),
(NULL, 'Tópicos Avanzados en Ciencias de la Computación','4','2'), 
(NULL, 'Residencia','4','2');

-- carrera asociadas a materias

-- carrera TUASySL
INSERT INTO 'imparte' ('idCarrera', 'idMateria')
VALUES
('5','1'),
('5','2'),
('5','3'),
('5','4'),
('5','5'),
('5','6'),
('5','7'),
('5','8'),
('5','9'),
('5','10'),
('5','11'),
('5','12'),
('5','13'),
('5','14'),
('5','15');
--materias en comun 4, 5 año
INSERT INTO 'imparte' ('idCarrera', 'idMateria')
VALUES
('2', '51'),
('2', '52'),
('2', '53'),
('2', '54'),
('3', '51'),
('3', '52'),
('3', '53'),
('3', '54');

--materias de título intermedio con las licenciaturas
INSERT INTO 'imparte' ('idCarrera', 'idMateria')
VALUES 
('2', '16'),
('2', '17'),
('2', '18'),
('2', '19'),
('2', '20'),
('2', '21'),
('2', '22'),
('2', '23'),
('2', '24'),
('2', '25'),
('2', '26'),
('2', '27'),
('2', '28'),
('2', '29'),
('2', '30'),
('2', '31'),
('2', '32'),
('2', '33'),
('2', '34'),
('2', '35'),
('2', '36'),
('2', '37'),
('2', '38'),
('2', '39'),
('2', '40'),
('2', '41'),
('2', '42'),
('2', '43'),
('2', '44'),
('2', '45'),
('3', '16'),
('3', '17'),
('3', '18'),
('3', '19'),
('3', '20'),
('3', '21'),
('3', '22'),
('3', '23'),
('3', '24'),
('3', '25'),
('3', '26'),
('3', '27'),
('3', '28'),
('3', '29'),
('3', '30'),
('3', '31'),
('3', '32'),
('3', '33'),
('3', '34'),
('3', '35'),
('3', '36'),
('3', '37'),
('3', '38'),
('3', '39'),
('3', '40'),
('3', '41'),
('3', '42'),
('3', '43'),
('3', '44'),
('3', '45');


--materias licenciatura en ciencias de computacion
INSERT INTO 'imparte' ('idCarrera', 'idMateria')
VALUES 
('2','55'),
('2','56'),
('2','57'),
('2','58'),
('2','59'),
('2','60'),
('2','61'),
('2','62'),
('2','63'),
('2','64'),
('2','65'),
('2','66'),
('2','67'),
('2','68'),
('2','69'),
('2','70');

--materias sistemas de informacion
INSERT INTO 'imparte' ('idCarrera', 'idMateria')
VALUES
('3','71'),
('3','72'),
('3','73'),
('3','74'),
('3','75'),
('3','76'),
('3','77'),
('3','78'),
('3','79'),
('3','80'),
('3','81'),
('3','82'),
('3','83'),
('3','84'),
('3','85'),
('3','86'),
('3','87'),
('3','88');

--materias TUDW
INSERT INTO 'imparte' ('idCarrera', 'idMateria')
VALUES
('4','89'),
('4','90'),
('4','91'),
('4','92'),
('4','93'),
('4','94'),
('4','95'),
('4','96'),
('4','97'),
('4','98'),
('4','99'),
('4','100'),
('4','101');

--profesorado
INSERT INTO 'imparte' ('idCarrera', 'idMateria')
VALUES
('1','102'),
('1','103'),
('1','104'),
('1','105'),
('1','106'),
('1','107'),
('1','108'),
('1','109'),
('1','110'),
('1','111'),
('1','112'),
('1','113'),
('1','114'),
('1','16'),
('1','17'),
('1','18'),
('1','19'),
('1','20'),
('1','22'),
('1','23'),
('1','24'),
('1','25'),
('1','26'),
('1','27'),
('1','28'),
('1','30'),
('1','31'),
('1','32'),
('1','33'),
('1','34'),
('1','37'),
('1','39'),
('1','43'),
('1','61');

-- correlativas

--materias TASySL
INSERT INTO 'correlativa' ('necesaria', 'disponible') VALUES
('1', '5'),
('1', '6'),
('2', '6'),
('3', '5'),
('4', '7'),
('4', '8'),
('4', '9'),
('4', '12'),
('5', '8'),
('5', '10'),
('5', '11'),
('5', '12'),
('6', '9'),
('7', '14'),
('8', '14'),
('9', '10'),
('9', '12'),
('10', '15'),
('11', '0'),
('12', '13'),
('13', '0'),
('14', '0'),
('15', '0'),
('0', '1'),
('0', '2'),
('0', '3'),
('0', '4');

--titulo intermedio
--Primer año

INSERT INTO 'correlativa' ('necesaria', 'disponible') VALUES
('0','16'),
('0','17'),
('0','18'),
('0','19'),
('16','20'),
('16','21'),
('16','22'),
('17','20'),
('17','23'),
('18','23'),
--
--segundo
--
('16','24'),
('19','28'),
('19','30'),
('18','28'),
('20','25'),
('20','26'),
('20','27'),
('20','29'),
('22','26'),
('22','27'),
('24','29'),
('25','30'),
('25','33'),
('25','36'),
('27','31'),
('27','32'),
('27','36'),
('28','34'),
--tercer año
('29','35'),
('26','37'),
('26','38'),
('26','39'),
('30','37'),
('32','37'),
('33','38'),
('33','39'),
('34','39'),
('31','40'),
('35','40'),
('26','41'),
('30','41'),
('26','42'),
('31','42'),
('34','42'),
('37','43'),
('39','44'),
('30','45'),
('38','45');

--licencuatura en ciancias
INSERT INTO `correlativa` (`necesaria`, `disponible`) VALUES
('36','55'),
('42','55'),
('40','56'),
('42','56'),
('37''51'),
('44','57'),
('40','58'),
('36','52'),
('30','59'),
('37','59'),
('57','60'),
('39','61'),
('41','61'),
('43','61'),
('52','53'),
('52''62'),
('59','63'),
('51','54'),
('58','65'),
('52','65'),
('61','65'),
('41','66'),
('63','66'),
('55','67'),
('58','67'),
('53','67'),
('62','67'),
('53','68');

--licenciatura en sistemas
INSERT INTO `correlativa` (`necesaria`, `disponible`) VALUES
('35','71'),
 ('44','71'),
('44','72'),
('44','73'),
('39','74'),
('37','51'),
('36','52'),
('73','75'),
('74','75'),
('45','76'),
('72','77'),
('73','77'),
('45','78'),
('52','53'), 
('77','79'),
('75','80'),
('51','54'),
('52','82'),
('77','82'),
('78','82'),
('77','83'),
('53','83'),
('39','84'),
('41','84'),
('43','84'),
('77','85'),
('78','86'),
('80',’75‘);

--Tecnicatura en Desarrollo Web
INSERT INTO `correlativa` (`necesaria`, `disponible`) VALUES
('0','89'),
('0','90'),
('0','91'),
('90','92'),
('90','93'),
('89','94'),
('91','94'),
('92','95'),
('93','95'),
('94','95'),
('89','96'),
('91','96'),
('92','97'),
('95','98'),
('93','99'),
('94','99'),
('95','100'),
('96','101'),
('97','101'),
('98','101'),
('99','101');

-- dicta



-- finales

-- finales titulo intermedio:
INSERT INTO `final` (`necesaria`, `disponible`) VALUES
('26','17'),
('29','16'),
('31','22'),
('32','19'),
('33','16'),
('33','23'),
('38','21'),
('39','25'),
('41','25'),
('42','27'),
('43','32'),
('44','33'),
('45','33');

-- finales LCC:
INSERT INTO `final` (`necesaria`, `disponible`) VALUES 
('55','26'),
('56','31'),
('51','32'),
('57','38'),
('57','39'),
('52','42'),
('59','36'),
('60','42'),
('53','35'),
('62','36'),
('54','37'),
('54','43'),
('65','44'),
('65','43');

-- finales LCS:
INSERT INTO `final` (`necesaria`, `disponible`) VALUES 
('74','33'),
('51','32'),
('52','42'),
('75','39'),
('76','35'),
('76','38'),
('78','38'),
('53','35'),
('79','44'),
('80','40'),
('54','37'),
('54','43'),
('88','44'),
('88','43'),
('83','72'),
('83','52'),
('85','72'),
('85','73'),
('86','41');

-- finales TUASySl:
-- NULL

-- finales TUDW:
-- NULL

--
-- Indexes for dumped tables
--

--
-- Indexes for table 'carrera'
--
ALTER TABLE 'carrera'
  ADD PRIMARY KEY ('idCarrera'),
  ADD KEY 'idCarrera' ('idCarrera');

--
-- Indexes for table 'dicta'
--
ALTER TABLE 'dicta'
  ADD KEY 'idMateria' ('idMateria');

--
-- Indexes for table 'imparte'
--
ALTER TABLE 'imparte'
  ADD KEY 'idCarrera' ('idCarrera'),
  ADD KEY 'idMateria' ('idMateria');

--
-- Indexes for table 'materia'
--
ALTER TABLE 'materia'
  ADD PRIMARY KEY ('idMateria');


--
-- indexes for table ‘final’
--

ALTER TABLE `final` 
ADD INDEX(`necesaria`);

ALTER TABLE `final` 
ADD INDEX(`disponible`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table 'carrera'
--
ALTER TABLE 'carrera'
  MODIFY 'idCarrera' int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table 'materia'
--
ALTER TABLE 'materia'
  MODIFY 'idMateria' int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- Constraints for dumped tables
--

--
-- Constraints for table 'dicta'
--
ALTER TABLE 'dicta'
  ADD CONSTRAINT 'dictaMateria' FOREIGN KEY ('idMateria') REFERENCES 'materia' ('idMateria') ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table 'imparte'
--
ALTER TABLE 'imparte'
  ADD CONSTRAINT 'imparteCarrera' FOREIGN KEY ('idCarrera') REFERENCES 'carrera' ('idCarrera') ON DELETE CASCADE ON UPDATE CASCADE,

  ADD CONSTRAINT 'imparteMateria' FOREIGN KEY ('idMateria') REFERENCES 'materia' ('idMateria');
COMMIT;

ALTER TABLE 'dicta' ADD CONSTRAINT 'dicta' FOREIGN KEY ('idMateria') REFERENCES 'materia'('idMateria') ON DELETE CASCADE ON UPDATE CASCADE;