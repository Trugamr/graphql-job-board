const Query = {
  job: (parent, { id }, { db }) => {
    const job = db.jobs.get(id)
    if (!job) throw new Error('Job not found.')
    return job
  },
  jobs: (parent, args, { db }) => db.jobs.list()
}

const Job = {
  company: ({ companyId }, args, { db }) => db.companies.get(companyId)
}

module.exports = { Query, Job }
