-- CreateTable
CREATE TABLE "tenants_table" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "password" INTEGER NOT NULL,

    CONSTRAINT "tenants_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tenants_table_emailAddress_key" ON "tenants_table"("emailAddress");
