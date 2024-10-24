
import { groupByApplication } from '../services/dataAdaptor/dba-manager';
import ApplicationVisit from '../components/steps/JourneyByApplication/ApplicationVisit'
import Layout from '../components/Layout';

const AppVisit = () => {
   const steps = groupByApplication('ec85ad30-4fcf-45aa-aeab-743b93fe209e');
  return (
    <>
    <Layout/>
        <ApplicationVisit
        steps = { steps }
        />
    </>
    
      
  );
};

export default AppVisit;