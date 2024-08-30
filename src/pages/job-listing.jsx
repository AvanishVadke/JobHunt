import { getJobs } from '@/api/apiJobs';
import useFetch from '@/hooks/use-fetch';
import { useSession } from '@clerk/clerk-react';
import React, { useEffect } from 'react';

const JobListing = () => {

  const {
    data: dataJobs,
    loading: loadingJobs,
    fn: fnJobs
  } = useFetch(getJobs,{});
  
  console.log(dataJobs);
  

  useEffect(() => {
    fnJobs();
  }, []);
  

  return (
    <div>JobListing</div>
  );
};

export default JobListing;
