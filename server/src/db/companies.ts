import { connection } from "./connection";

const getCompanyTable = () => connection.table("company");

export async function getCompany(id: string) {
  return await getCompanyTable().first().where({ id });
}

export async function getCompanies() {
  return await getCompanyTable().select();
}
