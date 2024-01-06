import { Job } from "../@type/job";
import { getCompanies, getCompany } from "../db/companies";
import { getJob, getJobs } from "../db/jobs";

export const resolvers = {
  Query: {
    companies: () => getCompanies(),
    company: (_root: any, args: { id: string }) => {
      if (args.id) {
        return getCompany(args.id);
      }
      return null;
    },
    jobs: () => getJobs(),
    job: (_root: any, args: { id: string }) => {
      if (args.id) {
        return getJob(args.id);
      }
      return null;
    },
  },

  Job: {
    company: (job: Job) => getCompany(job.companyId),
  },
};
