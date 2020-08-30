const Query = {
  job: (parent, { id }, { db }) => {
    const job = db.jobs.get(id)
    if (!job) throw new Error('Job not found.')
    return job
  },
  jobs: (parent, args, { db }) => db.jobs.list(),
  company: (parent, { id }, { db }) => {
    const company = db.companies.get(id)
    if (!company) throw new Error('Company not found.')
    return company
  }
}

const Job = {
  company: ({ companyId }, args, { db }) => db.companies.get(companyId)
}

const Company = {
  jobs: (company, args, { db }) =>
    db.jobs.list().filter(job => job.companyId === company.id)
}

module.exports = { Query, Job, Company }
