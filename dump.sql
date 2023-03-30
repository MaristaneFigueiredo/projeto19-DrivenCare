CREATE TABLE "users" (
	"id" serial NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	"typeUser" varchar(1) NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT now(),
	"updateAt" TIMESTAMP NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
);



CREATE TABLE "sessions" (
	"id" serial NOT NULL,
	"userId" integer NOT NULL,
	"token" TEXT NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT now(),
	CONSTRAINT "sessions_pk" PRIMARY KEY ("id")
) ;



CREATE TABLE "patients" (
	"id" serial NOT NULL,
	"userId" integer NOT NULL,
	"createdAt" TIMESTAMP NOT NULL,
	"updateAt" TIMESTAMP NOT NULL,
	CONSTRAINT "patients_pk" PRIMARY KEY ("id")
) ;



CREATE TABLE "specialties" (
	"id" serial NOT NULL,
	"name" varchar(100) NOT NULL UNIQUE,
	"createdAt" TIMESTAMP NOT NULL DEFAULT now(),
	"updateAt" TIMESTAMP NOT NULL,
	CONSTRAINT "specialties_pk" PRIMARY KEY ("id")
) ;



CREATE TABLE "doctors" (
	"id" serial NOT NULL,
	"specialtyId" integer NOT NULL,	
	"userId" integer NOT NULL,
	"locationId" integer NOT NULL ,
	"updateAt" TIMESTAMP NOT NULL,
	CONSTRAINT "doctors_pk" PRIMARY KEY ("id")
) ;



CREATE TABLE "locations" (
	"id" serial NOT NULL,
	"name" varchar(100) NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT now(),
	"updateAt" TIMESTAMP NOT NULL,
	CONSTRAINT "locations_pk" PRIMARY KEY ("id")
);



CREATE TABLE "schedules" (
	"id" serial NOT NULL,
	"date" DATE NOT NULL,
	"time" TIME NOT NULL,
	"avaiable" BOOLEAN NOT NULL DEFAULT 'true',
	"doctorId" integer NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT now(),
	"updateAt" TIMESTAMP NOT NULL,
	CONSTRAINT "schedules_pk" PRIMARY KEY ("id")
) ;



CREATE TABLE "appointments" (
	"id" serial NOT NULL,
	"scheduleId" integer NOT NULL,
	"patientId" integer NOT NULL,
	"status" varchar(2) NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT now(),
	"updateAt" TIMESTAMP NOT NULL,
	CONSTRAINT "appointments_pk" PRIMARY KEY ("id")
) ;

ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id");

ALTER TABLE "patients" ADD CONSTRAINT "patients_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id");


ALTER TABLE "doctors" ADD CONSTRAINT "doctors_fk0" FOREIGN KEY ("specialtyId") REFERENCES "specialties"("id");
ALTER TABLE "doctors" ADD CONSTRAINT "doctors_fk1" FOREIGN KEY ("userId") REFERENCES "users"("id");
ALTER TABLE "doctors" ADD CONSTRAINT "doctors_fk2" FOREIGN KEY ("locationId") REFERENCES "locations"("id");


ALTER TABLE "schedules" ADD CONSTRAINT "schedules_fk0" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id");

ALTER TABLE "appointments" ADD CONSTRAINT "appointments_fk0" FOREIGN KEY ("scheduleId") REFERENCES "schedules"("id");
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_fk1" FOREIGN KEY ("patientId") REFERENCES "patients"("id");



