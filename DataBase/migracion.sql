CREATE TABLE casas_alimentacion (
    codigo_cas TEXT NOT NULL,
    nombre_cas TEXT NOT NULL,
    direccion_cas TEXT,
    sector_cas TEXT,
    estado_cas TEXT,
    telefono1_cas TEXT,
    telefono2_cas TEXT,
    PRIMARY KEY (codigo_cas)
);

CREATE UNIQUE INDEX codcasa ON casas_alimentacion (codigo_cas);

CREATE TABLE almacenes (
    codigo_alm TEXT NOT NULL,
    nombre_alm TEXT NOT NULL,
    direccion_alm TEXT,
    sector_alm TEXT,
    estado_alm TEXT,
    telefono1_alm TEXT,
    telefono2_alm TEXT,
    PRIMARY KEY (codigo_alm)
);

CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    Codigo TEXT NOT NULL,
    Descripcion TEXT,
    Unidad TEXT,
    Tipo TEXT
);

CREATE UNIQUE INDEX codproductos ON productos (Codigo);

CREATE TABLE movimientos (
    codigo_mov TEXT NOT NULL,
    cod_almacen TEXT NOT NULL,
    cod_producto TEXT NOT NULL,
    fecha TEXT NOT NULL,
    tipo TEXT NOT NULL,
    cantidad INTEGER NOT NULL,
    comentario TEXT,
    cod_destino TEXT,
    PRIMARY KEY (codigo_mov)
);

CREATE TABLE existencias (
    cod_existencias TEXT NOT NULL,
    cod_producto TEXT NOT NULL,
    cod_almacen TEXT NOT NULL,
    cantidad REAL,
    fecha_existencia TEXT,
    PRIMARY KEY (cod_existencias)
);

CREATE TABLE sqlite_sequence (
    name TEXT,
    seq TEXT
);