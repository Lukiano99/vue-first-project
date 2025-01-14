export const JOBS_URL = '/api/jobs';

export const JOB_URL = (id) => {
  return `${JOBS_URL}/${id}`;
};
