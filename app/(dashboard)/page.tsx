'use client';

import { useOrganization } from '@clerk/nextjs';
import EmptyOrg from './_components/sidebar/empty-org';

const Dashboardpage = () => {
  const { organization } = useOrganization();
  return (
    <div className=" flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? <EmptyOrg /> : <>Board List</>}
    </div>
  );
};

export default Dashboardpage;
