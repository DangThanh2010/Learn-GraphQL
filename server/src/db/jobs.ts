import { connection } from "./connection";
import { generateId } from "./ids";

const getJobTable = () => connection.table("job");

export async function getJobs() {
  return await getJobTable().select();
}

export async function getJob(id: string) {
  return await getJobTable().first().where({ id });
}

export async function createJob({
  companyId,
  title,
  description,
}: {
  companyId: string;
  title: string;
  description: string;
}) {
  const job = {
    id: generateId(),
    companyId,
    title,
    description,
    createdAt: new Date().toISOString(),
  };
  await getJobTable().insert(job);
  return job;
}

export async function deleteJob(id: string) {
  const job = await getJobTable().first().where({ id });
  if (!job) {
    throw new Error(`Job not found: ${id}`);
  }
  await getJobTable().delete().where({ id });
  return job;
}

export async function updateJob({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  const job = await getJobTable().first().where({ id });
  if (!job) {
    throw new Error(`Job not found: ${id}`);
  }
  const updatedFields = { title, description };
  await getJobTable().update(updatedFields).where({ id });
  return { ...job, ...updatedFields };
}
