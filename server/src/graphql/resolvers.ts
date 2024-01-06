import { Job } from "../@type/job";
import { getCompanies, getCompany } from "../db/companies";
import { getJobs } from "../db/jobs";

export const resolvers = {
  Query: {
    companies: () => getCompanies(),
    jobs: () => getJobs(),
  },

  Job: {
    company: (job: Job) => getCompany(job.companyId),
  },
};
